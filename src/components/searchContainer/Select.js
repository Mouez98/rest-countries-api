


const Select = ({data, regionHandler, error}) => {
    //get regions from given data
  let regions = data && !error && data.map((element) => element.region);
  
  //filter duplicated region & sort
  regions = [...new Set(regions)].sort();

  const selectedRegionHandler = e =>{ 
    const region = e.target.value;
    regionHandler(region)
  }
   return(
    <select name="select" onChange={selectedRegionHandler}>
        <option value="none" defaultValue hidden>Filter by region</option>
        <option value="all" >All regions</option>
        {regions.map((region) => (
          <option key={region} value={region} >
            {region}
          </option>
        ))}
      </select>
   )
}

export default Select;