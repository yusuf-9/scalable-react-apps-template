import Header from "../../components/header";
import { Title, Card } from "@/presentation/shared/components/ui";
import styles from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Page Header */}
        <section className={styles.pageHeader}>
          <div className={styles.container}>
            <Title level={1} className={styles.pageTitle}>About MyApp</Title>
            <p className={styles.pageSubtitle}>
              Building the future of application development, one feature at a time
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.contentGrid}>
              <div className={styles.content}>
                <Title level={2}>Our Mission</Title>
                <p>
                  We're on a mission to empower developers and businesses to create 
                  amazing applications without the complexity. Our platform provides 
                  the tools, infrastructure, and support needed to bring ideas to life.
                </p>
                <p>
                  Founded in 2024, MyApp has grown from a simple idea to a comprehensive 
                  platform trusted by thousands of developers worldwide.
                </p>
              </div>
              <div className={styles.imageBox}>
                <div className={styles.placeholder}>🎯</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className={styles.valuesSection}>
          <div className={styles.container}>
            <Title level={2} className={styles.sectionTitle}>Our Values</Title>
            <div className={styles.valuesGrid}>
              <Card variant="default" className={styles.valueCard}>
                <div className={styles.valueIcon}>💡</div>
                <Title level={3}>Innovation</Title>
                <p>Constantly pushing boundaries and exploring new possibilities.</p>
              </Card>
              <Card variant="default" className={styles.valueCard}>
                <div className={styles.valueIcon}>🤝</div>
                <Title level={3}>Collaboration</Title>
                <p>Building together with our community and partners.</p>
              </Card>
              <Card variant="default" className={styles.valueCard}>
                <div className={styles.valueIcon}>🎯</div>
                <Title level={3}>Excellence</Title>
                <p>Committed to delivering the highest quality in everything we do.</p>
              </Card>
              <Card variant="default" className={styles.valueCard}>
                <div className={styles.valueIcon}>🌍</div>
                <Title level={3}>Impact</Title>
                <p>Making a positive difference in the developer community.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <Title level={2} className={styles.sectionTitle}>Meet Our Team</Title>
            <div className={styles.teamGrid}>
              <Card variant="default" className={styles.teamCard}>
                <div className={styles.avatar}>👨‍💻</div>
                <Title level={3}>John Doe</Title>
                <p className={styles.role}>CEO & Founder</p>
                <p>Passionate about building tools that developers love.</p>
              </Card>
              <Card variant="default" className={styles.teamCard}>
                <div className={styles.avatar}>👩‍💻</div>
                <Title level={3}>Jane Smith</Title>
                <p className={styles.role}>CTO</p>
                <p>Leading our technical vision and engineering team.</p>
              </Card>
              <Card variant="default" className={styles.teamCard}>
                <div className={styles.avatar}>👨‍🎨</div>
                <Title level={3}>Mike Johnson</Title>
                <p className={styles.role}>Head of Design</p>
                <p>Creating beautiful and intuitive user experiences.</p>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
