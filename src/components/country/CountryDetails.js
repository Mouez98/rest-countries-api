import { BsArrowLeft } from "react-icons/bs";
import Button from "../ui/Button";
import Container from "../ui/Container";
import flag from "../../assets/germany-flag-48866.png";
import "./CountryDetails.scss";
import { useNavigate, useLocation } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";
import { useEffect, useState } from "react";

const CountryDetails = () => {
  const [fetchedData, setFetchedData] = useState({})
  const navigate = useNavigate(),
   navigateBackHandler = () => {
    navigate("/");
  },
  location = useLocation();

  const countryName = location.pathname.slice(1)

  const {data,isLoading,error} = useFetch('https://restcountries.com/v2/name/'+countryName);
  
  const { name,nativeName,flag,population,capital,region } = fetchedData
  useEffect(()=> {
  setFetchedData(data[0])
  },[data])



  return (
    <Container>
      <Button onClick={navigateBackHandler}>
        <BsArrowLeft /> <span>back</span>
      </Button>
      {data[0] && <article className="full flex">
        <div className="img-container">
          <img src={flag} alt="flag" />
        </div>
        <div className="desc">
          <div className="flex">
            <div className="partOne">
              <h3>{name}</h3>
              <p>
                Native name: <span>{nativeName}</span>
              </p>
              <p>
                population: <span>{population}</span>
              </p>
              <p>
                capital: <span>{capital}</span>
              </p>
              <p>
                region: <span>{region}</span>
              </p>
              <p>
                {/* subregion: <span>{subregion}</span> */}
              </p>
            </div>
            <div className="partTwo ">
              <p>
                Top level domain: <span></span>
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
              <li>
                <Button>Nerthlands</Button>
              </li>
              <li>
                <Button>United Kingdom</Button>
              </li>
              <li>
                <Button>France</Button>
              </li>
            </ul>
          </div>
        </div>
      </article>
      }
      
    </Container>
  );
};

export default CountryDetails;
