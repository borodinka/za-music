import { styled } from "styled-components";

const ContentWrapper = styled.main`
  padding: 0 120px;
`;

function HomePage() {
  return (
    <ContentWrapper>
      <div>Hero</div>
      <div>Genres</div>
      <div>Songs Table</div>
      <aside>Artist</aside>
    </ContentWrapper>
  );
}

export default HomePage;
