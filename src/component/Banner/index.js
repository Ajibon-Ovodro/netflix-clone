import React, { useState, useEffect, useContext } from "react";
import {
  bookMarkClass,
  addOrRemoveWishList,
  fetchSingleData,
} from "../../utils";
import Context from "../../context";

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    async function fetchData() {
      const res = await fetchUrl();
      setMovie(res.results[Math.floor(Math.random() * res.results.length - 1)]);
      return res;
    }
    fetchData();
  }, [fetchUrl]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
                 "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
             )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button
            className="banner__button"
            onClick={() => addOrRemoveWishList(movie, state.favorite, dispatch)}
          >
            My List
          </button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
