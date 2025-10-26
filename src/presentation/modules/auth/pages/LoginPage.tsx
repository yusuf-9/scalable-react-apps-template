import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button, Card, Title } from "../../../shared/components/ui";
import { usePublicDependencies } from "../../../shared/providers/public-dependencies";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("user@test.com");
  const [password, setPassword] = useState("12345678");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { localStorageManager, publicHttpClient } = usePublicDependencies();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await publicHttpClient.auth.login({ email, password });
      
      // Store auth data
      localStorageManager.set('USER_TOKEN', response.token);
      localStorageManager.set('USER_PREFERENCES', response.user);
      
      // Redirect to dashboard or home
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <Card variant="elevated" className={styles.card}>
          <div className={styles.header}>
            <Title level={1} className={styles.title}>Welcome Back</Title>
            <p className={styles.subtitle}>Sign in to your account to continue</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            {error && (
              <div className={styles.errorMessage}>
                {error}
              </div>
            )}
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={isLoading}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input
                id="password"
                type="password"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                disabled={isLoading}
              />
            </div>

            <div className={styles.formOptions}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" className={styles.checkbox} />
                <span>Remember me</span>
              </label>
              <a href="#" className={styles.link}>
                Forgot password?
              </a>
            </div>

            <Button 
              type="submit" 
              className={styles.submitButton} 
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </Button>
          </form>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              Don't have an account?{" "}
              <Link to="/auth/register" className={styles.link}>
                Sign up
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
