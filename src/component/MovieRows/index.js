import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import InfoCardModal from "../InfoCardModal";
import { api } from "../../service/api";
import { useHistory } from "react-router-dom";
import Context from "../../context";
import {
  bookMarkClass,
  addOrRemoveWishList,
  fetchSingleData
} from "../../utils";

const base_url = "https://image.tmdb.org/t/p/original";

const MovieRows = ({ title, fetchUrl, isLargeRow, item, navLink, filter }) => {
  const history = useHistory();
  const { state, dispatch } = useContext(Context);
  const [movies, setMovies] = useState([]);
  const [modal, setModal] = useState(false);
  const [info, setInfo] = useState(null);
  const [year, setYear] = useState("2021");

  const toggle = () => setModal(!modal);

  //A snippet of code which runs based on specific condition
  useEffect(() => {
    async function fetchData() {
      const res = await fetchUrl();
      if (item === 20) {
        setMovies(res.results);
      } else {
        setMovies(res.results.splice(0, item));
      }
      return res;
    }
    fetchData();
    // if [empty] run once when the row loads and don't run it again
  }, [fetchUrl]);

  const handleClick = async (data) => {
    fetchSingleData(data, api.fetchSingleInfo, setInfo, toggle);
  };

  const fetchByYear = async (filter_term) => {
    if (filter_term === "movie") {
      const res = await api.fetchMovieByYear(year);
      setMovies(res.results);
    } else {
      const res = await api.fetchTvByYear(year);
      setMovies(res.results);
    }
  };

  return (
    <section className="movie-rows my-5">
      <Container fluid>
        <Row className="d-flex align-items-center justify-content-between mb-3">
          <Col md={3} lg={3} xl={3} className="px-1">
            <h2 className="row__title">{title}</h2>
          </Col>
          {navLink && (
            <Col
              md={3}
              lg={3}
              xl={3}
              className="px-1"
              onClick={() => history.push(navLink)}
            >
              <span className="row__all d-flex justify-content-end">
                See All
              </span>
            </Col>
          )}
          {(filter === "tv" || filter === "movie") && (
            <Col md={3} lg={3} xl={3} className="px-1">
              <div className="d-flex justify-content-end">
                <select
                  value={year}
                  onChange={(event) => setYear(event.target.value)}
                  style={{ width: "50%" }}
                  className="mr-2"
                >
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                </select>
                <Button
                  color="primary"
                  size="sm"
                  onClick={() => fetchByYear(filter)}
                >
                  Filter
                </Button>
              </div>
            </Col>
          )}
        </Row>
        <Row>
          {movies.map((movie) => {
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
                    className={`row__poster ${
                      isLargeRow ? "row__posterLarge" : ""
                    }`}
                    src={`${base_url}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.name}
                    onClick={() => handleClick(movie)}
                  />
                </Col>
              );
            }
          })}
        </Row>
      </Container>
      {modal && (
        <InfoCardModal
          toggle={toggle}
          modal={modal}
          info={info}
          fetchUrl={api.fetchSingleInfo}
        />
      )}
    </section>
  );
};

export default MovieRows;
