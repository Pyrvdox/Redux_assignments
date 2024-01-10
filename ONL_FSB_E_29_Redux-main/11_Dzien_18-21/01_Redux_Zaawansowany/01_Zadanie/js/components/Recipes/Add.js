import React, { useState } from "react";
import SingleProduct from "./SingleProduct";
import {ToSelectProducts} from "../../containers/products-index";

const AddRecipe = ({addSingleRecipe}) => {
  const [recipe, setRecipe] = useState({
    name: "",
    desc: "",
    products: [{ key: 0 }],
    lastKey: 0
  });

  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(recipe);
    addSingleRecipe(recipe)
    setRecipe({
      name: "",
      desc: "",
      products: [{ key: 0 }],
      lastKey: 0
    });
  };

  const handleAddProduct = () => {
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      products: [...prevRecipe.products, { key: prevRecipe.lastKey + 1 }],
      lastKey: prevRecipe.lastKey + 1
    }));
  };

  const handleProductChoose = (index, id) => {
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      products: prevRecipe.products.map((el) =>
          el.key === index ? { ...el, id } : el
      )
    }));
  };

  const handleProductDelete = (index) => {
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      products: prevRecipe.products.filter((el, i) => index !== i)
    }));
  };

  return (
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h1 className="title">Dodaj przepis</h1>
        <div className="box">
          <div className="field">
            <label className="label">Nazwa przepisu</label>
            <div className="control">
              <input
                  className="input"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nazwa przepisu"
                  onChange={handleChange}
                  value={recipe.name}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Opis</label>
            <div className="control">
              <input
                  className="input"
                  type="text"
                  name="desc"
                  id="desc"
                  placeholder="Opis przepisu"
                  onChange={handleChange}
                  value={recipe.desc}
              />
            </div>
          </div>
        </div>

        <h2 className="subtitle is-4">Lista produktów</h2>
        <div className="box">
          {recipe.products.map((product, i) => (
              <ToSelectProducts
                  key={product.key}
                  id={product.id ? product.id : i}
                  index={product.key}
                  number={i}
                  onChange={handleProductChoose}
                  onClose={handleProductDelete}
              />
          ))}

          <div className="field">
            <div className="control">
              <a className="button is-primary" onClick={handleAddProduct}>
                Dodaj produkt do przepisu
              </a>
            </div>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Dodaj przepis</button>
          </div>
        </div>
      </form>
  );
};

export default AddRecipe;
