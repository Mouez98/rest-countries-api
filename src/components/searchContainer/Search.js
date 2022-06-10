// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Search.scss";
import SearchInput from "./SearchInput";
import Select from "./Select";

const SearchContainer = ({ error, searchHandler, data, regionHandler }) => {
 
  return (
    <div className="searchContainer flex space-between">
      <SearchInput searchHandler={searchHandler} />
       <Select data={data} error={error} regionHandler={regionHandler} />
    </div>
  );
};

export default SearchContainer;
