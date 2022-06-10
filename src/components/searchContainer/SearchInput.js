import { AiOutlineSearch } from "react-icons/ai";

const SearchInput = ({ searchHandler }) => (
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
);

export default SearchInput;
