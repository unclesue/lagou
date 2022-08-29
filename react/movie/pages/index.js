import Layout from "../components/layout";
import Movie, { loadMovie } from "../components/movie";
import Swiper, { loadSwiper } from "../components/swiper";

export default function Home({ swiper, movie }) {
  return (
    <Layout>
      <Swiper data={swiper} />
      <Movie data={movie} />
    </Layout>
  );
}

export async function getStaticProps() {
  const { data: swiper } = await loadSwiper();
  const { data: movie } = await loadMovie();
  return {
    props: { swiper, movie },
  };
}
