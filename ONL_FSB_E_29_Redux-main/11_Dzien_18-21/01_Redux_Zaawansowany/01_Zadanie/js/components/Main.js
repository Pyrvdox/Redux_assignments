import React from "react";
import { Route, Routes, BrowserRouter as Router} from "react-router-dom";
import store from "../redux/store";
import {Provider} from "react-redux";
import Layout from "./Layout";
import Home from "./Home";
import Recipes from "./Recipes";
import Products from "./Products";
import Panel from "./Panel";
import AddRecipe from "./Recipes/Add";
import AddProduct from "./Products/Add";
import RecipeContainer from "../containers/recipes";
import ProductContainer from "../containers/products";
import AllProducts from "./Products";
import {ToAllProducts} from '../containers/products-index'
import {ToListRecipes} from "../containers/recipes-index";
import ProductsDetailsContainer from "../containers/products-details";
import RecipeDetailsContainer from "../containers/recipes-details";

const Main = () => {
    return(
            <Provider store={store}>
                <Router>
                    <Layout>
                        {/*<Panel path='./Panel' iconName={} listElements={} />*/}
                    <Routes>

                        <Route path='/' element={<Home />} />
                        <Route path='/recipes' element={<ToListRecipes/>} />
                        <Route path='/products' element={<ToAllProducts />} />
                        <Route path='/recipes/add' element={<RecipeContainer />}/>
                        <Route path='/products/add' element={<ProductContainer />}/>
                        <Route path='/products/:field' element={<ProductsDetailsContainer/>}/>
                        <Route path='/recipes/:field' element={<RecipeDetailsContainer/>}/>
                    </Routes>
                    </Layout>
                </Router>
            </Provider>
        )

}

export default Main;
