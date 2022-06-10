import "./Country.scss";

// import flag from "../../assets/germany-flag-48866.png";
import { Link } from "react-router-dom";

const Country = ({name,population,region, capital,flag, index}) => {
  return (
    <Link to={`/${name}`} >
      <article className={`country delay${index} flex column`}>
        <img src={flag} alt="flag" />
        <div className="desc flex column left-flex">
          <h3 title={name}>{name}</h3>
          <p>
            population: <span>{population}</span>
          </p>
          <p>
            region: <span>{region}</span>
          </p>
          <p>
            capital: <span>{capital}</span>
          </p>
        </div>
      </article>
    </Link>
  );
};

export default Country;
