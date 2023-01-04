import {useContext} from "react";
import AppContext from "./AppContext";
import styled from "styled-components";

export default function LawyerList() {
  const context = useContext(AppContext);
  return (
    <>
      {context.userLocation &&
        context.lawyers.length > 0 &&
        context.lawyers.map(lawyer => (
          <StyledLi key={lawyer.id}>
            <b>{lawyer.name}</b> <br />
            Rating: {lawyer.rating}/5 ⭐<br />
            Anzahl der Bewertungen: {lawyer.user_ratings_total}
            <br />
            Adresse: {lawyer.vicinity} <br />
          </StyledLi>
        ))}
    </>
  );
}

const StyledLi = styled.li`
  text-decoration: none;
  list-style: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: var(--primary-color);
  font-size: 1rem;
  font-weight: 400;
  font-style: normal;
  background-color: var(--primary-background-color);
  border-radius: 10px;
  border: 1px solid var(--primary-color);
  box-shadow: var(--box-shadow);
  height: 25vh;
  width: 80vw;
  padding: 1rem;
  cursor: pointer;
`;
