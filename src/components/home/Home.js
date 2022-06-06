import Container from "../ui/Container";
import SearchContainer from "../searchContainer/Search";
import Countries from "../countries/countries";

const Home = () => (
  <>
    <Container>
      <SearchContainer />
      <Countries />
    </Container>
  </>
);

export default Home;
