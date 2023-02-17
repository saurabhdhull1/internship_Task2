import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../../App.css";
const Demoimg =
  "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg";

const IndiaAPI =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=66f554aaa3f64069968ef6b30c18dba2";

function India() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // add a loading state

  useEffect(() => {
    axios
      .get(IndiaAPI)
      .then((response) => {
        setData(response.data.articles);
        setLoading(false); // set the loading state to false after data is fetched
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="container main">
        <div className="row">
          <h1>Latest News from India</h1>
          {loading && <p>Loading Please wait...</p>}{" "}
          {/* conditionally render the loading message */}
          {!loading &&
            data.map((val) => {
              return (
                <div className="col-md-3 my-2">
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="imgDiv">
                      <img
                        className="card-img-top"
                        src={val.urlToImage || Demoimg}
                        alt="Cardimage"
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        {val.title && val.title.slice(0, 100)}
                      </h5>
                      <p className="card-text">
                        {val.description && val.description.slice(0, 100)}
                      </p>
                    </div>
                    <div className="moreDetails">
                      <a href={val.url} target="_blank" rel="noreferrer">
                        Go to Website
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default India;
