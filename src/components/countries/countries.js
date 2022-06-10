import "./Countries.scss";
import Country from "../country/Country";


const Countries = ({ data }) => {
  const fetchedCountries = data.map((country,index) => {
    return <Country key={country.name} {...country} index={index}/>
  });
  
  return <section className="countries grid-home">{fetchedCountries}</section>;
};

export default Countries;
