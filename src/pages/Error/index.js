import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { ButtonText, SectionTitle } from "components/ui/Typography";
import { Wrapper } from "./styled";
import Button from "components/ui/Button";

function Error({ isErrorPage }) {
  const navigate = useNavigate();
  if (isErrorPage) {
    return (
      <Wrapper>
        <SectionTitle>Something went wrong</SectionTitle>
        <Button onClick={() => navigate(0)}>
          <ButtonText>Go back</ButtonText>
        </Button>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <SectionTitle>Page was not found :(</SectionTitle>
    </Wrapper>
  );
}

Error.propTypes = {
  isErrorPage: PropTypes.bool,
};

export default Error;
