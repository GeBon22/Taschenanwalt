import useLocalStorage from "./hooks/useLocalStorage";
import Link from "next/link";
import {Icon} from "@iconify/react";
import styled from "styled-components";

export function BookmarksList() {
  const [bookmarks, setBookmarks] = useLocalStorage("bookmarks", []);

  const pageTitles = {
    "/bestellung": "Online bestellen und kaufen",
    "/bestellung/irrtum":
      "Ich habe die falsche Ware/falsche Stückzahl bestellt",
    "/bestellung/verzug": "Meine Ware kommt nicht an",
    "/bestellung/schaden": "Meine Bestellung ist beschädigt",
    "/bestellung/ruecktritt": "Ich möchte vom Kaufvertrag zurück treten",
    "/widerruf": "Widerruf und Retoure",
    "/widerruf/wann": "Wann kann ich widerrufen?",
    "/widerruf/frist": "Wie lange kann ich widerrufen?",
    "/widerruf/inhalt": "Was muss in einem Widerruf stehen?",
  };

  function handleDeleteButton(bookmark) {
    const updatedBookmarks = bookmarks.filter(bm => bm !== bookmark);
    setBookmarks(updatedBookmarks);
  }

  return (
    <StyledListContainer>
      {bookmarks.map(bookmark => (
        <>
          <StyledItemContainer>
            <StyledItem key={bookmark}>
              <StyledLink href={bookmark}>{pageTitles[bookmark]}</StyledLink>
            </StyledItem>
            <Icon
              icon="charm:circle-cross"
              color="#572887"
              width="1.2rem"
              height="1.2rem"
              onClick={() => handleDeleteButton(bookmark)}
              cursor="pointer"
            />
          </StyledItemContainer>
        </>
      ))}
    </StyledListContainer>
  );
}

const StyledListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;

const StyledItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  padding-right: 1rem;
`;

const StyledItem = styled.li`
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
  width: 70vw;
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  list-style: none;
`;
