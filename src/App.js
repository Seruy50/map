import {React, useState} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import {VillagesPoints} from './villagespoints'
import {villages} from './villages'
import './App.css'


export default function App(){
  const [currentId, setCurrentId] = useState(1);
  const [show, setShow] = useState(false)

  

  return <div className="map">
    <VillagesPoints setShow={setShow} setCurrentId={setCurrentId} show={show} currentId={currentId}/>
    {show ? <Information villages={villages} id={currentId} show={show} setShow={setShow}/> : ''}
  </div>
}



function Information({villages, id, setShow }){
  
  let village = villages.filter(item => item['id'] === id)
  village = village[0];
  return <div className='information'>
    <div className="close" onClick={() => setShow(false)}>
      <span></span><span></span>
    </div>
    <div className="textBlock">
      <p><b>{village.name}</b></p>
      {village.transcription ? village.transcription : ''}
      {village.note ? village.note : ''}
      {village.plus ? village.plus : ''}
      {village.audio ? <ReactAudioPlayer src={village.audio} controls/> : ''}
    </div>
  </div>
}

