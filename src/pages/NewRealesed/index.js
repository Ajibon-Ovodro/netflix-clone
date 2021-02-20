import React from "react";
import MovieRows from "../../component/MovieRows";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { api } from "../../service/api";

function NewRealesed() {
  return (
    <div className="App">
      <Header />
      <MovieRows title="All New Released" fetchUrl={api.fetchNowPlaying} item={20} />
      <Footer />
    </div>
  );
}

export default NewRealesed;
