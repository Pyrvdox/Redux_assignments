import React from "react";
import LastRecipes from "./LastRecipes";
import LastProducts from "./LastProducts";
import {ToLastProducts} from "../../containers/products-index";
import {ToLastRecipes} from "../../containers/recipes-index";

const Home = () => {
  return (
    <div className="columns">
      <div className="column is-one-third">
        <ToLastRecipes />
      </div>
      <div className="column is-one-third">
        <ToLastProducts />
      </div>
    </div>

  );
};

export default Home;