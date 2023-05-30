import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";

function ArticleDetails() {
  const [article, setArticle] = useState();
  const { id } = useParams();

  useEffect(() => {
    // Dùng id của bài viết để call API
    const article = data.find((item) => item.id === id);
    setArticle(article);
  }, [id]);

  if (!article) return null;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
    </div>
  );
}

export default ArticleDetails;
