import React from "react";
import cheesecake from "../images/photo1.png";

function Header() {
  return (
    <div>
      <h1 className="font-mono text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
        Classic Cheesecake Recipe
      </h1>
      <div className="flex items-start mt-3">
        <div>
          <svg
            className="mt-2 2xl:h-6 2xl:w-6 xl:h-5 xl:w-5 md:w-4 md:h-4"
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="1.5" cy="1.5" r="1.5" fill="#C4C4C4" />
            <circle cx="1.5" cy="6.5" r="1.5" fill="#C4C4C4" />
            <circle cx="6.5" cy="1.5" r="1.5" fill="#C4C4C4" />
            <circle cx="6.5" cy="6.5" r="1.5" fill="#C4C4C4" />
            <circle cx="11.5" cy="1.5" r="1.5" fill="#C4C4C4" />
            <circle cx="11.5" cy="6.5" r="1.5" fill="#C4C4C4" />
          </svg>
        </div>
        <div>
          <p className="ml-2 text-sm md:ml-3 md:text-lg lg:text-xl 2xl:text-3xl">
            Look no further for a creamy and ultra smooth classic cheesecakek
            recipe! Paired with a buttery graham cracker crust, no one can deny
            its simple decadence. For the best results, bake in a water bath.
          </p>
        </div>
      </div>
      <div className="mt-6 rounded- rounded-3xl">
        <img src={cheesecake} alt="banner" />
      </div>
    </div>
  );
}

export default Header;
