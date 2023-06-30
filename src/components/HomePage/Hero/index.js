import { useContext } from "react";
import PropTypes from "prop-types";
import DesktopRadioImage from "assets/images/radio-desktop.png";
import TabletRadioImage from "assets/images/radio-tablet.png";
import { Play } from "components/ui/Icons";
import { ButtonText } from "components/ui/Typography";
import { PlayerDispatchContext } from "context/playerContext";
import { actions } from "context/actions";
import { useWindowSize } from "hooks/useWindowSize";
import { breakpoints } from "styles/BreakPoints";
import { PlayButton, TextWrapper, Wrapper, HeroText, HeroImage, HeroTitleText } from "./styled";

function Hero({ tracks }) {
  const { width } = useWindowSize();

  const dispatch = useContext(PlayerDispatchContext);
  const handlePlayClick = () => {
    dispatch({
      type: actions.SET_TRACKS_DATA,
      track: tracks[0],
      tracks,
      isPlaying: true,
    });
  };

  return (
    <Wrapper>
      <TextWrapper>
        <HeroTitleText>Radio</HeroTitleText>
        <HeroText>Pick your todays mood. We will play a perfect mix!</HeroText>
        <PlayButton disabled={!tracks || tracks.length <= 0} onClick={handlePlayClick}>
          <Play />
          <ButtonText>Play</ButtonText>
        </PlayButton>
      </TextWrapper>
      <HeroImage
        src={width < breakpoints.xl ? TabletRadioImage : DesktopRadioImage}
        alt="Hands holding radio"
      />
    </Wrapper>
  );
}

Hero.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      duration: PropTypes.number,
      preview: PropTypes.string,
      artist: PropTypes.shape({
        name: PropTypes.string,
      }),
      album: PropTypes.shape({
        title: PropTypes.string,
        cover: PropTypes.string,
      }),
    }),
  ),
};

export default Hero;
