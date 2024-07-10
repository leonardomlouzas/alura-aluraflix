import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";
import { useEffect, useState } from "react";
import Edit from "@/components/Edit";

export default function Home() {
  const [videos, setVideos] = useState({});
  const [toggleEdit, setToggleEdit] = useState(false);

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://localhost:8000/videos");
        const data = await response.json();

        const categorizedVideos = {};
        data.forEach((video) => {
          if (!categorizedVideos[video.type]) {
            categorizedVideos[video.type] = [];
          }
          categorizedVideos[video.type].push(video);
        });
        setVideos(categorizedVideos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, [videos]);

  const setupEditVideo = (video) => {
    setToggleEdit(true);
    setId(video.id);
    setTitle(video.title);
    setCategory(video.type);
    setDescription(video.description);
    setThumbnail(video.thumbnail);
    setUrl(video.url);
  };

  const handleDeleteVideo = (videoId, category) => {
    fetch(`http://localhost:8000/videos/${videoId}`, {
      method: "DELETE",
    });

    setVideos((prevVideos) => {
      const updatedVideos = { ...prevVideos };
      updatedVideos[category] = updatedVideos[category].filter(
        (video) => video.id !== videoId
      );
      return updatedVideos;
    });
  };

  return (
    <>
      <Banner />
      {toggleEdit && (
        <Edit
          video={{
            id: id,
            title: title,
            type: category,
            description: description,
            thumbnail: thumbnail,
            url: url,
          }}
          toggleEdit={setToggleEdit}
          updateVideos={setVideos}
        />
      )}
      {Object.keys(videos).map((category) => (
        <Carousel
          key={category}
          videos={videos[category]}
          type={category}
          toggleEdit={setupEditVideo}
          onDeleteVideo={handleDeleteVideo}
        />
      ))}
    </>
  );
}
