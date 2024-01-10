import React from "react";

const Quote = ({quote, loading, error, fetchQuote, add_favourites}) => {

  
  const addToFavButton = () => {
    if(quote.quote) {
      return <button onClick={() => add_favourites({quote:quote.quote, author:quote.author})}>Dodaj do ulubionych!</button>
    }
  }

  return(
    <div>
    <button disabled={loading} onClick={fetchQuote}>Pobierz cytat</button>
    {quote && <p>{quote.quote} / {quote.author}</p>}
    {loading && "Ładuję cytat..."}
    {error && error}
    {addToFavButton()}
  </div>
  )

};

export default Quote;
