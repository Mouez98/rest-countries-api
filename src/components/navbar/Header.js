// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.scss";
import Container from '../ui/Container'
import {MdOutlineDarkMode} from 'react-icons/md'

const Header = () => {
  return (
    <header className="header ">
      <Container className={'flex space-between center-flex'}>
        <h2>Where in the world</h2>
      <div className="flex">
      <MdOutlineDarkMode />
        <h4>Dark Mode</h4>
      </div>
      </Container>
      
    </header>
  );
};

export default Header;
