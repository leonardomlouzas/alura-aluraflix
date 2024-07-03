import { useState } from "react";
import styles from "./NewVideo.module.css";

export default function NewVideo() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("front-end");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [url, setUrl] = useState("");

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
      const response = await fetch(`http://localhost:8000/videos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newVideo),
      });

      if (response.status === 201) {
        setTitle("");
        setCategory("front-end");
        setDescription("");
        setThumbnail("");
        setUrl("");
      }
    } catch (error) {
      console.error("Error adding video:", error);
    }
  };

  return (
    <main className={styles.container}>
      <h1>Novo Vídeo</h1>
      <p>Complete o formulário para criar um novo card de vídeo.</p>
      <form onSubmit={toSubmit} className={styles.form}>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Digite o título do vídeo"
          className={styles.input}
          required
        />
        <label htmlFor="category">Categoria</label>
        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className={styles.input}
          required
        >
          <option value="front-end">Front-End</option>
          <option value="back-end">Back-End</option>
          <option value="mobile">Mobile</option>
        </select>
        <label htmlFor="thumbnail">Imagem</label>
        <input
          type="text"
          value={thumbnail}
          onChange={(event) => setThumbnail(event.target.value)}
          placeholder="Digite a URL da imagem"
          className={styles.input}
          required
        />
        <label htmlFor="url">URL</label>
        <input
          type="text"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          placeholder="Digite a URL do vídeo"
          className={styles.input}
          required
        />
        <label htmlFor="description">Descrição</label>
        <textarea
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Digite a descrição do vídeo"
          className={styles.input}
          required
        />
        <button>Enviar</button>
      </form>
    </main>
  );
}
