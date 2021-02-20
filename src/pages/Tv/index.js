import React from "react";
import MovieRows from "../../component/MovieRows";
import Header from "../../component/Header";
import { api } from "../../service/api";
import Footer from "../../component/Footer";

function TvShows() {
  return (
    <div className="App">
      <Header />
      <MovieRows title="All Tv Shows" fetchUrl={api.fetchTvShows} item={20} filter="tv"/>
      <Footer />
    </div>
  );
}

export default TvShows;
