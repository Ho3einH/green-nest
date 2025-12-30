import { HiOutlineMoon, HiSun } from "react-icons/hi";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  console.log(isDarkMode);

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
