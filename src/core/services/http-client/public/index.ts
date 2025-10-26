import { HttpAdapter } from "./adapter";
import { AuthRepository } from "./repositories/auth";

class PublicHttpClient {
  private adapter: HttpAdapter;
  public auth: AuthRepository;

  constructor() {
    // Initialize the adapter
    this.adapter = new HttpAdapter();

    // Initialize repositories
    this.auth = new AuthRepository(this.adapter);
  }


  // Get the underlying adapter for advanced usage
  public getAdapter(): HttpAdapter {
    return this.adapter;
  }
}

// Export the class
export default PublicHttpClient;

