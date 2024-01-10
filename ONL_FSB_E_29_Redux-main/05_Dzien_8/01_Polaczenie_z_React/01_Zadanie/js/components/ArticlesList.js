import React from "react";

const ArticlesList = ({articles = []}) => (
  
  <ol>
    {console.log(articles)}
    {articles.map((article) => <li key={article.title}>{article.title}</li>)}
    {/*{articles.map((title) => <li key={title}>{title}</li>)}*/}
  </ol>
);

export default ArticlesList;
