import { BsArrowLeft } from "react-icons/bs";
import Button from "../ui/Button";
import Container from "../ui/Container";
// import flag from "../../assets/germany-flag-48866.png";
import "./CountryDetails.scss";
import { useNavigate, useLocation } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";
import { useEffect, useState } from "react";
import ErrorPage from "../error/ErrorPage";
import BordersCountries from "./BordersCountries";
import Loading from "../ui/Loading";

const CountryDetails = () => {
  const [fetchedData, setFetchedData] = useState(null);
  const navigate = useNavigate();
  const navigateBackHandler = () => navigate(-1);
  const location = useLocation();

  //Get the name of the current country
  const countryName = location.pathname.slice(1);

  const { data, isLoading, error } = useFetch(
    "https://restcountries.com/v2/name/" + countryName
  );

  useEffect(() => {
    setFetchedData(data[0]);
  }, [data, fetchedData]);

  return (
    <Container>
      <Button onClick={navigateBackHandler}>
        <BsArrowLeft /> <span>back</span>
      </Button>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <ErrorPage />
      ) : (
        fetchedData && (
          <article className="full flex">
            <div className="img-container">
              <img src={fetchedData.flag} alt="flag" />
            </div>
            <div className="desc">
              <div className="flex">
                <div className="partOne">
                  <h3>{fetchedData.name}</h3>
                  <p>
                    Native name: <span>{fetchedData.nativeName}</span>
                  </p>
                  <p>
                    population: <span>{fetchedData.population}</span>
                  </p>
                  <p>
                    capital: <span>{fetchedData.capital}</span>
                  </p>
                  <p>
                    region: <span>{fetchedData.region}</span>
                  </p>
                  <p>
                    subregion: <span>{fetchedData.subregion}</span>
                  </p>
                </div>
                <div className="partTwo ">
                  <p>
                    Top level domain:{" "}
                    <span>{fetchedData.topLevelDomain[0]}</span>
                  </p>
                  <p>
                    currencies: <span>{fetchedData.currencies[0].name}</span>
                  </p>
                  <p>
                    languages:
                    {fetchedData.languages.map((lang) => (
                      <span key={lang.name}>{lang.name}, </span>
                    ))}
                  </p>
                </div>
              </div>
              <BordersCountries borders={fetchedData.borders} />
            </div>
          </article>
        )
      )}
    </Container>
  );
};

export default CountryDetails;
