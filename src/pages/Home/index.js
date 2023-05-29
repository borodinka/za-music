import { useEffect, useState } from "react";
import { Hero, Genres, Artists } from "components/HomePage";
import { ContentWrapper, GreyTitle, TrendsAndArtistsSection, StyledAside } from "./styled";
import { SectionTitle } from "components/ui/Typography";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { toast } from "react-toastify";
import { loadCharts } from "services/api";

function Home() {
  const [chart, setChart] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await loadCharts();
        setChart(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <ContentWrapper>
      <Hero />
      <Genres />
      <TrendsAndArtistsSection>
        <div>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Trending right now</SectionTitle>
          <div>Songs table</div>
        </div>
        <StyledAside>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Top Artists</SectionTitle>
          <Artists isLoading={isLoading} artists={chart?.artists.data} />
        </StyledAside>
      </TrendsAndArtistsSection>
    </ContentWrapper>
  );
}

export default Home;
