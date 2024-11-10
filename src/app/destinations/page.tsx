import Navbar from '../components/navbar';
import Footer from '../components/footer';
import styles from './destinations.module.css';

const Destinations: React.FC = () => {
  const destinations = [
    { name: 'Paris', image: '/paris.jpeg' },
    { name: 'New York', image: '/newyork.jpeg' },
    { name: 'Tokyo', image: '/tokyo.jpeg' },
    { name: 'Sydney', image: '/sydney.jpeg' },
    { name: 'Dubai', image: '/dubai.jpeg' },
    { name: 'Rome', image: '/rome.jpeg' },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.heading}>Beautiful Destinations</div>
        <ul className={styles.destinationsList}>
          {destinations.map((dest, index) => (
            <li key={index} className={styles.destination}>
              <img src={dest.image} alt={dest.name} className={styles.image} />
              <h2>{dest.name}</h2>
            </li>
          ))}
        </ul>
      </div>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Destinations;
