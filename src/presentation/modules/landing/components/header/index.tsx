import { useState, useEffect } from "react";
import { Link } from "react-router";
import styles from "./Header.module.css";
import ThemeSwitcher from "@/presentation/shared/components/theme-switcher";
import { Button } from "@/presentation/shared/components/ui";
import { usePublicDependencies } from "@/presentation/shared/providers/public-dependencies";

interface User {
  id: string;
  email: string;
  name: string;
}

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { localStorageManager } = usePublicDependencies();

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      // Check if user is logged in
      const token = localStorageManager.get<string>('USER_TOKEN');
      const userData = localStorageManager.get<User>('USER_PREFERENCES');
      
      if (token && userData) {
        // Optionally verify token with API
        // const response = await publicHttpClient.auth.refreshToken(token);
        // if (response.token) {
        //   localStorageManager.set('USER_TOKEN', response.token);
        // }
        setUser(userData);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      // Clear invalid tokens
      localStorageManager.remove('USER_TOKEN');
      localStorageManager.remove('USER_PREFERENCES');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorageManager.remove('USER_TOKEN');
    localStorageManager.remove('USER_PREFERENCES');
    setUser(null);
    window.location.href = '/';
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <h1>MyApp</h1>
          </Link>
        </div>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/features" className={styles.navLink}>Features</Link>
          <Link to="/about" className={styles.navLink}>About</Link>
          <Link to="/contact" className={styles.navLink}>Contact</Link>
          <Link to="/terms" className={styles.navLink}>Terms</Link>
        </nav>
        <div className={styles.actions}>
          {isLoading ? (
            <span className={styles.userName}>Loading...</span>
          ) : user ? (
            <>
              <span className={styles.userName}>Welcome, {user.name}</span>
              <Link to="/dashboard">
                <Button variant="primary" size="sm">Dashboard</Button>
              </Link>
              <Button variant="secondary" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/auth/login">
                <Button variant="secondary" size="sm">Sign In</Button>
              </Link>
              <Link to="/auth/register">
                <Button variant="primary" size="sm">Get Started</Button>
              </Link>
            </>
          )}
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
}