import { Link } from "react-router";
import Header from "../../components/header";
import { Title, Button, Card } from "@/presentation/shared/components/ui";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <Title level={1} className={styles.heroTitle}>
              Build Amazing Things with <span className={styles.highlight}>MyApp</span>
            </Title>
            <p className={styles.heroSubtitle}>
              The ultimate platform for creating scalable and modern applications. 
              Start building today and bring your ideas to life.
            </p>
            <div className={styles.heroCta}>
              <Link to="/auth/register">
                <Button variant="primary" size="lg">Get Started Free</Button>
              </Link>
              <Link to="/features">
                <Button variant="secondary" size="lg">View Demo</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section className={styles.section}>
          <div className={styles.container}>
            <Title level={2} className={styles.sectionTitle}>Why Choose MyApp?</Title>
            <div className={styles.grid}>
              <Card variant="default" className={styles.card}>
                <div className={styles.cardIcon}>🚀</div>
                <Title level={3}>Lightning Fast</Title>
                <p>Optimized performance for the best user experience.</p>
              </Card>
              <Card variant="default" className={styles.card}>
                <div className={styles.cardIcon}>🔒</div>
                <Title level={3}>Secure by Default</Title>
                <p>Enterprise-grade security built into every feature.</p>
              </Card>
              <Card variant="default" className={styles.card}>
                <div className={styles.cardIcon}>📱</div>
                <Title level={3}>Responsive Design</Title>
                <p>Works perfectly on all devices and screen sizes.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <Title level={2}>Ready to Get Started?</Title>
            <p>Join thousands of developers building amazing applications.</p>
            <Link to="/auth/register">
              <Button variant="primary" size="lg">Start Building Now</Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
