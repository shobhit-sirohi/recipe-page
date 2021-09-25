import React from "react";
import Header from "./components/Header";
import Prep from "./components/Prep";
import Ingred from "./components/Ingred";
import Instructions from "./components/Instructions";
import Credits from "./components/Credits";

function App() {
  return (
    <div className="px-1 pt-10 md:pt-12 lg:px-40 xl:px-56 2xl:px-72 sm:px-6">
      <Header />
      <div className="mt-8 md:flex md:justify-between">
        <div className="md:order-3">
          <Prep />
        </div>
        <div className="md:w-4/5">
          <Ingred />
          <Instructions />
        </div>
      </div>
      <Credits />
    </div>
  );
}

export default App;
