import IconButton from "components/ui/IconButton";
import { SubText, Text } from "components/ui/Typography";
import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
`;

export const TableHead = styled.thead`
  width: 100%;
  color: ${({ theme }) => theme.colors.secondaryGrey};
  text-align: left;
`;

export const TableHeading = styled.th`
  padding: 30px 20px 30px 0;
`;

export const TableHeadingTime = styled(TableHeading)`
  min-width: 140px;
`;

export const TableData = styled.td`
  padding: 15px 20px 15px 0;
`;

export const TrackInfo = styled(TableData)`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const TrackInfoTextWrapper = styled(TableData)`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const TrackInfoImage = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 15px;
`;

export const TrackTitle = styled(Text)`
  display: -webkit-box;
  overflow: hidden;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const TrackSubText = styled(SubText)`
  display: -webkit-box;
  overflow: hidden;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const SongNumberText = styled(SubText)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;

export const StyledIconButton = styled(IconButton)`
  margin: 0 auto;
`;

export const Line = styled.td`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(198, 198, 198, 0) 0%,
    #c6c6c6 50.54%,
    rgba(198, 198, 198, 0) 98.02%
  );
`;
