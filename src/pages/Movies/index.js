import React from "react";
import MovieRows from "../../component/MovieRows";
import Header from "../../component/Header";
import { api } from "../../service/api";
import Footer from "../../component/Footer";

function Movies() {
  return (
    <div className="App">
      <Header />
      <MovieRows
        title="All Movies"
        fetchUrl={api.fetchMovies}
        item={20}
        filter="movie"
      />
      <Footer />
    </div>
  );
}

export default Movies;
