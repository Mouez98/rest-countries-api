import Container from "../ui/Container";
import SearchContainer from "../searchContainer/Search";
import Countries from "../countries/countries";
import './Home.scss'

const Home = () => (
  <section className="home">
    <Container>
      <SearchContainer />
      <Countries />
    </Container>
  </section>
);

export default Home;
