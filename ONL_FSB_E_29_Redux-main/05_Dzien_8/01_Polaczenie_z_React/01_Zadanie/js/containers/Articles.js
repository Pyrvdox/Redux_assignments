import ArticlesComponent from "../components/Articles";
import { connect } from "react-redux";
import { addArticle, addUser } from "../redux/actions";
import React from "react";


const Articles = (props) => {
    return <ArticlesComponent {...props}/>
}

const mapStateToProps = (state) => {
    return {
        users: state.users, 
        articles: state.articles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (obj,value) => {dispatch(addArticle(obj)), dispatch(addUser(obj.userId, value += 1))},
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
