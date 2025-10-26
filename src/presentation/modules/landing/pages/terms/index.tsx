import Header from "../../components/header";
import { Title, Card } from "@/presentation/shared/components/ui";
import styles from "./TermsPage.module.css";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Page Header */}
        <section className={styles.pageHeader}>
          <div className={styles.container}>
            <Title level={1} className={styles.pageTitle}>Terms & Conditions</Title>
            <p className={styles.pageSubtitle}>
              Last updated: January 2024
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.termsSection}>
                <Title level={2}>1. Acceptance of Terms</Title>
                <p>
                  By accessing and using MyApp, you accept and agree to be bound by the 
                  terms and provision of this agreement. If you do not agree to abide by 
                  the above, please do not use this service.
                </p>
              </div>

              <div className={styles.termsSection}>
                <Title level={2}>2. Use License</Title>
                <p>
                  Permission is granted to temporarily download one copy of the materials 
                  (information or software) on MyApp's platform for personal, non-commercial 
                  transitory viewing only.
                </p>
                <ul>
                  <li>This is the grant of a license, not a transfer of title</li>
                  <li>You may not modify or copy the materials</li>
                  <li>You may not use the materials for any commercial purpose</li>
                  <li>You may not attempt to decompile or reverse engineer any software</li>
                </ul>
              </div>

              <div className={styles.termsSection}>
                <Title level={2}>3. Disclaimer</Title>
                <p>
                  The materials on MyApp's platform are provided on an 'as is' basis. 
                  MyApp makes no warranties, expressed or implied, and hereby disclaims 
                  and negates all other warranties including, without limitation, implied 
                  warranties or conditions of merchantability, fitness for a particular 
                  purpose, or non-infringement of intellectual property or other violation 
                  of rights.
                </p>
              </div>

              <div className={styles.termsSection}>
                <Title level={2}>4. Limitations</Title>
                <p>
                  In no event shall MyApp or its suppliers be liable for any damages 
                  (including, without limitation, damages for loss of data or profit, 
                  or due to business interruption) arising out of the use or inability 
                  to use the materials on MyApp's platform.
                </p>
              </div>

              <div className={styles.termsSection}>
                <Title level={2}>5. Privacy Policy</Title>
                <p>
                  Your use of MyApp is also governed by our Privacy Policy. Please review 
                  our Privacy Policy, which also governs the site and informs users of our 
                  data collection practices.
                </p>
              </div>

              <div className={styles.termsSection}>
                <Title level={2}>6. Changes to Terms</Title>
                <p>
                  MyApp reserves the right to revise these terms of service at any time 
                  without notice. By using this platform you are agreeing to be bound by 
                  the then current version of these terms of service.
                </p>
              </div>

              <Card variant="elevated" className={styles.contactBox}>
                <Title level={3}>Questions?</Title>
                <p>
                  If you have any questions about these Terms & Conditions, please 
                  contact us at legal@myapp.com
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
