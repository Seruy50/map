import {React, useState} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import {VillagesPoints} from './villagespoints'
import {villages} from './villages'
import './App.css'


export default function App(){
  const [currentId, setCurrentId] = useState(1);
  const [show, setShow] = useState(false)

  

  return <div>
         <h1>{'Карта №1. Перехід [е < '}<i>{'*е'}</i>{'] > [а] в наголошеній позиції'}</h1>
         <div className="main"> 
            <div className="mapField">
              <VillagesPoints setShow={setShow} setCurrentId={setCurrentId} show={show} currentId={currentId}/>
            </div>
            <div className="infoLegendField">
              <div className="legend">
                <div className="legendText"><span className="legendSpan yellow"></span><p>[е]: це́рква, ден´, ве́чʼір <i></i></p></div>
                <div className="legendText"><span className="legendSpan red"></span><p>[а]: ца́рква, дан´, ва́чʼір</p></div>
                <div>
                  <div>
                    <span className="legendSpan greenRed"></span>
                    <span className="legendSpan greenYellow"></span>
                  </div>
                  <div>
                  <p>[a]: у ненаголошеній позиції: <br />пшане́ц´я, сочави́ц´а</p>
                  </div>
                </div>
              </div>
              <div className="info"> 
                {show ? <Information villages={villages} id={currentId} show={show} setShow={setShow}/> : ''}
              </div>
            </div>
          </div>
          </div>
}



function Information({villages, id, setShow }){
  
  let village = villages.filter(item => item['id'] === id)
  village = village[0];
  return <div className='information'>
    <div className="infoClose" onClick={() => setShow(false)}>
      <span></span><span></span>
    </div>
    <div className="infoTextBlock">
      <p className="infoTitle"><b>{village.name}</b></p>
      {village.transcription ? village.transcription : ''}
      {village.note ? village.note : ''}
      {village.plus ? village.plus : ''}
      <div className="audio">{village.audio ? <ReactAudioPlayer src={village.audio} controls/> : ''}</div>
    </div>
  </div>
}

