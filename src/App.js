import { Routes, Route } from "react-router-dom";
import "./App.scss";
import CountryDetails from "./components/country/CountryDetails";
import Home from "./components/home/Home";
import ErrorPage from './components/error/ErrorPage';
import Header from "./components/navbar/Header";

function App() {
  return (
   <>
      <Header />
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
          <Route path=":details" element={<CountryDetails />} />
          <Route path='*' element={<ErrorPage />} />
    </Routes>
   </>
   
  );
}

export default App;
