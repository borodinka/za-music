import { SectionSubtitle } from "components/ui/Typography";
import styled from "styled-components";

export const TrendsAndArtistsSection = styled.section`
  display: grid;
  grid-template-columns: 65% 35%;
  padding-bottom: 135px;
  overflow: hidden;
`;

export const GreyTitle = styled(SectionSubtitle)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;

export const StyledAside = styled.aside`
  margin-left: 90px;
`;
