/* import { set } from "mongoose"; */
import styled from "styled-components";
/* import { useState, useEffect } from "react"; */

export default function BookmarksPage({isBookmarked}) {

/*   const [markedPage, setMarkedPage] = useState([]);

  useEffect(() => {
    if (isBookmarked.length === 0) {
      setMarkedPage([]);
    } else {
      fetch(`${isBookmarked.join()}`)
        .then((response) => response.json())
        .then((markedPage) => setMarkedPage(markedPage));
    }
  }, [isBookmarked]); */

  return (
      <StyledBody>
        <h3>This is the bookmarks page</h3>

 {/*      {markedPage?.map((markedPage) => {
        return (
          <article key={markedPage.pathname}>
            <h2>{markedPage.pathname}</h2>
          </article>
              );
            })} */}
      </StyledBody>
  );
}

const StyledBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3e8e8;
  color: #572887;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 90vw;
  height: 75vh;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
