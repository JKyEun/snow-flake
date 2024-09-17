import Link from 'next/link';
import styles from './styles/GNB.module.scss';

const GNBList = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];

export default function GNB() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1>
          <Link href="/">LOGO</Link>
        </h1>
        <ul className={styles.listContainer}>
          {GNBList.map((item) => (
            <li key={item}>
              <Link href={`/${item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
