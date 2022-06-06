import { BsArrowLeft } from "react-icons/bs";
import Button from "../ui/Button";
import Container from "../ui/Container";
import flag from "../../assets/germany-flag-48866.png";
import "./CountryDetails.scss";
import { useEffect, useState } from "react";

const CountryDetails = () => {
  const[data,setData] = useState()
  const fetchData = async () => {
    const response = await fetch('https://restcountries.com/v3.1/name/peru')
    const data = await response.json()
    return data
  }

  // useEffect(()=> {
  //   try {
  //     fetchData()
  //     setData(fetchData)
  //   }
  //   catch {
  //     console.log('error');
  //   }
  //   console.log(data);
  // },[data])
  return (
    <Container>
      <Button>
        <BsArrowLeft /> <span>back</span>
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
            <ul>
              <li><Button>Nerthlands</Button></li>
              <li><Button>United Kingdom</Button></li>
              <li><Button>France</Button></li>
            </ul>
          </div>
        </div>
      </article>
    </Container>
  );
};

export default CountryDetails;
