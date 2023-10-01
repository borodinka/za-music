import { loadCharts, loadTopRadioTracks } from "services/api";
import { Hero, Genres, Artists } from "components/HomePage";
import TracksTable from "components/TracksTable";
import { SectionTitle } from "components/ui/Typography";
import { GreyTitle, TrendsAndArtistsSection, StyledAside } from "./styled";
import { useLoadData } from "hooks/useLoadData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Home() {
  const [data, isLoading] = useLoadData(() => Promise.all([loadCharts(), loadTopRadioTracks()]));
  const [chart, radio] = data || [];

  return (
    <main>
      <Hero tracks={radio} />
      <Genres />
      <TrendsAndArtistsSection>
        <div>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Trending right now</SectionTitle>
          <TracksTable isLoading={isLoading} tracks={chart?.tracks?.data} />
        </div>
        <StyledAside>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Top Artists</SectionTitle>
          <Artists isLoading={isLoading} artists={chart?.artists?.data} />
        </StyledAside>
      </TrendsAndArtistsSection>
    </main>
  );
}

export default Home;
