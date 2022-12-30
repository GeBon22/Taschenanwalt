import {Icon} from "@iconify/react";
import styled from "styled-components";
import {useRouter} from "next/router";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useState, useEffect} from "react";

export default function BookmarkIcon() {
  const {pathname} = useRouter();
  const [markedPage, setMarkedPage] = useState();
  const icon = markedPage ? "mingcute:bookmark-fill" : "mingcute:bookmark-line";

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    setMarkedPage(bookmarks.includes(pathname));
  }, [pathname]);

  useEffect(() => {}, [markedPage]);

  const savePage = () => {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");

    const isBookmarked = bookmarks.includes(pathname);

    if (isBookmarked) {
      bookmarks = bookmarks.filter(bm => bm !== pathname);
      setMarkedPage(true);
    } else {
      bookmarks.push(pathname);
      setMarkedPage(false);
    }

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    setMarkedPage(bookmarks.includes(pathname));
    notify();
  };

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

  return (
    <>
      <StyledIcon icon={icon} color="#572887" onClick={savePage} key={pathname} />
      <ToastContainer />
    </>
  );
}

const StyledIcon = styled(Icon)`
  width: 40px;
  height: 50px;
  position: absolute;
  top: 6.5rem;
  right: 1.5rem;
`;
