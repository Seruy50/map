import React from 'react';
import './App.css'


export function VillagesPoints({setShow, show, currentId, setCurrentId}){

    const currentInfo = (id) => {
        setCurrentId(id);
        setShow(true);
        console.log(show);
        console.log(currentId)
      }
    
  return <div className="map">
    <Village typeOfMarker='red' top={4} left={375} currentInfo={currentInfo} id={1}/>
    <Village typeOfMarker='greenYellow' top={33} left={480} currentInfo={currentInfo} id={2}/>
    <Village typeOfMarker='red' top={60} left={609} currentInfo={currentInfo} id={3}/>
    <Village typeOfMarker='red' top={0} left={690} currentInfo={currentInfo} id={4}/>
    <Village typeOfMarker='greenYellow' top={33} left={755} currentInfo={currentInfo} id={5}/>
    <Village typeOfMarker='yellow' top={53} left={895} currentInfo={currentInfo} id={6}/>
    <Village typeOfMarker='greenRed' top={210} left={130} currentInfo={currentInfo} id={7}/>
    <Village typeOfMarker='red' top={185} left={240} currentInfo={currentInfo} id={8}/>
    <Village typeOfMarker='red' top={175} left={305} currentInfo={currentInfo} id={9}/>
    <Village typeOfMarker='greenRed' top={210} left={345} currentInfo={currentInfo} id={10}/>
  </div>
}



function Village({top, left, typeOfMarker, currentInfo, id, setShow}){
    return <span className={typeOfMarker + ' villagesSpan'} style={{top: top + 'px', left: left + 'px'}} onClick={() => currentInfo(id)} onMouseOver={() => currentInfo(id)} onMouseOut={() => setShow(false)}></span>
  }
