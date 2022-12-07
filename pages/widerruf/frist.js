import styled from "styled-components";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function FristWiderruf() {
  return (
    <>
      <StyledBody>
        <StyledBreadcrumb>
          <StyledLink href="/widerruf">/Widerruf und Retoure</StyledLink>/Wie
          lange kann ich widerrufen?
        </StyledBreadcrumb>
        <StyledArticle>
        <StyledIcon icon="mingcute:bookmark-fill" color="#572887" /* onClick={handleToggle} *//>
          <Styledh3>Wie lange kann ich widerrufen?</Styledh3>
          <p>
            {`
    Der Widerruf muss binnen 14 Tagen nach Erhalt der Ware erklärt werden. Das bedeutet nicht, dass binnen dieser Zeit auch die Ware zurück an
    den Verkäufer gesendet werden muss. Die Ware muss innerhalb weiterer 14 Tage ab Erklärung des Widerrufs
    versendet werden. 
    Achte auf die Widerrufsregelungen im Shop des Verkäufers. Dort ist
    meist der Zeitraum für die Rücksendung der Ware explizit geregelt.
    Meistens liegt dieser bei 30 Tagen.

    TLDR: binnen 14 Tagen erklären, je nach Widerrufsregelung des
    Verkäufers zwischen 14 und 30 Tagen ab Erklärung zurück senden
      `}
          </p>
        </StyledArticle>
        <StyledNuLi>
          Nützliche Links zum Thema Widerrufsfrist:
          <StyledUL>
            <StyledListItem>
              <Link
                href="https://www.it-recht-kanzlei.de/ruecksendung-waren-neues-widerrufsrecht.html#abschnitt_1"
                legacyBehavior
              >
                <a target="_blank">IT-Recht Kanzlei zur Frist</a>
              </Link>
            </StyledListItem>
          </StyledUL>
        </StyledNuLi>
        <StyledLink href="/widerruf">
          <StyledZurueckButton>zurück</StyledZurueckButton>
        </StyledLink>
      </StyledBody>
    </>
  );
}

const StyledBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  overflow: auto;
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

const StyledIcon = styled(Icon)`
width: 40px;
height: 50px;
position: absolute;
top: 100px;
right: 30px;
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
  margin-bottom: 10vh;
  position: relative;
  top: 40px;
  cursor: pointer;
`;

const StyledArticle = styled.article`
  text-align: justify;
  text-align-last: none;
  color: #572887;
  font-size: 20px;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  padding: 15px;
  margin-top: 15vh;
  white-space: pre-line;
`;

const Styledh3 = styled.h3`
  text-align: center;
  color: #572887;
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  padding: 10px;
  margin-top: 15vh;
`;

const StyledNuLi = styled.section`
  color: #572887;
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  text-align: center;
  padding: 10px;
  background-color: #e6ceee;
  border-radius: 10px;
  border: 1px solid rgba(163, 134, 182, 0.5);
  /*   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 */
  height: 30vh;
  width: 70vw;
`;

const StyledUL = styled.ul`
  list-style: none;
`;

const StyledListItem = styled.li`
  text-align: center;
`;
