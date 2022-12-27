import {useRouter} from "next/router";

function useSavePage() {
  const {pathname} = useRouter();

  function savePage() {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");

    const isBookmarked = bookmarks.includes(pathname);

    if (isBookmarked) {
      bookmarks = bookmarks.filter(bm => bm !== pathname);
    } else {
      bookmarks.push(pathname);
    }

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }

  return savePage;
}

function Page() {
  const savePage = useSavePage();

  return <button onClick={savePage}>Save Page</button>;
}

export default Page;
