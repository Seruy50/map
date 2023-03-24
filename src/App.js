import { React, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { VillagesPoints } from "./villagespoints";
import { villages } from "./villages";
import "./App.css";

export default function App() {
  const [currentId, setCurrentId] = useState(1);
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>
        {"Карта №1. Перехід [е < "}
        <i>{"*е"}</i>
        {"] > [а] у наголошеній позиції"}
      </h1>
      <div className="main">
        <div className="mapField">
          <VillagesPoints
            setShow={setShow}
            setCurrentId={setCurrentId}
            show={show}
            currentId={currentId}
          />
        </div>
        <div className="infoLegendField">
          <div className="legend">
            <div className="legend__small">
              <div className="legend__small__point">
                <span className="legendSpan yellow"></span>
              </div>
              <div className="legend__small__text">
                <p>
                  <b>[е]</b> <i>це́рква, ден', ве́чʼір</i>
                </p>
              </div>
            </div>
            <div className="legend__small">
              <div className="legend__small__point">
                <span className="legendSpan red"></span>
              </div>
              <div className="legend__small__text">
                <p> 
                  <b>[а]</b> <i>ца́рква, дан', ва́чʼір</i>
                </p>
              </div>
            </div>
            <div className="legend__big">
              <div className="legend__big__point">
                <div> 
                  <span className="legendSpan greenRed bigger"></span> 
                </div>
                <div>
                  <span className="legendSpan greenYellow bigger"></span>
                </div>
              </div>
              <div className="legend__big__text">
                <p>  
                  <b>[a]</b> у ненаголошеній позиції: <i>пшане́ц'я, сочави́ц'а</i>
                </p>
              </div>
            </div>
          </div>
          <div className="info">
            {show ? (
              <Information
                villages={villages}
                id={currentId}
                show={show}
                setShow={setShow}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="madeBy">
              <p><span>By:</span> Universal S. (Seruy50)</p>
              <p>No rights reserved, 2023</p>
      </div>
    </div>
  );
}

function Information({ villages, id, setShow }) {
  let village = villages.filter((item) => item["id"] === id);
  village = village[0];
  return (
    <div className="information">
      <div className="infoClose" onClick={() => setShow(false)}>
        <span></span>
        <span></span>
      </div>
      <div className="infoTextBlock">
        {village.name}
        {village.transcription ? village.transcription : ""}
        {village.note ? village.note : ""}
        {village.plus ? village.plus : ""}
        <div className="audio">
          {village.audio ? (
            <ReactAudioPlayer src={village.audio} controls />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
