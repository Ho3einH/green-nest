import { NavLink } from "react-router-dom";
import styled from "styled-components";

const data = [
  {
    id: 1,
    name: "خانه",
    page: "dashboard",
  },
  {
    id: 2,
    name: "رزرو ها",
    page: "bookings",
  },
  {
    id: 3,
    name: "اتاق ها",
    page: "cabins",
  },
  {
    id: 4,
    name: "کاربران",
    page: "users",
  },
  {
    id: 5,
    name: "تنظیمات",
    page: "settings",
  },
];

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        {data.map((item) => (
          <li>
            <StyledNavLink key={item.id} to={item.page}>
              {item.name}
            </StyledNavLink>
          </li>
        ))}
      </NavList>
    </nav>
  );
}

export default MainNav;
