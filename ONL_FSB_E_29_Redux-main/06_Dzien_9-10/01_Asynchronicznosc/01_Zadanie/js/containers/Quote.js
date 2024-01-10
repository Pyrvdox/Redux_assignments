import React from "react";
import { Connect, connect } from "react-redux";
import QuoteComponent from "../components/Quote";
import api from "../api";
import { quoteError, quoteFetched, startFetching , favourites} from "../redux/actions";

const Quote = (props) => {
    return <QuoteComponent {...props}/>
}

const mapStateToProps = (state) => {
    return {
        quote: state.quote, 
        loading: state.quote.loading, 
        error: state.quote.error, 
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchQuote: () => {dispatch(startFetching());
        api.fetchQuote()
        .then(data => dispatch(quoteFetched(data)))
        .catch(err => dispatch(quoteError(err)))
        },
        add_favourites: (obj) => {
        dispatch(favourites(obj))
        console.log(obj)
        }                
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quote)

// const mapStateToProps = (state) => {
//     return {
//         users: state.users, 
//         articles: state.articles
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         onAdd: (obj,value) => {dispatch(addArticle(obj)), dispatch(addUser(obj.userId, value += 1))},
        
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Articles);