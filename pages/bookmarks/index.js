import {BookmarksList} from "../../components/BookmarksList";
import PageContainer from "../../components/PageContainer";
import styled from "styled-components";

export default function BookmarksPage() {
  return (
    <StyledPageContainer>
      <h2>Lesezeichen</h2>
      <BookmarksList />
    </StyledPageContainer>
  );
}

const StyledPageContainer = styled(PageContainer)`
  gap: 0.5rem;
`;
