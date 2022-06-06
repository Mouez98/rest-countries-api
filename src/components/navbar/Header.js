import "./Header.scss";
import Container from "../ui/Container";
import { MdOutlineDarkMode } from "react-icons/md";

const Header = () => {

  const toggleThemeHandler = () => {
     const root = document.getElementById('root')
     
     root.classList = 'dark'
     console.log(root);
  }
  return (
    <header className="header ">
      <Container className={"flex space-between center-flex"}>
        <h2>Where in the world</h2>
        <div className="toggle-theme flex" onClick={toggleThemeHandler}>
          <MdOutlineDarkMode />
          <h4>Dark Mode</h4>
        </div>
      </Container>
    </header>
  );
};

export default Header;
