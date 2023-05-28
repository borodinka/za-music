import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight } from "components/ui/Icons";
import { SectionSubtitle } from "components/ui/Typography";
import GenreCard from "./GenreCard";
import { Wrapper, TitleRow, ButtonsWrapper, Button, GenresWrapper } from "./styled";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Genres() {
  const [genres, setGenres] = useState();

  const sliderRef = useRef(null);

  const handlePrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };

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
          <Button withBackground width={36} height={36} onClick={handlePrev}>
            <ArrowLeft />
          </Button>
          <Button withBackground width={36} height={36} onClick={handleNext}>
            <ArrowRight />
          </Button>
        </ButtonsWrapper>
      </TitleRow>
      <GenresWrapper>
        <Swiper ref={sliderRef} slidesPerView="auto" spaceBetween={20} modules={[Pagination]}>
          {genres?.map((genre) => (
            <SwiperSlide key={genre.id} style={{ width: "auto" }}>
              <GenreCard name={genre.name} backgroundImage={genre.picture_medium} />
            </SwiperSlide>
          ))}
        </Swiper>
      </GenresWrapper>
    </Wrapper>
  );
}

export default Genres;
