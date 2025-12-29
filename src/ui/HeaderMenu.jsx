import styled from "styled-components";
import Logout from "../features/authentication/Logout";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 2.4rem;
`;
function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <Logout />
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
