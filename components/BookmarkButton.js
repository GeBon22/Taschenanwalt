import { useRouter } from 'next/router';

function useSavePage() {
  const { pathname } = useRouter();

  function savePage() {
    // Get the existing bookmarks from local storage
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');

    // Add the current page to the bookmarks array
    bookmarks.push(pathname);

    // Save the updated bookmarks array to local storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  return savePage;
}

function Page() {
  const savePage = useSavePage();

  return (

      <button onClick={savePage}>Save Page</button>

  );
}

export default Page;