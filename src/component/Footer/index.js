import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer footer-big">
      <Container fluid>
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex align-items-center footer__icon">
                <span>
                  <i className="fab fa-facebook-square"></i>
                </span>
                <span>
                  <i className="fab fa-instagram-square"></i>
                </span>
                <span>
                  <i className="fab fa-twitter-square"></i>
                </span>
                <span>
                  <i className="fab fa-youtube"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-6 col-md-2">
              <div className="column">
                <ul>
                  <li>
                    <a href="/">Audio Description</a>
                  </li>
                  <li>
                    <a href="/">Jobs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-2">
              <div className="column">
                <ul>
                  <li>
                    <a href="/">Help Center</a>
                  </li>
                  <li>
                    <a href="/">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-2">
              <div className="column">
                <ul>
                  <li>
                    <a href="/">Media Center</a>
                  </li>
                  <li>
                    <a href="/">Privacy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <div className="column">
                <div className="d-flex align-items-center footer__btn">
                  <span>service code</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-12">
              <div className="footer__description">
                © 1997-2016 Showtime, Inc.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
