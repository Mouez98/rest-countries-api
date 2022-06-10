// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Search.scss";
import { AiOutlineSearch } from "react-icons/ai";

const SearchContainer = ({ searchHandler, data, regionHandler }) => {
  let regions = [];

  //get regions from given data
  data.forEach((element) => {
    regions.push(element.region);
  });

  //filter duplicated region & sort
  regions = [...new Set(regions)].sort();

  const selectedRegionHandler = e =>{ 
    const region = e.target.value;
    regionHandler(region)
  }

  return (
    <div className="searchContainer flex space-between">
      <div className="input">
        <label htmlFor="search">
          <AiOutlineSearch />
        </label>
        <input
          autoComplete="off"
          type="text"
          placeholder="Search for a country"
          name="search"
          onChange={(e) => searchHandler(e.target.value)}
        />
      </div>

      <select name="select" onChange={selectedRegionHandler}>
        <option value="none" defaultValue hidden>Filter by region</option>
        <option value="all" >All regions</option>
        {regions.map((region) => (
          <option key={region} value={region} >
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchContainer;
