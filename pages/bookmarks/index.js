import {BookmarksList} from "../../components/BookmarksList";
import PageContainer from "../../components/PageContainer";
import styled from "styled-components";

export default function BookmarksPage() {
  return (
    <PageContainer>
      <StyledH3>Meine Lesezeichen</StyledH3>
      <BookmarksList />
    </PageContainer>
  );
}

const StyledH3 = styled.h3`
  position: absolute;
  top: 10rem;
`;
