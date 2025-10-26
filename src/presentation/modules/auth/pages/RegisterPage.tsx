import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button, Card, Title } from "../../../shared/components/ui";
import { usePublicDependencies } from "../../../shared/providers/public-dependencies";
import styles from "./RegisterPage.module.css";

export default function RegisterPage() {
  const [name, setName] = useState("Test User");
  const [email, setEmail] = useState("user@test.com");
  const [password, setPassword] = useState("12345678");
  const [confirmPassword, setConfirmPassword] = useState("12345678");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { localStorageManager, publicHttpClient } = usePublicDependencies();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    try {
      const response = await publicHttpClient.auth.register({ name, email, password });
      
      // Store auth data
      localStorageManager.set('USER_TOKEN', response.token);
      localStorageManager.set('USER_PREFERENCES', response.user);
      
      // Redirect to dashboard or home
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <Card variant="elevated" className={styles.card}>
          <div className={styles.header}>
            <Title level={1} className={styles.title}>Create Account</Title>
            <p className={styles.subtitle}>Join us today and get started</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            {error && (
              <div className={styles.errorMessage}>
                {error}
              </div>
            )}
            
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Full Name
              </label>
              <input
                id="name"
                type="text"
                className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
                disabled={isLoading}
              />
            </div>

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
                placeholder="Create a password"
                disabled={isLoading}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword" className={styles.label}>
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                className={styles.input}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
                disabled={isLoading}
              />
            </div>

            <div className={styles.termsWrapper}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" className={styles.checkbox} required />
                <span>
                  I agree to the{" "}
                  <a href="#" className={styles.link}>
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className={styles.link}>
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>

            <Button 
              type="submit" 
              className={styles.submitButton} 
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              Already have an account?{" "}
              <Link to="/auth/login" className={styles.link}>
                Sign in
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
