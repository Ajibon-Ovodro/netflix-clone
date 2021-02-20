import React from "react";
import MovieRows from "../../component/MovieRows";
import Banner from "../../component/Banner";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { api } from "../../service/api";

function Home() {
  return (
    <div className="App">
      <Header />
      <Banner fetchUrl={api.fetchNetflixOriginals} />
      <MovieRows
        title="Movies"
        fetchUrl={api.fetchMovies}
        item={6}
        navLink="/movies"
      />
      <MovieRows
        title="Tv Shows"
        fetchUrl={api.fetchTvShows}
        item={6}
        navLink="/tv"
      />
      <MovieRows
        title="RELEASED IN 2021"
        fetchUrl={api.fetchThisYearMovies}
        isLargeRow
        item={6}
      />
      {/* <MovieRows
        title="New Released"
        fetchUrl={api.fetchNowPlaying}
        item={6}
        navLink="/new"
      /> */}
      <Footer />
    </div>
  );
}

export default Home;
