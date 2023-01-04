import styled from "styled-components";
import Logo from "../public/assets/Logo.png";
import Link from "next/link";
import Image from "next/image";

export default function Header() {


  return (
    <StyledLink href="/">
      <StyledHeader>
      <Image src={Logo} alt="Taschenanwalt" width={280} height={90} />
      </StyledHeader>
    </StyledLink>
  );
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-shadow: var(--box-shadow);
  background-color: var(--primary-background-color);
  color: var(--primary-color);
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
