import React from "react";

function Ingred() {
  return (
    <div className="mt-4 space-y-4">
      <h1 className="text-2xl font-medium md:text-3xl xl:text-4xl 2xl:text-5xl">
        Ingredients
      </h1>

      <div>
        <h2 className="text-lg italic lg:text-xl xl:text-2xl 2xl:text-3xl">
          Graham Cracker Crust
        </h2>
        <div className="flex mt-4 ">
          <div>
            <input
              type="checkbox"
              className="w-5 h-5 checked:bg-blue-600 checked:border-transparent"
            />
          </div>
          <label className="text-base md:ml-3 md:text-lg xl:text-xl 2xl:text-2xl ">
            {" "}
            1 and 1/2 cups (150g) <b> graham cracker crumbs </b> (about 10 full
            sheet graham crackers)
          </label>
          <br />
        </div>
        <div className="flex">
          <div>
            <input
              type="checkbox"
              className="w-5 h-5 checked:bg-blue-600 checked:border-transparent"
            />
          </div>
          <label className="text-base md:ml-3 md:text-lg xl:text-xl 2xl:text-2xl ">
            {" "}
            5 Tablespoons (70g) <b> unsalted butter</b>, melted
          </label>
          <br />
        </div>
        <div className="flex">
          <div>
            <input
              type="checkbox"
              className="w-5 h-5 checked:bg-blue-600 checked:border-transparent"
            />
          </div>
          <label className="text-base md:ml-3 md:text-lg xl:text-xl 2xl:text-2xl ">
            {" "}
            1/4 cup (50g) <b> granulated sugar</b>
          </label>
          <br />
        </div>
      </div>

      <div>
        <h2 className="text-lg italic lg:text-xl xl:text-2xl 2xl:text-3xl ">
          Cheesecake
        </h2>
        <div className="flex mt-4">
          <div>
            <input
              type="checkbox"
              className="w-5 h-5 checked:bg-blue-600 checked:border-transparent"
            />
          </div>
          <label className="text-base md:ml-3 md:text-lg xl:text-xl 2xl:text-2xl ">
            {" "}
            four 8-ounce blocks (904g) full-fat <b> cream cheese</b>, softened
            to room temperature
          </label>
          <br />
        </div>
        <div className="flex">
          <div>
            <input
              type="checkbox"
              className="w-5 h-5 checked:bg-blue-600 checked:border-transparent"
            />
          </div>
          <label className="text-base md:ml-3 md:text-lg xl:text-xl 2xl:text-2xl ">
            {" "}
            1 cup (200g) <b> granulated sugar</b>
          </label>
          <br />
        </div>
        <div className="flex">
          <div>
            <input
              type="checkbox"
              className="w-5 h-5 checked:bg-blue-600 checked:border-transparent"
            />
          </div>
          <label className="text-base md:ml-3 md:text-lg xl:text-xl 2xl:text-2xl ">
            {" "}
            1 cup (240g) full-fat <b> sour cream</b>, at room temperature
          </label>
          <br />
        </div>
        <div className="flex">
          <div>
            <input
              type="checkbox"
              className="w-5 h-5 checked:bg-blue-600 checked:border-transparent"
            />
          </div>
          <label className="text-base md:ml-3 md:text-lg xl:text-xl 2xl:text-2xl ">
            {" "}
            1 teaspoon <b> pure vanilla extract </b>
          </label>
          <br />
        </div>
        <div className="flex">
          <div>
            <input
              type="checkbox"
              className="w-5 h-5 checked:bg-blue-600 checked:border-transparent"
            />
          </div>
          <label className="text-base md:ml-3 md:text-lg xl:text-xl 2xl:text-2xl ">
            {" "}
            2 teaspoons <b> fresh lemon juice </b>(optional, but recommended)
          </label>
          <br />
        </div>
        <div className="flex">
          <div>
            <input
              type="checkbox"
              className="w-5 h-5 checked:bg-blue-600 checked:border-transparent"
            />
          </div>
          <label className="text-base md:ml-3 md:text-lg xl:text-xl 2xl:text-2xl ">
            {" "}
            3 large <b> eggs</b>, at room temperature
          </label>
          <br />
        </div>
        <div className="flex">
          <div>
            <input
              type="checkbox"
              className="w-5 h-5 checked:bg-blue-600 checked:border-transparent"
            />
          </div>
          <label className="text-base md:ml-3 md:text-lg xl:text-xl 2xl:text-2xl ">
            {" "}
            topping suggestions: salted caramel, lemon curd, strawberry topping,
            chocolate ganache, red wine chocolate ganache, fresh fruit, whipped
            cream, or raspberry sauce (recipe in notes)
          </label>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Ingred;
