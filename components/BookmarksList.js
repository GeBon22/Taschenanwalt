
export function BookmarksList() {
  // Get the bookmarks from local storage
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');

  return (
    <ul>
      {bookmarks.map((bookmark) => (
        <li key={bookmark}>{bookmark}</li>
      ))}
    </ul>
  );
}
