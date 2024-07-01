import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Carousel from "./components/Carousel";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/videos")
      .then((r) => r.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <>
      <Header />
      <Banner />
      {videos.map((category) => (
        <Carousel {...category} key={category.id} />
      ))}
      <Footer />
    </>
  );
}

export default App;
