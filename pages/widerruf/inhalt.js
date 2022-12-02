import styled from "styled-components";
import Link from "next/link";
import {CopyToClipboard} from "react-copy-to-clipboard";

export default function WannWiderruf() {
  return (
    <StyledBody>
      <StyledBreadcrumb>
        <StyledLink href="/widerruf">/Widerruf und Retoure</StyledLink>/Was muss
        in einem Widerruf stehen?
      </StyledBreadcrumb>
      <h3>Was muss in einem Widerruf stehen?</h3>
      <StyledArticle>
        <p>
          {`In einem Widerruf muss nicht ausdrücklich das Wort Widerruf verwendet
        werden. Es empfiehlt sicher aber, ausdrücklich klar zu machen, dass man
        vom Vertrag Abstand nehmen möchte und den Kaufpreis zurück erstattet
        verlangt.

        Es muss außerdem kein Grund für den Widerruf angegeben werden.`}
        </p>
      </StyledArticle>

      <CopyToClipboard
        text="Sehr geehrte Damen und Herren. Hiermit widerrufe/n ich/wir den abgeschlossenen Vertrag über den Kauf folgender Waren/Einbringung
     folgender Dienstleistungen:[]. Bestellt am [] und erhalten am []. [Name und Anschrift des Verbrauchers] [Datum] [Unterschrift]."
        onCopy={() => alert("Muster kopiert!")}
      >
        <StyledKopierenButton>Muster kopieren</StyledKopierenButton>
      </CopyToClipboard>

      <StyledLink href="/widerruf">
        <StyledZurueckButton>zurück</StyledZurueckButton>
      </StyledLink>
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
  left: 19px;
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
  cursor: pointer;
`;

const StyledKopierenButton = styled.button`
  color: #572887;
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  background-color: #e6ceee;
  border-radius: 10px;
  border: 1px solid rgba(163, 134, 182, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 8vh;
  width: 40vw;
  position: relative;
  top: 10px;
  cursor: pointer;
`;

const StyledArticle = styled.article`
  text-align: justify;
  text-align-last: none;
  color: #572887;
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  padding: 15px;
  white-space: pre-line;
`;
