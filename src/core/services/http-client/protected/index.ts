import { HttpAdapter } from "./adapter";
import { AuthMiddleware, ErrorHandlingMiddleware } from "./middleware";
import { ModuleOneRepository } from "./repositories/module-one";
import { ModuleTwoRepository } from "./repositories/module-two";
import LocalStorageManager from "../../local-storage-manager";

class ProtectedHttpClient {
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
    // Add error handling middleware
    this.adapter.addMiddleware(new ErrorHandlingMiddleware());

    // Add auth middleware with local storage manager
    this.adapter.addMiddleware(new AuthMiddleware(localStorageManager));

    // Set up interceptors after all middleware is registered
    this.adapter.setupInterceptors();
  }

  // Get the underlying adapter for advanced usage
  public getAdapter(): HttpAdapter {
    return this.adapter;
  }
}

// Export the class
export default ProtectedHttpClient;

