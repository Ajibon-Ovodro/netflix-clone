import React, { useEffect, useState, useContext } from "react";
import MovieRows from "../../component/MovieRows";
import Header from "../../component/Header";
import { api } from "../../service/api";
import { useLocation, useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import InfoCardModal from "../../component/InfoCardModal";
import Footer from "../../component/Footer";
import Context from "../../context";
import {
  bookMarkClass,
  addOrRemoveWishList,
  fetchSingleData,
} from "../../utils";
const base_url = "https://image.tmdb.org/t/p/original";

function Wishlist() {
  const params = useParams();
  const { state, dispatch } = useContext(Context);
  const [movies, setMovies] = useState([]);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [info, setInfo] = useState(null);

  useEffect(() => {
    if (params.terms) {
      searchResult(params.terms);
    }
  }, [params]);

  const searchResult = async (search) => {
    const res = await api.fetchBySearch(search);
    setMovies(res.results);
  };

  const handleClick = async (data) => {
    fetchSingleData(data, api.fetchSingleInfo, setInfo, toggle);
  };

  return (
    <div className="App">
      <Header />
      <Container fluid>
        <Row className="d-flex align-items-center justify-content-between mb-3">
          <Col md={3} lg={3} xl={3} className="px-1">
            <h2 className="row__title">Your Favorites</h2>
          </Col>
        </Row>
        <Row>
          {state.favorite.map((movie) => {
            if (movie.backdrop_path) {
              return (
                <Col
                  md={2}
                  lg={2}
                  xl={2}
                  key={movie.id}
                  className="px-1 py-1 movie"
                >
                  <span
                    className={bookMarkClass(state.favorite, movie.id)}
                    onClick={() =>
                      addOrRemoveWishList(movie, state.favorite, dispatch)
                    }
                  ></span>
                  <img
                    className="row__poster"
                    src={`${base_url}${movie.backdrop_path}`}
                    alt={movie.name}
                    onClick={() => handleClick(movie)}
                  />
                </Col>
              );
            }
          })}
        </Row>
      </Container>
      <MovieRows
        title="RELEASED IN 2021"
        fetchUrl={api.fetchThisYearMovies}
        isLargeRow
        item={6}
      />
      {modal && (
        <InfoCardModal
          toggle={toggle}
          modal={modal}
          info={info}
          fetchUrl={api.fetchSingleInfo}
        />
      )}
      <Footer />
    </div>
  );
}

export default Wishlist;
