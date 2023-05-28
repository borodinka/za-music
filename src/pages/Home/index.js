import { Hero, Genres } from "components/HomePage";
import { ContentWrapper } from "./styled";

function Home() {
  return (
    <ContentWrapper>
      <Hero />
      <Genres />
      <div>Songs Table</div>
      <aside>Artist</aside>
    </ContentWrapper>
  );
}

export default Home;
