import {Icon} from "@iconify/react";
import styled from "styled-components";
import {useRouter} from "next/router";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function useSavePage() {
  const {pathname} = useRouter();
  const notify = () =>
    toast.success("gespeichert!", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  function savePage() {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");

    const isBookmarked = bookmarks.includes(pathname);

    if (isBookmarked) {
      bookmarks = bookmarks.filter(bm => bm !== pathname);
    } else {
      bookmarks.push(pathname);
    }

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    notify();
  }

  return savePage;
}

function BookmarkIcon() {
  const savePage = useSavePage();

  return (
    <>
      <StyledIcon
        icon="mingcute:bookmark-fill"
        color="#572887"
        onClick={savePage}
      />
      <ToastContainer />
    </>
  );
}

export default BookmarkIcon;

const StyledIcon = styled(Icon)`
  width: 40px;
  height: 50px;
  position: absolute;
  top: 6.5rem;
  right: 1.5rem;
`;
