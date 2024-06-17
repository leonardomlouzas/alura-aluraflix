import styles from "./Footer.module.css";
import Logo from "/Logo.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={Logo} alt="Logo" className={styles.logo} />
      <p>Leonardo M. Louzas</p>
    </footer>
  );
}
