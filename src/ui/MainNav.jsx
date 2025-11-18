import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineCog,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import { GiWoodCabin } from "react-icons/gi";
import { GiCog } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";

const data = [
  {
    id: 1,
    name: "خانه",
    page: "dashboard",
    icon: <HiOutlineHome />,
  },
  {
    id: 2,
    name: "رزرو ها",
    page: "bookings",
    icon: <HiOutlineCalendarDays />,
  },
  {
    id: 3,
    name: "اتاق ها",
    page: "cabins",
    icon: <GiWoodCabin />,
  },
  {
    id: 4,
    name: "کاربران",
    page: "users",
    icon: <FaUsers />,
  },
  {
    id: 5,
    name: "تنظیمات",
    page: "settings",
    icon: <GiCog />,
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
              {item.icon}
              <span>{item.name}</span>
            </StyledNavLink>
          </li>
        ))}
      </NavList>
    </nav>
  );
}

export default MainNav;
