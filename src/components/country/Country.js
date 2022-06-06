import "./Country.scss";

import flag from "../../assets/germany-flag-48866.png";

const Country = () => {
  return (
      <article className="country flex column">
        <img src={flag} alt="flag" />
        <div className="desc flex column left-flex">
          <h3>Germany</h3>
          <p>
            population: <span>88,177,900</span>
          </p>
          <p>
            region: <span>europe</span>
          </p>
          <p>
            capital: <span>berlin</span>
          </p>
        </div>
      </article>
  );
};

export default Country;
