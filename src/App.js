import { Routes, Route } from "react-router-dom";
import "./App.scss";
import CountryDetails from "./components/country/CountryDetails";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";

function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}>
        </Route>
          <Route path=":details" element={<CountryDetails />} />
      </Route>
    </Routes>
   </>
   
  );
}

export default App;
