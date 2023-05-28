import { useEffect, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight } from "components/ui/Icons";
import { SectionSubtitle } from "components/ui/Typography";
import GenreCard from "./GenreCard";
import {
  Wrapper,
  TitleRow,
  ButtonsWrapper,
  Button,
  GenresWrapper,
  GenreSkeletonWrapper,
} from "./styled";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "react-loading-skeleton/dist/skeleton.css";

function Genres() {
  const [genres, setGenres] = useState();
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true);
      const data = await axios.get("/genre");
      setGenres(data.data.data.filter((genre) => genre.name.toLowerCase() !== "all"));
      setIsLoading(false);
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
        {isLoading &&
          [1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <Skeleton
              wrapper={GenreSkeletonWrapper}
              style={{ maxWidth: "100%" }}
              key={num}
              height={116}
              width={220}
              borderRadius={25}
            />
          ))}
        <Swiper ref={sliderRef} slidesPerView="auto" spaceBetween={20} modules={[Pagination]}>
          {!isLoading &&
            genres?.map((genre) => (
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
