import { BsArrowLeft } from "react-icons/bs";
import Button from "../ui/Button";
import Container from "../ui/Container";
import flag from "../../assets/germany-flag-48866.png";
import './FullSingleNation.scss'

const FullSingleNation = () => {
  return (
    <Container>
      <Button>
        <BsArrowLeft /> back
      </Button>

      <article className="full flex">
        <div className="img-container">
          <img src={flag} alt="flag" />
        </div>
        <div className="desc">
            <div className="flex">
                <div className="partOne">
            <h3>Germany</h3>
            <p>
              Native name: <span>Belgie</span>
            </p>
            <p>
              population: <span>88,177,900</span>
            </p>
            <p>
              capital: <span>berlin</span>
            </p>
            <p>
              region: <span>europe</span>
            </p>
            <p>
              subregion: <span>western europe</span>
            </p>
          </div>
          <div className="partTwo ">
            <p>
              Top level domain: <span>.be</span>
            </p>
            <p>
              currency: <span>euro</span>
            </p>
            <p>
              languages: <span>dutshland,</span> <span>english</span>
            </p>
          </div>
            </div>
          <div className="border-contries">
              <p>Border contries:</p> 
              <span><Button>Nerthlands</Button></span>
              <span><Button>France</Button></span>
              <span><Button>United Kingdom</Button></span>
              
          </div>
        </div>
          
      </article>
    </Container>
  );
};

export default FullSingleNation;
