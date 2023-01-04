import styled from "styled-components";
import {Icon} from "@iconify/react";
import homeRounded from "@iconify/icons-material-symbols/home-rounded";
import Link from "next/link";

export default function Navigation() {
  return (
    <StyledNav>
      <Link href="/">
        <Icon icon={homeRounded} color="#303649" width="40px" title="Home" />
      </Link>
      <Link href="/bookmarks">
        <Icon
          icon="mdi:bookmark-multiple"
          color="#303649"
          width="35px"
          title="Bookmarks"
        />
      </Link>
      <Link href="/map">
        <Icon
          icon="mdi:map-marker-multiple"
          color="#303649"
          width="35px"
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
  padding: 20px;
  box-shadow: var(--box-shadow);
  background-color: var(--primary-color);
  position: sticky;
  bottom: 0;
`;
