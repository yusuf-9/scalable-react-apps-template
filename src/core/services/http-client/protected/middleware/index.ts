import { type InternalAxiosRequestConfig, type AxiosResponse } from "axios";
import LocalStorageManager from "../../../local-storage-manager";

interface Middleware {
  onRequest?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>;
  onResponse?: (response: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>;
  onError?: (error: unknown) => unknown;
}

class AuthMiddleware implements Middleware {
  private localStorageManager: LocalStorageManager;

  constructor(localStorageManager: LocalStorageManager) {
    this.localStorageManager = localStorageManager;
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
  AuthMiddleware,
  ErrorHandlingMiddleware,
  type Middleware,
}

