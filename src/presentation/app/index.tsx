import AppRoutes from "./routes";
import { PublicDependenciesProvider } from "../shared/providers/public-dependencies";

const App = () => {
  return (
    <PublicDependenciesProvider>
      <AppRoutes />
    </PublicDependenciesProvider>
  );
};

export default App;