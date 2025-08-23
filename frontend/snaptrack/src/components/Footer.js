import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} SnapTrack. All rights reserved.</span>
      <div className={styles.links}>
        <a
          href="https://smartcitylab.neduet.edu.pk/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          NCAI-Smart City Lab
        </a>
      </div>
    </footer>
  );
}