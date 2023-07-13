import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import { loadArtist } from "services/api";
import { MainTitle, SectionTitle, SmallText } from "components/ui/Typography";
import { Music } from "components/ui/Icons";
import TracksTable from "components/TracksTable";
import { ArtistImage, ArtistInfoWrapper, SongsCountWrapper, TextWrapper, Wrapper } from "./styled";
import { theme } from "styles/Theme";

function Artist() {
  const { artistId } = useParams();
  const [artist, setArtist] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const artist = await loadArtist(artistId);
        setArtist(artist);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <Wrapper>
      <ArtistInfoWrapper>
        <ArtistImage src={artist?.artist?.picture_big} alt={`${artist?.artist?.name}'s photo`} />
        <TextWrapper>
          <MainTitle>{artist?.artist?.name || <Skeleton width={200} />}</MainTitle>
          <SongsCountWrapper>
            <Music color={theme.colors.secondaryGrey} />
            <SmallText>
              {isLoading ? <Skeleton width={40} /> : `${artist?.artist?.nb_fan} Fans`}
            </SmallText>
          </SongsCountWrapper>
        </TextWrapper>
      </ArtistInfoWrapper>
      <div>
        <SectionTitle>Top Tracks</SectionTitle>
        <TracksTable isLoading={isLoading} tracks={artist?.tracks} />
      </div>
    </Wrapper>
  );
}

export default Artist;
