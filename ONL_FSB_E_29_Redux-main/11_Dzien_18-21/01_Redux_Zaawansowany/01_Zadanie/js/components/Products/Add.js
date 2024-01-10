import React, { Component } from "react";
import {useState} from "react";

const AddProduct = ({addSingleProduct}) => {

    const [clear, setClear] = useState({name:""})

    const handleChange = (e) => {
     setClear({
       [e.target.id]: e.target.value,
     });
     console.log(e.target.value)
   };

  const SubmitHandler = (e) => {
      e.preventDefault()
      console.log("to jest state z reacta: ", clear)
      addSingleProduct(clear)
      setClear({name:""})
  }  ;

  return (
      <>
        <h1 className="title">Dodaj produkt</h1>
        <div className="box">
          <form autoComplete="off" onSubmit={SubmitHandler}>
            <div className="field">
              <label className="label">Nazwa produktu</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nazwa produktu"
                  onChange={handleChange}
                  value={clear.name}

                />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Dodaj produkt</button>
              </div>
            </div>
          </form>
        </div>
      </>
    );

}

export default AddProduct;
