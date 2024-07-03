import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";
import { useEffect, useState } from "react";

export default function Home() {
  const [videos, setVideos] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/videos")
      .then((r) => r.json())
      .then((data) => {
        const categorizedVideos = {};

        data.forEach((video) => {
          if (!categorizedVideos[video.type]) {
            categorizedVideos[video.type] = [];
          }

          categorizedVideos[video.type].push(video);
        });
        setVideos(categorizedVideos);
      });
  }, []);

  return (
    <>
      <Banner />
      {Object.keys(videos).map((category) => (
        <Carousel key={category} videos={videos[category]} type={category} />
      ))}
    </>
  );
}
