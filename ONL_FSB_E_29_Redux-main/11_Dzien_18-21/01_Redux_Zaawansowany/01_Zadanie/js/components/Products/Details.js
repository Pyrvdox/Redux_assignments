import React, {useEffect} from "react";

const ProductDetails = ({products, field}) => {


    return (
        <div>
            <h1>Name: {products[field -1].name}</h1>
            <h2>ID: {field}</h2>

        </div>

    )
}

export default ProductDetails;