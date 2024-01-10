import React from "react";
import Form from "./Form";
import List from "./List";
import Links from "./Links";


const Cart = ({ products, sum, addProduct, removeProduct, changeFilter }) => {



    return (
        <>
            <div>
                <Links filter={changeFilter} />
                <Form addProduct={addProduct}/>
                <List removeProduct={removeProduct} products={products}/>
                <h1>Do zapłaty: {sum} PLN</h1>
            </div>
        </>
    )


};

export default Cart;
