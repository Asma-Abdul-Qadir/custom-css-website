import Navbar from './components/navbar';
import Footer from './components/footer';
import styles from './home.module.css';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <h1 className={styles.heroText}>Explore the World with Us</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
