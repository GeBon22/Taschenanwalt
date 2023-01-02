import styled from "styled-components";
import {Icon} from "@iconify/react";
import homeRounded from "@iconify/icons-material-symbols/home-rounded";
import Link from "next/link";

export default function Navigation() {
  return (
    <StyledNav>
      <Link href="/">
        <Icon icon={homeRounded} color="#572887" width="45px" title="Home" />
      </Link>
      <Link href="/bookmarks">
        <Icon
          icon="mdi:bookmark-multiple"
          color="#572887"
          width="40px"
          title="Bookmarks"
        />
      </Link>
      <Link href="/map">
        <Icon
          icon="mdi:map-marker-multiple"
          color="#572887"
          width="40px"
          title="Map"
        />
      </Link>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: solid var(--secondary-color) 2px;
  padding: 10px;
  border-radius: var(--default-border-radius);
  box-shadow: var(--box-shadow);
  background-color: var(--primary-color);
  margin-top: 5px;
  position: sticky;
  bottom: 5px;
`;
