import styles from './footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} TravelSite. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
