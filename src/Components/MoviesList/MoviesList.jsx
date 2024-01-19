import React, { useEffect, useState } from "react";
import { data } from "../MoviesData";

const MoviesList = () => {
  const [mapedData, setMapedData] = useState(data);
  const [classNames1, setClassNames1] = useState(false);
  const [classNames2, setClassNames2] = useState(false);
  const [classNames3, setClassNames3] = useState(false);

  const allfunction = () => {
    setClassNames2(false);
    setClassNames3(false);
    setMapedData(data);
    setClassNames1(true);
  };

  useEffect(() => {
    allfunction();
  }, []);

  const seriesfunction = () => {
    setClassNames1(false);
    setClassNames3(false);
    const seriesdata = data?.filter((item) => item.Type === "series");
    setMapedData(seriesdata);
    setClassNames2(true);
  };

  const moviesfunction = () => {
    setClassNames1(false);
    setClassNames2(false);
    const moviesdata = data?.filter((item) => item.Type === "movie");
    setMapedData(moviesdata);
    setClassNames3(true);
  };

  return (
    <>
      <div className="CardsContainer">
        <div className="btns">
          <div onClick={allfunction} className={classNames1 ? "btnK" : "btn"}>
            All
          </div>
          <div
            className={classNames2 ? "btnK" : "btn"}
            onClick={seriesfunction}
          >
            Series
          </div>
          <div
            className={classNames3 ? "btnK" : "btn"}
            onClick={moviesfunction}
          >
            Movies
          </div>
        </div>
        <div className="MoviesDataContaier">
          {mapedData?.map((item) => {
            return (
              <>
                <div className="card">
                  <img className="imgPoster" src={item.Images[0]} alt="img" />
                  <div className="movieData">
                    <h4>{item?.Title}</h4>
                    <h5>{item?.Released}</h5>
                    <h5>{item?.Year}</h5>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MoviesList;
