import ProtectedHttpClient from "./protected";
import PublicHttpClient from "./public";

// Export both client classes
export { ProtectedHttpClient, PublicHttpClient };

// Export for convenience - can be used directly
export default {
  ProtectedHttpClient,
  PublicHttpClient,
};
