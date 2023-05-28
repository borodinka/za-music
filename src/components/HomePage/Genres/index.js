import { SectionSubtitle } from "components/ui/Typography";
import { Wrapper, TitleRow, ButtonsWrapper, Button } from "./styled";
import { ArrowLeft, ArrowRight } from "components/ui/Icons";
import { useEffect, useState } from "react";
import axios from "axios";
import GenreCard from "./GenreCard";

function Genres() {
  const [genres, setGenres] = useState();

  useEffect(() => {
    const loadData = async () => {
      const data = await axios.get("/genre");
      setGenres(data.data.data.filter((genre) => genre.name.toLowerCase() !== "all"));
    };

    loadData();
  }, []);

  console.log(genres);

  return (
    <Wrapper>
      <TitleRow>
        <SectionSubtitle>Genres</SectionSubtitle>
        <ButtonsWrapper>
          <Button withBackground width={36} height={36}>
            <ArrowLeft />
          </Button>
          <Button withBackground width={36} height={36}>
            <ArrowRight />
          </Button>
        </ButtonsWrapper>
      </TitleRow>
      {genres.map((genre) => (
        <GenreCard key={genre.id} name={genre.name} backgroundImage={genre.picture_medium} />
      ))}
    </Wrapper>
  );
}

export default Genres;
