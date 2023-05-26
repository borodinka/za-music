import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 120px;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  border-radius: 0px 0px 25px 25px;
  height: 118px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
