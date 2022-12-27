import Link from "next/link";
import {Icon} from "@iconify/react";
import {useState} from "react";

export function BookmarksList() {
  // Get the bookmarks from local storage and store them in the component's state using the useState hook
  const [bookmarks, setBookmarks] = useState(
    JSON.parse(localStorage.getItem("bookmarks") || "[]")
  );

  function handleDeleteButton(bookmark) {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");

    const updatedBookmarks = bookmarks.filter(bm => bm !== bookmark);

    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));

    setBookmarks(updatedBookmarks);
  }

  return (
    <ul>
      {bookmarks.map(bookmark => (
        <li key={bookmark}>
          <Link href={bookmark}>{bookmark}</Link>
          <Icon
            icon="charm:circle-cross"
            color="#572887"
            onClick={() => handleDeleteButton(bookmark)}
            cursor="pointer"
          />
        </li>
      ))}
    </ul>
  );
}
