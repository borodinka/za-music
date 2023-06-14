import { HEADER_HEIGHT, PLAYER_HEIGHT } from "common/constants";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - ${HEADER_HEIGHT}px - ${PLAYER_HEIGHT}px);
`;
