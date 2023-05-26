import { Logo, Search } from "components/ui/Icons";
import { SectionSubtitle } from "components/ui/Typography";
import { LogoWrapper, Wrapper } from "./styled";
import IconButton from "components/ui/IconButton";

function Header() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
        <SectionSubtitle>ZaMusic</SectionSubtitle>
      </LogoWrapper>
      <IconButton withBackground height={58} width={58}>
        <Search />
      </IconButton>
    </Wrapper>
  );
}

export default Header;
