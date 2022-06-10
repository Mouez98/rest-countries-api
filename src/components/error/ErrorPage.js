import Button from "../ui/Button";
import Container from "../ui/Container";
import { useNavigate } from "react-router-dom";
import "./ErrorPage.scss";

import Svg from "../../assets/error.svg";

const ErrorPage = () => {
  const navigate = useNavigate(),
        navigateBackHandler = () => {
        navigate("/");
        };
  return (
    <div className="error">
      <Container >
        <div className="svgContainer">
          <img src={Svg} alt="error" />
        </div>
        <div className="textContainer">
          <h3>Ops! Something went wrong</h3>
          <p>
            brace yourself till I get the error fixed. you may also refresh the
            page or try later.
          </p>
          <Button onClick={navigateBackHandler}>Go Home</Button>
        </div>
      </Container>
    </div>
  );
};

export default ErrorPage;
