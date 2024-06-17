import Button from "@/components/Button";
import styles from "./header.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GoHome } from "react-icons/go";
import logo from "/Logo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt={"logo"} className={styles.logo} />
      <nav>
        <Button>
          <GoHome size={25} className={styles.icon} />
          <span className={styles.buttonText}>Home</span>
        </Button>
        <Button>
          <IoIosAddCircleOutline size={25} className={styles.icon} />
          <span className={styles.buttonText}>Novo Video</span>
        </Button>
      </nav>
    </header>
  );
}
