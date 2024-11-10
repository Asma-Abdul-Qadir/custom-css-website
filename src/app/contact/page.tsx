import Navbar from '../components/navbar';
import Footer from '../components/footer';
import styles from './contact.module.css';

const Contact: React.FC = () => {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <div className={styles.container}>
        <form className={styles.form}>
          <h2>Contact Us</h2>
          <input
            type="text"
            className={styles.input}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            className={styles.input}
            placeholder="Your Email"
            required
          />
          <textarea
            className={styles.input}
            placeholder="Your Message"
            rows={5}
            required
          />
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      </div>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Contact;
