import { useState } from "react";
import styles from "./Edit.module.css";

export default function Edit({ video, toggleEdit, updateVideos }) {
  const [title, setTitle] = useState(video?.title || "");
  const [category, setCategory] = useState(video?.type || "");
  const [description, setDescription] = useState(video?.description || "");
  const [thumbnail, setThumbnail] = useState(video?.thumbnail || "");
  const [url, setUrl] = useState(video?.url || "");

  const toSubmit = async (event) => {
    event.preventDefault();
    const newVideo = {
      type: category,
      title,
      description,
      thumbnail,
      url,
    };

    try {
      const response = await fetch(`http://localhost:8000/videos/${video.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newVideo),
      });

      if (response.status === 200) {
        updateVideos({});
        toggleEdit(false);
        // reflect change in browser. Window reload?
      }
    } catch (error) {
      console.log("Error editing video:" + error);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Editar Video</h2>
        <form className={styles.form}>
          <div className={styles.wrapper}>
            <label htmlFor="title">Título</label>
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Digite o título do vídeo"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.wrapper}>
            <label htmlFor="category">Categoria</label>
            <select
              id="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className={`${styles.input} ${styles.select}`}
              required
            >
              <option value="front-end">Front-End</option>
              <option value="back-end">Back-End</option>
              <option value="mobile">Mobile</option>
            </select>
          </div>
          <div className={styles.wrapper}>
            <label htmlFor="thumbnail">Imagem</label>
            <input
              type="text"
              value={thumbnail}
              onChange={(event) => setThumbnail(event.target.value)}
              placeholder="Digite a URL da imagem"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.wrapper}>
            <label htmlFor="url">URL</label>
            <input
              type="text"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              placeholder="Digite a URL do vídeo"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.wrapper}>
            <label htmlFor="description">Descrição</label>
            <br />
            <textarea
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Digite a descrição do vídeo"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={(e) => toSubmit(e)}>
              Salvar
            </button>
            <button className={styles.button} onClick={() => toggleEdit(false)}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
