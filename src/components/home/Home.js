import { useState, useEffect } from "react";
import Container from "../ui/Container";
import SearchContainer from "../searchContainer/Search";
import Countries from "../countries/Countries";
import "./Home.scss";
import useFetch from "../../hooks/use-fetch";
import ErrorPage from "../error/ErrorPage";
import Loading from "../ui/Loading";
// import Loader from "css-loader";

const Home = () => {
  const [fetchedData, setFetchedData] = useState([]);

  const { data, isLoading, error } = useFetch("https://restcountries.com/v2/all");

  const countrySearchHandler = (key) => {
    if (key.trim().length > 0) {
      const filtredData = data.filter((country) =>
        country.name.toUpperCase().includes(key.toUpperCase())
      );
      setFetchedData(filtredData);
    } else {
      setFetchedData(data);
    }
  };


  const filterRegionsHandler = (region) => {
    if (region === "all") {
      setFetchedData(data);
    } else {
       const filtredData = data.filter((country) =>
      country.region.toUpperCase().includes(region.toUpperCase())
    );
    setFetchedData(filtredData);
    }
   
  };

  useEffect(() => {
    setFetchedData(data);
  }, [data]);

  return (
    <section className="home">
      <Container>
        <SearchContainer
          error={error}
          data={data}
          searchHandler={countrySearchHandler}
          regionHandler={filterRegionsHandler}
        />
        {isLoading ? 
          <Loading />
         : error  ? 
         <ErrorPage />
         : 
          <Countries data={fetchedData} />
        }
      </Container>
    </section>
  );
};

export default Home;
