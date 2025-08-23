import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>SnapTrack</div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/monitor" className={styles.link}>Monitor</Link>
        </li>
        <li>
          <Link href="/attendance" className={styles.link}>Attendance Record</Link>
        </li>
        <li>
          <Link href="/admin" className={styles.link}>Admin Panel</Link>
        </li>
      </ul>
    </nav>
  );
}