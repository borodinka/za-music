import { Hero, Genres } from "components/HomePage";
import { ContentWrapper, TrendsAndArtistsSection } from "./styled";

function Home() {
  return (
    <ContentWrapper>
      <Hero />
      <Genres />
      <TrendsAndArtistsSection>
        <div>Songs Table</div>
        <aside>Artist</aside>
      </TrendsAndArtistsSection>
    </ContentWrapper>
  );
}

export default Home;
