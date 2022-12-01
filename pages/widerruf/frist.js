import styled from "styled-components";
import Link from "next/link";

export default function FristWiderruf() {
  return (
    <StyledBody>
      <StyledBreadcrumb>
        <StyledLink href="/widerruf">/Widerruf und Retoure</StyledLink>/Wie
        lange kann ich widerrufen?
      </StyledBreadcrumb>
      <h3>Wie lange kann ich widerrufen?</h3>
      <StyledArticle>
        Der Widerruf muss binnen 14 Tagen nach Erhalt der Ware erklärt werden. Das bedeutet nicht, dass 
        binnen dieser Zeit auch die Ware zurück an den Verkäufer gesendet werden muss. Geht die Erklärung 
        dem Verkäufer innerhalb der 14 Tage zu, bleibt für die Rücksendung der Ware ein Zeitraum von XYZ.
        <br/>
        Achte auf die Widerrufsregelungen im Shop des Verkäufers. Dort ist meist der Zeitraum für die Rücksendung der
        Ware explizit geregelt. Meistens liegt dieser bei 30 Tagen.
        <br/>
        <br/>
        TLDR: binnen 14 Tagen erklären, je nach Widerrufsregelung des Verkäufers binnen 30 Tagen zurück senden 
        </StyledArticle>
{/*     <StyledNuLi>
    Nützliche Links zum Them Widerrufsfristen findest Du hier:
    </StyledNuLi> */}
      
        <StyledLink href="/widerruf"><StyledZurueckButton>zurück</StyledZurueckButton></StyledLink>
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
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledBreadcrumb = styled.h3`
  color: #572887;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  top: 125px;
  left: 37px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledZurueckButton = styled.button`
  color: #572887;
  font-size: 18px;
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
  top: 40px;
  cursor: pointer;
`;

const StyledArticle = styled.article`
  text-align: center;
  color: #572887;
  font-size: 20px;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  padding: 10px;
`;

/* const StyledNuLi = styled.section`
  color: #572887;
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  padding: 10px;
  background-color: #e6ceee;
  border-radius: 10px;
  border: 1px solid rgba(163, 134, 182, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 30vh;
  width: 70vw;
`; */