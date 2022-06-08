import "./Header.scss";
import Container from "../ui/Container";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme-provider";

const Header = () => {
  const { toggleTheme, darkTheme } = useContext(ThemeContext);

  return (
    <header className="header ">
      <Container className="flex space-between center-flex">
        <h2>Where in the world</h2>
        <div className="toggle-theme flex" onClick={toggleTheme}>
          {darkTheme ? <MdDarkMode /> : <MdOutlineDarkMode />}
          {darkTheme ? <h4>Light Mode</h4> : <h4>Dark Mode</h4>}
        </div>
      </Container>
    </header>
  );
};

export default Header;
