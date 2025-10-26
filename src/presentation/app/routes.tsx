import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import LoadingFallback from "../shared/components/ui/loader";

// Lazy load all routers
const LandingRouter = lazy(() => import("../modules/landing/routes"));
const AuthRouter = lazy(() => import("../modules/auth/routes"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing routes - lazy loaded */}
        <Route
          path="/*"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <LandingRouter />
            </Suspense>
          }
        />

        {/* Auth routes - lazy loaded */}
        <Route
          path="/auth/*"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <AuthRouter />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
