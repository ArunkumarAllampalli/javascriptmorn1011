import React from "react";
import MyComponent from "./components/MyComponent";
import CountryCard from "./components/CountryCard";
import CountriesCard from "./components/CountriesCard";
function App() {
  return (
    <React.Fragment>
     <CountriesCard/>
     <CountriesCard/>
    </React.Fragment>
  );
}

export default App;
