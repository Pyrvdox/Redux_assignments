import React from "react";
import FavComponent from "../components/Favourites";
import { connect } from "react-redux";
import { favourites } from "../redux/actions";


const Favourites = (props) => {
    return <FavComponent {...props}/>
}

const mapStateToProps = (state) => {
    return {
        fav: state.fav
    }
}



export default connect(mapStateToProps, null)(Favourites)
