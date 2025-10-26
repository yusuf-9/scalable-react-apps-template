import Header from "../../components/header";
import { Title, Button, Card } from "@/presentation/shared/components/ui";
import styles from "./ContactPage.module.css";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Page Header */}
        <section className={styles.pageHeader}>
          <div className={styles.container}>
            <Title level={1} className={styles.pageTitle}>Get in Touch</Title>
            <p className={styles.pageSubtitle}>
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.contactGrid}>
              {/* Contact Form */}
              <div className={styles.formContainer}>
                <Title level={2}>Send us a Message</Title>
                <form className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="Your name" 
                      className={styles.input}
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="your.email@example.com" 
                      className={styles.input}
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="subject">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      placeholder="How can we help?" 
                      className={styles.input}
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      rows={6}
                      placeholder="Tell us more about your inquiry..." 
                      className={styles.textarea}
                    />
                  </div>
                  
                  <Button type="submit" variant="primary" size="lg">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className={styles.infoContainer}>
                <Title level={2}>Contact Information</Title>
                <div className={styles.infoCards}>
                  <Card variant="default" className={styles.infoCard}>
                    <div className={styles.infoIcon}>📧</div>
                    <Title level={3}>Email</Title>
                    <p>support@myapp.com</p>
                  </Card>
                  
                  <Card variant="default" className={styles.infoCard}>
                    <div className={styles.infoIcon}>📱</div>
                    <Title level={3}>Phone</Title>
                    <p>+1 (555) 123-4567</p>
                  </Card>
                  
                  <Card variant="default" className={styles.infoCard}>
                    <div className={styles.infoIcon}>📍</div>
                    <Title level={3}>Office</Title>
                    <p>123 Tech Street<br/>San Francisco, CA 94105</p>
                  </Card>
                  
                  <Card variant="default" className={styles.infoCard}>
                    <div className={styles.infoIcon}>🕐</div>
                    <Title level={3}>Hours</Title>
                    <p>Mon - Fri: 9am - 6pm<br/>Weekend: Closed</p>
                  </Card>
                </div>

                <div className={styles.socialLinks}>
                  <Title level={3}>Follow Us</Title>
                  <div className={styles.socialIcons}>
                    <a href="#" className={styles.socialIcon}>𝕏</a>
                    <a href="#" className={styles.socialIcon}>in</a>
                    <a href="#" className={styles.socialIcon}>f</a>
                    <a href="#" className={styles.socialIcon}>gh</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
