// Favourites.propTypes = {
//   quotes: PropTypes.array.isRequired
// };
//
// export default Favourites;
import React from "react";


const FavComponent = ({fav}) => {
    return (
        <div>
            <ul>
                {fav.map((singleQuote) => <li key={singleQuote.quote}>{singleQuote.quote} ~ {singleQuote.author}</li>)}
            </ul>
        </div>
    )
}

export default FavComponent;