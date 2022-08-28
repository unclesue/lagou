import Header from "../components/header";
import Movie from "../components/movie";
import Navigation from "../components/navigation";
import Swiper from "../components/swiper";

export default function Home() {
  return (
    <div>
      <Header />
      <Navigation />
      <Swiper />
      <Movie />
    </div>
  );
}
