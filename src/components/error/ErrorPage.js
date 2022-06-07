import Button from "../ui/Button";
import Container from "../ui/Container";
import "./ErrorPage.scss";

import Svg from '../../assets/error.svg'

const ErrorPage = () => {
  return (
    <div className="error">
      <Container className='flex'>
          <div className="svgContainer">
            <img src={Svg} alt='error' />
          </div>
          <div className="textContainer">
            <h3>Ops! Something went wrong</h3>
            <p>
                brace yourself till I get the error fixed.
                you may also refresh the page or try later.
            </p>
            <Button>
                Go Home
            </Button>
          </div>
      </Container>
    </div>
  );
};

export default ErrorPage;
