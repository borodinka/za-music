import DesktopRadioImage from "assets/images/radio-desktop.png";
import { Play } from "components/ui/Icons";
import { ButtonText, MainTitle, Text } from "components/ui/Typography";
import { PlayButton, TextWrapper, Wrapper } from "./styled";

function Hero() {
  return (
    <Wrapper>
      <TextWrapper>
        <MainTitle>Radio</MainTitle>
        <Text>Pick your todays mood. We will play a perfect mix!</Text>
        <PlayButton>
          <Play />
          <ButtonText>Play</ButtonText>
        </PlayButton>
      </TextWrapper>
      <img src={DesktopRadioImage} alt="Hands holding radio" />
    </Wrapper>
  );
}

export default Hero;
