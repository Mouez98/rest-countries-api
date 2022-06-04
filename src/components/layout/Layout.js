import Header from "../navbar/Header";
import SearchContainer from "../searchContainer/Search";
import Home from "../home/Home";
import Container from "../ui/Container";
import FullSingleNation from "../singleNation/FullSingleNation";

const Layout = () => {
  return (
    <>
      <Header />
      <FullSingleNation />
      {/* <Container>
        <SearchContainer />
        <Home />
      </Container> */}
    </>
  );
};

export default Layout;
