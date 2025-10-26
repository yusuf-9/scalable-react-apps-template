import { Link } from "react-router";
import Header from "../../components/header";
import { Title, Button, Card } from "@/presentation/shared/components/ui";
import styles from "./FeaturesPage.module.css";

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Page Header */}
        <section className={styles.pageHeader}>
          <div className={styles.container}>
            <Title level={1} className={styles.pageTitle}>Powerful Features</Title>
            <p className={styles.pageSubtitle}>
              Everything you need to build modern, scalable applications
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.featuresGrid}>
              <Card variant="default" className={styles.featureCard}>
                <div className={styles.featureIcon}>⚡</div>
                <Title level={3}>Real-time Sync</Title>
                <p>Synchronize data in real-time across all your devices with instant updates.</p>
              </Card>
              
              <Card variant="default" className={styles.featureCard}>
                <div className={styles.featureIcon}>🔐</div>
                <Title level={3}>Advanced Security</Title>
                <p>Bank-level encryption and security protocols to keep your data safe.</p>
              </Card>
              
              <Card variant="default" className={styles.featureCard}>
                <div className={styles.featureIcon}>📊</div>
                <Title level={3}>Analytics Dashboard</Title>
                <p>Comprehensive analytics and insights to track your application's performance.</p>
              </Card>
              
              <Card variant="default" className={styles.featureCard}>
                <div className={styles.featureIcon}>🎨</div>
                <Title level={3}>Customizable Themes</Title>
                <p>Personalize your experience with beautiful, customizable themes.</p>
              </Card>
              
              <Card variant="default" className={styles.featureCard}>
                <div className={styles.featureIcon}>🔌</div>
                <Title level={3}>API Integration</Title>
                <p>Seamlessly integrate with third-party services and APIs.</p>
              </Card>
              
              <Card variant="default" className={styles.featureCard}>
                <div className={styles.featureIcon}>📱</div>
                <Title level={3}>Mobile Ready</Title>
                <p>Fully responsive design that works perfectly on all devices.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Feature Highlight */}
        <section className={styles.highlightSection}>
          <div className={styles.container}>
            <div className={styles.highlight}>
              <div className={styles.highlightContent}>
                <Title level={2}>Built for Scale</Title>
                <p>
                  Our platform is designed to grow with your business. From startups to 
                  enterprises, we provide the tools and infrastructure you need to succeed.
                </p>
                <Link to="/about">
                  <Button variant="primary" size="lg">Learn More</Button>
                </Link>
              </div>
              <div className={styles.highlightImage}>
                <div className={styles.placeholder}>📈</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
