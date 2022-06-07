// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Search.scss";
import { AiOutlineSearch } from "react-icons/ai";

const SearchContainer = () => {
  return (
    <div className="searchContainer flex space-between">
      <div className="input">
        <label htmlFor="search">
          <AiOutlineSearch />
        </label>
        <input type="text" placeholder="Search for a country" name="search" />
      </div>

      <select name="select">
        <option defaultValue="" disabled >
          Select region
        </option>
        <option value="europe">Europe</option>
        <option value="africa">Africa</option>
        <option value="asia">Asia</option>
      </select>
    </div>
  );
};

export default SearchContainer;
