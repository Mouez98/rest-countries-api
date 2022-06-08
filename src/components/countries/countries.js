import "./Countries.scss";
import Country from "../country/Country";


const Countries = ({ data }) => {
  const fetchedCountries = data.map((country) => {
    return <Country key={country.name} {...country} />
  });
  
  return <section className="countries grid-home">{fetchedCountries}</section>;
};

export default Countries;
