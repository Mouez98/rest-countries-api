import { Link } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";
import Button from "../ui/Button";
import Loading from "../ui/Loading";

const BordersCountries = ({ borders }) => {
  const { data, isLoading, error } = useFetch(
    "https://restcountries.com/v2/all"
  );

  let bordersNames = [];

  const bordersFiltred =
    borders &&
    borders.length > 0 &&
    borders.map((bor) =>
      data.map((country) => {
        return country.alpha3Code === bor
          ? bordersNames.push(country.name)
          : null;
      })
    );

  const bordersElements = (
    <ul>
      {bordersNames && bordersNames.length > 0 ? 
        bordersNames.map((name) => (
          <li key={name}>
            <Link to={`/${name}`}>
              <Button>{name}</Button>
            </Link>
          </li>
        ))
       : bordersNames && bordersNames.length === 0 ? 
        <p>No borders countries</p>
       : 
        <p>{error}</p>
      }
    </ul>
  );

  return (
    <div className="border-contries">
      <p>Border contries: </p>
      {isLoading ? 
        <p>Loading</p>
       : error ? 
        <p>{error}</p>
       : data && data.length > 0 ? 
        bordersElements
       : null}
    </div>
  );
};

export default BordersCountries;
