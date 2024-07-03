import Button from "@/components/Button";
import styles from "./header.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GoHome } from "react-icons/go";
import logo from "/Logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt={"logo"} className={styles.logo} />
      <nav>
        <Link to="/">
          <Button>
            <GoHome size={25} className={styles.icon} />
            <span className={styles.buttonText}>Home</span>
          </Button>
        </Link>
        <Link to="/create">
          <Button>
            <IoIosAddCircleOutline size={25} className={styles.icon} />
            <span className={styles.buttonText}>Novo Video</span>
          </Button>
        </Link>
      </nav>
    </header>
  );
}
