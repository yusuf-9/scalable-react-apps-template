
import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse, isAxiosError } from "axios";
import { type Middleware } from "../middleware";

export interface HttpClientAdapter {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<{ data: T }>>;
  post<T>(url: string, data: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<{ data: T }>>;
  put<T>(url: string, data: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<{ data: T }>>;
  delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<{ data: T }>>;
}

export class HttpAdapter implements HttpClientAdapter {
  private axiosInstance: AxiosInstance;
  public middlewares: Middleware[] = [];
  private interceptorsSetup: boolean = false;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
    });
  }

  public addMiddleware(middleware: Middleware): void {
    this.middlewares.push(middleware);
  }

  public removeMiddleware(middleware: Middleware): void {
    const index = this.middlewares.indexOf(middleware);
    if (index > -1) {
      this.middlewares.splice(index, 1);
    }
  }

  public setupInterceptors(): void {
    // Prevent duplicate interceptor setup
    if (this.interceptorsSetup) {
      return;
    }

    // Request interceptor
    this.axiosInstance.interceptors.request.use(
      async (config) => {
        let processedConfig = config;
        
        for (const middleware of this.middlewares) {
          if (middleware.onRequest) {
            processedConfig = await middleware.onRequest(processedConfig);
          }
        }
        
        return processedConfig;
      },
      (error) => {
        for (const middleware of this.middlewares) {
          if (middleware.onError) {
            middleware.onError(error);
          }
        }
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.axiosInstance.interceptors.response.use(
      async (response) => {
        let processedResponse = response;
        
        for (const middleware of this.middlewares) {
          if (middleware.onResponse) {
            processedResponse = await middleware.onResponse(processedResponse);
          }
        }
        
        return processedResponse;
      },
      async (error) => {
        let processedError = error;
        
        for (const middleware of this.middlewares) {
          if (middleware.onError) {
            processedError = await middleware.onError(processedError);
          }
        }
        
        return Promise.reject(processedError);
      }
    );

    this.interceptorsSetup = true;
  }

  // GET request method
  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<{ data: T }>> {
    try {
      const response = await this.axiosInstance.get<{ data: T }>(url, config);
      return response;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.error || error?.message);
      }
      throw new Error(error instanceof Error ? error.message : "Something went wrong");
    }
  }

  // POST request method
  public async post<T>(url: string, data: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<{ data: T }>> {
    try {
      const response = await this.axiosInstance.post<{ data: T }>(url, data, config);
      return response;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.error || error?.message);
      }
      throw new Error(error instanceof Error ? error.message : "Something went wrong");
    }
  }

  // PUT request method
  public async put<T>(url: string, data: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<{ data: T }>> {
    try {
      const response = await this.axiosInstance.put<{ data: T }>(url, data, config);
      return response;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.error || error?.message);
      }
      throw new Error(error instanceof Error ? error.message : "Something went wrong");
    }
  }

  // DELETE request method
  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<{ data: T }>> {
    try {
      const response = await this.axiosInstance.delete<{ data: T }>(url, config);
      return response;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.error || error?.message);
      }
      throw new Error(error instanceof Error ? error.message : "Something went wrong");
    }
  }
}

export default HttpAdapter;
