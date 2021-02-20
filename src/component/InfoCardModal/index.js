import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
} from "reactstrap";

const InfoCardModal = ({ modal, toggle, info, fetchUrl }) => {
  return (
    <div className="info-card-modal">
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody className="p-4">
          <Row>
            <Col md={4} lg={4} xl={4} className="pr-4 pl-0">
              <div className="left__pane">
                <div className="left__pane-poster">
                  <img src={info?.Poster} alt="poster" />
                </div>
                <div>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
              </div>
            </Col>
            <Col md={8} lg={8} xl={8} className="pl-4 pr-0">
              <div className="right__pane">
                <div className="right__pane-title">
                  <h4>{info?.Title}</h4>
                </div>
                <div className="right__pane-plot">
                  <p>{info?.Plot}</p>
                </div>
                <div className="right__pane-list">
                  <p>Directed By: {info?.Director}</p>
                </div>
                <div className="right__pane-list">
                  <p>Cast: {info?.Actors}</p>
                </div>
                <div className="right__pane-list">
                  <p>Writer: {info?.Writer}</p>
                </div>
                <div className="right__pane-list">
                  <p>Language: {info?.Language}</p>
                </div>
                <div className="right__pane-list">
                  <p>Release Date: {info?.Released}</p>
                </div>
                <div className="right__pane-list">
                  <p>Country: {info?.Country}</p>
                </div>
                <div className="right__pane-list">
                  <p>Box Office: {info?.BoxOffice}</p>
                </div>
                <div className="right__pane-time-genre d-flex align-items-center">
                  <p>{info?.Runtime}</p>
                  <div className="genre">
                    {info?.Genre.split(",").map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default InfoCardModal;
