import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { LocalStorageManager } from '@/core/services/local-storage-manager';
import { PublicHttpClient } from '@/core/services/http-client';

interface PublicDependenciesContextType {
  localStorageManager: LocalStorageManager;
  publicHttpClient: PublicHttpClient;
}

const PublicDependenciesContext = createContext<PublicDependenciesContextType | null>(null);

interface PublicDependenciesProviderProps {
  children: ReactNode;
}

export function PublicDependenciesProvider({ children }: PublicDependenciesProviderProps) {
  // Memoize dependencies to avoid unnecessary re-instantiation
  const value = useMemo<PublicDependenciesContextType>(() => ({
    localStorageManager: new LocalStorageManager(),
    publicHttpClient: new PublicHttpClient(),
  }), []);

  return (
    <PublicDependenciesContext.Provider value={value}>
      {children}
    </PublicDependenciesContext.Provider>
  );
}

export function usePublicDependencies(): PublicDependenciesContextType {
  const context = useContext(PublicDependenciesContext);
  if (!context) {
    throw new Error('usePublicDependencies must be used within a PublicDependenciesProvider');
  }
  return context;
}