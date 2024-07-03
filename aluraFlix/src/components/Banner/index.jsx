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
          Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar
          uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas
          dicas sobre performance e de quebra conhecer uma plataforma
          sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse
          vídeo feito com todo o carinho do mundo construindo uma Pokedex!
        </p>
      </section>
      <img className={styles.thumbnail} src={player}></img>
    </div>
  );
}
