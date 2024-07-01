import styles from "./Banner.module.css";
import player from "/player.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div
        className={styles.bannerImage}
        style={{ backgroundImage: `url(${player})` }}
      />
      <section className={styles.info}>
        <h2>
          SEO com React <span>FRONT-END</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          odio illo laborum natus accusantium. Delectus laboriosam molestias
          voluptates enim, distinctio explicabo perferendis quisquam qui ipsa
          voluptate necessitatibus omnis illum suscipit.
        </p>
      </section>
      <img className={styles.thumbnail} src={player}></img>
    </div>
  );
}
