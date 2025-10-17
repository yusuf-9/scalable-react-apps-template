import { HttpAdapter } from "./adapter";
import { LoggingMiddleware, AuthMiddleware, ErrorHandlingMiddleware } from "./middleware";
import { ModuleOneRepository } from "./repositories/module-one";
import { ModuleTwoRepository } from "./repositories/module-two";
import LocalStorageManager from "../local-storage-manager";

export class HttpClient {
  private adapter: HttpAdapter;
  public moduleOne: ModuleOneRepository;
  public moduleTwo: ModuleTwoRepository;

  constructor(localStorageManager: LocalStorageManager) {
    // Initialize the adapter
    this.adapter = new HttpAdapter();

    // Register middleware
    this.registerMiddleware(localStorageManager);

    // Initialize repositories
    this.moduleOne = new ModuleOneRepository(this.adapter);
    this.moduleTwo = new ModuleTwoRepository(this.adapter);
  }

  private registerMiddleware(localStorageManager: LocalStorageManager): void {
    // Add logging middleware for development
    if (import.meta.env.DEV) {
      this.adapter.addMiddleware(new LoggingMiddleware());
    }

    // Add error handling middleware
    this.adapter.addMiddleware(new ErrorHandlingMiddleware());

    // Add auth middleware with local storage manager
    this.adapter.addMiddleware(new AuthMiddleware(localStorageManager));

    // Set up interceptors after all middleware is registered
    this.adapter.setupInterceptors();
  }

  // Method to set authentication token
  public setAuthToken(token: string): void {
    const authMiddleware = this.adapter.middlewares.find(
      middleware => middleware instanceof AuthMiddleware
    ) as AuthMiddleware;
    
    if (authMiddleware) {
      authMiddleware.setToken(token);
    }
  }

  // Method to remove authentication token
  public removeAuthToken(): void {
    this.setAuthToken("");
  }

  // Get the underlying adapter for advanced usage
  public getAdapter(): HttpAdapter {
    return this.adapter;
  }
}

// Export a default instance
export const httpClient = new HttpClient();
