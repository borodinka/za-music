import styled from "styled-components";
import IconButton from "components/ui/IconButton";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Button = styled(IconButton)`
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: 1;
  }
`;
