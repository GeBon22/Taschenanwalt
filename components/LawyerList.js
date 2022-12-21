import {useContext} from "react";
import AppContext from "./AppContext";
import styled from "styled-components";

export default function LawyerList() {
  const context = useContext(AppContext);
  return (
    <>
      {context.center &&
        context.lawyers.length > 0 &&
        context.lawyers.map(lawyer => (
          <StyledUL key={lawyer.id}>
            <li>
              <b>{lawyer.name}</b> <br />
              Rating: {lawyer.rating}/5 ⭐<br />
              Anzahl der Bewertungen: {lawyer.user_ratings_total}
              <br />
              Adresse: {lawyer.vicinity} <br />
              {/* Tel.:
                            <a href={`tel:${lawyer.formatted_phone_number}`}>
                            {lawyer.formatted_phone_number}
                            </a> */}
            </li>
          </StyledUL>
        ))}
    </>
  );
}

const StyledUL = styled.ul`
  text-decoration: none;
  list-style: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #572887;
  font-size: 1rem;
  font-weight: 400;
  font-style: normal;
  background-color: #e6ceee;
  border-radius: 10px;
  border: 1px solid #e6ceee /* rgba(163, 134, 182, 0.5) */;
  height: 20vh;
  width: 80vw;
  padding: 1rem;
  cursor: pointer;
`;
