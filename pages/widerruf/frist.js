import styled from "styled-components";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import ZurueckButton from "../../components/Zurueckbutton";
import StyledBody from "../../components/StyledBody";
import StyledIcon from "../../components/BookmarkIcon";
import StyledArticle from "../../components/Article";

export default function FristWiderruf() {
  const path = "/Widerruf und Retoure/Wie lang kann ich widerrufen?";
  return (
    <>
      <StyledBody>
        <StyledLink href="/widerruf">
          <Breadcrumb path={path} />
        </StyledLink>
        /Wie
        <StyledArticle>
          <StyledIcon icon="mingcute:bookmark-fill" color="#572887" />
          <p>
            {`Wie lange kann ich widerrufen?

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
          <ZurueckButton />
        </StyledLink>
      </StyledBody>
    </>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledNuLi = styled.section`
  color: #572887;
  font-size: 1.2rem;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  text-align: center;
  padding: 10px;
  background-color: #e6ceee;
  border-radius: 10px;
  border: 1px solid rgba(163, 134, 182, 0.5);

  height: 30vh;
  width: 70vw;
`;

const StyledUL = styled.ul`
  list-style: none;
`;

const StyledListItem = styled.li`
  text-align: center;
`;
