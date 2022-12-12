import styled from "styled-components";
import Link from "next/link";
import {Icon} from "@iconify/react";

export default function IrrtumPage() {
  return (
    <StyledBody>
      <StyledBreadcrumb>
        <StyledLink href="/bestellung">/online bestellen u. kaufen</StyledLink>
        /falsche Ware o. Stückzahl
      </StyledBreadcrumb>
      <StyledIcon icon="mingcute:bookmark-fill" color="#572887" />
      <StyledArticle>
        <h3>Ich habe die falsche Ware oder Stückzahl bestellt</h3>
        <p>
          {`Solltest du die falsche Ware bestellt haben, kannst du innerhalb von 14 Tagen nach Erhalt der Ware den Vertrag widerrufen. 
Nach dieser Frist ist es ratsam, den Verkäufer zu kontaktieren und die Situation zu schildern. 
Mache ihn darauf aufmerksam, dass Du die Ware aufgrund eines Irrtums gekauft hast. 
Sollte auch hier keine Einigung mit dem Verkäufer erreicht werden können, bleibt noch die Möglichkeit der Anfechtung. Beachte hierbei aber, dass Du gegebenenfalls für Verluste oder Aufwendungen, die dem Verkäufer entstanden sein könnten, ggf. haften kannst.

Kontaktiere ggf. einen Rechtsanwalt, solltest Du Dir unsicher sein. Meistens sind die Erstgespräche kostenlos. 

Solltest Du mehr Waren erhalten haben, als Du bestellt hast, bist Du verpflichtet, die überschüssigen Waren dem Verkäufer herauszugeben, sobald er dies wünscht. 

Solltest Du zu wenig Waren erhalten haben, hast Du natürlich immer die Möglichkeit, Waren nachzubestellen. `}
        </p>
        <StyledLink href="/bestellung">
          <StyledZurueckButton>zurück</StyledZurueckButton>
        </StyledLink>
      </StyledArticle>
    </StyledBody>
  );
}

const StyledBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background-color: #f3e8e8;
  color: #572887;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 90vw;
  height: 75vh;
  margin-top: 2rem;
  margin-bottom: 10px;
  overflow: auto;
`;

const StyledArticle = styled.article`
  text-align: center;
  color: #572887;
  font-size: 1.2rem;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  padding: 10px;
`;

const StyledBreadcrumb = styled.h3`
  color: #572887;
  font-size: 1rem;
  font-weight: 400;
  position: absolute;
  top: 8rem;
  left: 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledZurueckButton = styled.button`
  color: #572887;
  font-size: 1.2rem;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  background-color: #e6ceee;
  border-radius: 10px;
  border: 1px solid rgba(163, 134, 182, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 5vh;
  width: 30vw;
  position: relative;
  top: 2rem;
  cursor: pointer;
  margin-bottom: 4rem;
`;

const StyledIcon = styled(Icon)`
  width: 40px;
  height: 50px;
  position: absolute;
  top: 6.5rem;
  right: 2rem;
`;
