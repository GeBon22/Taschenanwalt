import Link from "next/link";
import {Icon} from "@iconify/react";
import {useState} from "react";
import styled from "styled-components";

export function BookmarksList() {
  const [bookmarks, setBookmarks] = useState(
    JSON.parse(localStorage.getItem("bookmarks") || "[]")
  );

  const pageTitles = {
    "/home": "Home",
    "/bestellung": "online bestellen und kaufen",
    "/bestellung/irrtum": "Ich habe die falsche Ware/falsche Stückzahl bestellt"
  };

  function handleDeleteButton(bookmark) {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");

    const updatedBookmarks = bookmarks.filter(bm => bm !== bookmark);

    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));

    setBookmarks(updatedBookmarks);
  }

  return (
    <StyledListContainer>
      {bookmarks.map(bookmark => (
        <StyledListItem key={bookmark}>
          <StyledLink href={bookmark}>{pageTitles[bookmark]}</StyledLink>
          <Icon
            icon="charm:circle-cross"
            color="#572887"
            onClick={() => handleDeleteButton(bookmark)}
            cursor="pointer"
          />
        </StyledListItem>
      ))}
    </StyledListContainer>
  );
}

const StyledListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const StyledListItem = styled.li`
  color: #572887;
  font-size: 1.2rem;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  list-style: none;
  background-color: #e6ceee;
  border-radius: 10px;
  border: 1px solid rgba(163, 134, 182, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  min-height: 8vh;
  min-width: 70vw;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  list-style: none;
`;
