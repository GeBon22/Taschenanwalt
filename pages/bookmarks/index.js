import { BookmarksList } from "../../components/BookmarksList";
import PageContainer from "../../components/PageContainer";

export default function BookmarksPage() {
  return (
    <PageContainer>
      <h3>Meine Bookmarks</h3>
      <BookmarksList />
    </PageContainer>
  );
}
