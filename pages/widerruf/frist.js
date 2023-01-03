import styled from "styled-components";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import ReturnButton from "../../components/ReturnButton";
import PageContainer from "../../components/PageContainer";
import StyledArticle from "../../components/Article";
import BookmarkIcon from "../../components/BookmarkIcon";

export default function FristWiderruf() {
  const path = "/Widerruf und Retoure/Wie lang kann ich widerrufen?";
  return (
    <>
      <BookmarkIcon />
      <StyledPageContainer>
        <StyledLink href="/widerruf">
          <Breadcrumb path={path} />
        </StyledLink>
        <StyledArticle>
          <h3>Wie lange kann ich widerrufen?</h3>
          <p>
            {`Der Widerruf muss binnen 14 Tagen nach Erhalt der Ware erklärt werden. Das bedeutet nicht, dass binnen dieser Zeit auch die Ware zurück an den Verkäufer gesendet werden muss. Die Ware muss innerhalb weiterer 14 Tage ab Erklärung des Widerrufs versendet werden. 
    Achte auf die Widerrufsregelungen im Shop des Verkäufers. Dort ist meist der Zeitraum für die Rücksendung der Ware explizit geregelt.
    Meistens liegt dieser bei 30 Tagen.

    TLDR: binnen 14 Tagen erklären, je nach Widerrufsregelung des
    Verkäufers zwischen 14 und 30 Tagen ab Erklärung zurück senden
      `}
          </p>
        </StyledArticle>
        <StyledListContainer>
          Nützliche Links:
          <StyledUL>
            <StyledListItem>
              <Link
                href="https://www.it-recht-kanzlei.de/ruecksendung-waren-neues-widerrufsrecht.html#abschnitt_1"
                legacyBehavior
              >
                <a target="_blank">
                  <StyledP>IT-Recht Kanzlei zur Frist</StyledP>
                </a>
              </Link>
            </StyledListItem>
          </StyledUL>
        </StyledListContainer>
        <StyledLink href="/widerruf">
          <ReturnButton />
        </StyledLink>
      </StyledPageContainer>
    </>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--primary-color);
`;

const StyledListContainer = styled.section`
  color: var(--primary-color);
  font-size: 1.2rem;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  text-align: center;
  padding: 10px;
  background-color: var(--primary-background-color);
  border-radius: 10px;
  border: 1px solid var(--primary-color);
  height: 20vh;
  width: 70vw;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

const StyledUL = styled.ul`
  list-style: none;
  text-align: center;
`;

const StyledListItem = styled.li`
  text-align: center;
`;

const StyledP = styled.p`
  color: var(--primary-color);
`;

const StyledPageContainer = styled(PageContainer)`
padding-top: 2rem;
`;