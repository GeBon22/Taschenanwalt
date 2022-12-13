import styled from "styled-components";
import Link from "next/link";
import StyledIcon from "../../components/BookmarkIcon";
import Breadcrumb from "../../components/Breadcrumb";
import ZurueckButton from "../../components/Zurueckbutton";
import StyledBody from "../../components/StyledBody";

export default function IrrtumPage() {
  const path = "/online bestellen und kaufen/falsche Ware o. Stückzahl";
  return (
    <StyledBody>
      <StyledLink href="/bestellung">
        <Breadcrumb path={path}></Breadcrumb>
      </StyledLink>
      <StyledIcon icon="mingcute:bookmark-fill" color="#572887" />
      <StyledArticle>
        <p>
          {`Ich habe die falsche Ware oder Stückzahl bestellt.
          
          Solltest du die falsche Ware bestellt haben, kannst du innerhalb von 14 Tagen nach Erhalt der Ware den Vertrag widerrufen. 
Nach dieser Frist ist es ratsam, den Verkäufer zu kontaktieren und die Situation zu schildern. 
Mache ihn darauf aufmerksam, dass Du die Ware aufgrund eines Irrtums gekauft hast. 
Sollte auch hier keine Einigung mit dem Verkäufer erreicht werden können, bleibt noch die Möglichkeit der Anfechtung. Beachte hierbei aber, dass Du gegebenenfalls für Verluste oder Aufwendungen, die dem Verkäufer entstanden sein könnten, ggf. haften kannst.

Kontaktiere ggf. einen Rechtsanwalt, solltest Du Dir unsicher sein. Meistens sind die Erstgespräche kostenlos. 

Solltest Du mehr Waren erhalten haben, als Du bestellt hast, bist Du verpflichtet, die überschüssigen Waren dem Verkäufer herauszugeben, sobald er dies wünscht. 

Solltest Du zu wenig Waren erhalten haben, hast Du natürlich immer die Möglichkeit, Waren nachzubestellen. `}
        </p>
        <StyledLink href="/bestellung">
          <ZurueckButton />
        </StyledLink>
      </StyledArticle>
    </StyledBody>
  );
}

const StyledArticle = styled.article`
  text-align: center;
  color: #572887;
  font-size: 1.2rem;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  padding: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
