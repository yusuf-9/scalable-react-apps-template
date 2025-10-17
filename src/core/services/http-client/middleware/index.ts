import { type InternalAxiosRequestConfig, type AxiosResponse } from "axios";
import LocalStorageManager from "../../local-storage-manager";

interface Middleware {
  onRequest?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>;
  onResponse?: (response: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>;
  onError?: (error: unknown) => unknown;
}

class LoggingMiddleware implements Middleware {
  onRequest(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    console.log(`[HTTP Request] ${config.method?.toUpperCase()} ${config.url}`, {
      headers: config.headers,
      data: config.data,
    });
    return config;
  }

  onResponse(response: AxiosResponse): AxiosResponse {
    console.log(`[HTTP Response] ${response.status} ${response.config.url}`, {
      data: response.data,
      headers: response.headers,
    });
    return response;
  }

  onError(error: unknown): unknown {
    const errorInfo: Record<string, unknown> = {};
    
    if (error && typeof error === 'object') {
      if ('config' in error) {
        const config = (error as { config?: { url?: string; method?: string } }).config;
        if (config) {
          errorInfo.url = config.url;
          errorInfo.method = config.method;
        }
      }
      
      if ('response' in error) {
        const response = (error as { response?: { status?: number; data?: unknown } }).response;
        if (response) {
          errorInfo.status = response.status;
          errorInfo.data = response.data;
        }
      }
    }
    
    console.error(`[HTTP Error] ${error instanceof Error ? error.message : 'Unknown error'}`, errorInfo);
    return error;
  }
}

class AuthMiddleware implements Middleware {
  private localStorageManager: LocalStorageManager;

  constructor(localStorageManager: LocalStorageManager) {
    this.localStorageManager = localStorageManager;
  }

  setToken(token: string): void {
    this.localStorageManager.set('USER_TOKEN', token);
  }

  onRequest(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    // Get token from local storage
    const token = this.localStorageManager.get<string>('USER_TOKEN');
    if (token) {
      config.headers.set('Authorization', `Bearer ${token}`);
    }
    return config;
  }
}

class ErrorHandlingMiddleware implements Middleware {
  onError(error: unknown): unknown {
    // Handle common HTTP errors
    if (error && typeof error === 'object' && 'response' in error) {
      const httpError = error as { response: { status: number; data: unknown } };
      const { status, data } = httpError.response;
      
      switch (status) {
        case 401:
          // Handle unauthorized access
          console.warn("Unauthorized access - redirecting to login");
          // You could dispatch a logout action here
          break;
        case 403:
          console.warn("Forbidden access");
          break;
        case 404:
          console.warn("Resource not found");
          break;
        case 500:
          console.error("Internal server error");
          break;
        default:
          console.error(`HTTP Error ${status}:`, data);
      }
    }
    
    return error;
  }
}

export {
  LoggingMiddleware,
  AuthMiddleware,
  ErrorHandlingMiddleware,
  type Middleware,
}