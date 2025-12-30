import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import UserAvatar from "../features/authentication/UserAvatar";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import { Navigate, useNavigate } from "react-router-dom";

const StyledHeaderMenu = styled.ul`
  display: flex;
  direction: ltr;
  align-items: center;
  justify-content: flex-start;
  gap: 2.4rem;
`;
function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <Logout />
      </li>
      <li>
        <ButtonIcon onClick={() => navigate("account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <UserAvatar />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
