import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import styles from "./Carousel.module.css";

export default function Carousel({ type, videos, toggleEdit, onDeleteVideo }) {
  return (
    <div className={styles.carousel}>
      <h3 className={` ${styles.title} ${type}`}>{type}</h3>
      <section className={styles.videos}>
        {videos.map((video) => (
          <div className={styles.video} key={video.id}>
            <img
              className={styles.thumbnail}
              src={video.thumbnail}
              alt={video.title}
            />
            <section className={`${styles.config} ${type}`}>
              <button
                className={styles.button}
                onClick={() => toggleEdit(video)}
              >
                <FaEdit size={25} className={styles.icon} />
                <span className={styles.buttonText}>Editar</span>
              </button>
              <button
                className={styles.button}
                onClick={() => onDeleteVideo(video.id, type)}
              >
                <MdOutlineDeleteForever size={25} className={styles.icon} />
                <span className={styles.buttonText}>Deletar</span>
              </button>
            </section>
          </div>
        ))}
      </section>
    </div>
  );
}
