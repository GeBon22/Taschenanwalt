import { BookmarksList } from "../../components/BookmarksList";
import PageContainer from "../../components/PageContainer";

export default function BookmarksPage() {
  return (
    <PageContainer>
      <h3>This is the bookmarks page</h3>
      <BookmarksList />
    </PageContainer>
  );
}
