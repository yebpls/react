import React from "react";
import data from "./data.json";
import { Link, useNavigate } from "react-router-dom";

function ArticleList() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row">
        {data.map((item) => {
          return (
            <div className="card col-4">
              <div className="card-body">
                <h4 className="card-title">{item.title}</h4>
                <p className="card-text">{item.description}</p>
                {/* <Link to={`/articles/${item.id}`}>Details</Link> */}
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(item.id)}
                >
                  Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ArticleList;
