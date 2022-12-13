import styled from "styled-components";
import Link from "next/link";
import {Icon} from "@iconify/react";
import Breadcrumb from "../../components/Breadcrumb";
import ZurueckButton from "../../components/Zurueckbutton";
import StyledBody from "../../components/StyledBody";


export default function WannWiderruf() {
  const path = "/Widerruf und Retoure/Wann kann ich widerrufen?";
  return (
    <StyledBody>
      <StyledLink href="/widerruf">
        <Breadcrumb path={path} />
      </StyledLink>
      <h3>Wann kann ich widerrufen?</h3>
      <StyledArticle>
        <StyledIcon icon="mingcute:bookmark-fill" color="#572887" />
        <p>
          Jeder Verbraucher kann sich auf das Widerrufsrecht berufen. Einem
          Unternehmer steht dagegen kein Widerrufsrecht zu.
        </p>
      </StyledArticle>
      <StyledLink href="/widerruf">
        <ZurueckButton />
      </StyledLink>
    </StyledBody>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledIcon = styled(Icon)`
  width: 40px;
  height: 50px;
  position: absolute;
  top: 6.5rem;
  right: 2rem;
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
