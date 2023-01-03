import styled from "styled-components";
import Link from "next/link";
import lottie from "lottie-web";
import {useEffect, useRef} from "react";
import PageContainer from "/components/PageContainer";

export default function HomePage() {
  const widerrufContainer = useRef(null);
  const bestellungContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: bestellungContainer.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("/public/BestellungAnimation.json"),
    });
    return () => lottie.destroy();
  });

  useEffect(() => {
    lottie.loadAnimation({
      container: widerrufContainer.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("/public/WiderrufAnimation.json"),
    });
    return () => lottie.destroy();
  });

  return (
    <>
      <PageContainer>
        <h3>Wo können wir helfen?</h3>

        <StyledLink href="/bestellung">
          <StyledBestellungButton>
            <Animation ref={bestellungContainer} />
            Online bestellen und kaufen
          </StyledBestellungButton>
        </StyledLink>

        <StyledLink href="/widerruf">
          <StyledWiderufButton>
            <Animation ref={widerrufContainer} />
            Widerruf und Retoure
          </StyledWiderufButton>
        </StyledLink>
      </PageContainer>
    </>
  );
}

const StyledBestellungButton = styled.button`
  color: var(--primary-color);
  font-size: 1.2rem;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  background-color: var(--primary-background-color);
  border-radius: 10px;
  border: 1px solid var(--secondary-color);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 30vh;
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledWiderufButton = styled.button`
  color: var(--primary-color);
  font-size: 1.2rem;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  background-color: var(--primary-background-color);
  border-radius: 10px;
  border: 1px solid var(--secondary-color);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 30vh;
  width: 80vw;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  align-items: center;
`;

const Animation = styled.div`
  width: 190px;
  height: 220px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
