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
    <Village typeOfMarker='red' top={235} left={425} currentInfo={currentInfo} id={11}/>
    <Village typeOfMarker='yellow' top={200} left={520} currentInfo={currentInfo} id={12}/>
    <Village typeOfMarker='greenRed' top={200} left={620} currentInfo={currentInfo} id={13}/>
    <Village typeOfMarker='greenRed' top={250} left={690} currentInfo={currentInfo} id={14}/>
    <Village typeOfMarker='greenRed' top={200} left={790} currentInfo={currentInfo} id={15}/>
    <Village typeOfMarker='red' top={190} left={890} currentInfo={currentInfo} id={16}/>
    <Village typeOfMarker='red' top={170} left={980} currentInfo={currentInfo} id={17}/>
    <Village typeOfMarker='yellow' top={190} left={1060} currentInfo={currentInfo} id={18}/>
    <Village typeOfMarker='red' top={290} left={170} currentInfo={currentInfo} id={19}/>
    <Village typeOfMarker='yellow' top={300} left={270} currentInfo={currentInfo} id={20}/>
    <Village typeOfMarker='red' top={300} left={360} currentInfo={currentInfo} id={21}/>
    <Village typeOfMarker='yellow' top={340} left={420} currentInfo={currentInfo} id={22}/>
    <Village typeOfMarker='greenRed' top={300} left={510} currentInfo={currentInfo} id={23}/>
    <Village typeOfMarker='greenRed' top={320} left={580} currentInfo={currentInfo} id={24}/>
    <Village typeOfMarker='greenRed' top={345} left={659} currentInfo={currentInfo} id={25}/>
    <Village typeOfMarker='greenRed' top={340} left={757} currentInfo={currentInfo} id={26}/>
    <Village typeOfMarker='greenRed' top={285} left={870} currentInfo={currentInfo} id={27}/>
    <Village typeOfMarker='greenRed' top={346} left={880} currentInfo={currentInfo} id={28}/>
    <Village typeOfMarker='red' top={320} left={957} currentInfo={currentInfo} id={29}/>
    <Village typeOfMarker='greenRed' top={400} left={940} currentInfo={currentInfo} id={30}/>
    <Village typeOfMarker='greenRed' top={447} left={990} currentInfo={currentInfo} id={31}/>
    <Village typeOfMarker='greenRed' top={320} left={1050} currentInfo={currentInfo} id={32}/>
    <Village typeOfMarker='greenRed' top={420} left={1100} currentInfo={currentInfo} id={33}/>
    <Village typeOfMarker='yellow' top={257} left={1100} currentInfo={currentInfo} id={34}/>
    <Village typeOfMarker='NOONTHEMAP' top={0} left={0} currentInfo={currentInfo} id={35}/>
    <Village typeOfMarker='yellow' top={376} left={220} currentInfo={currentInfo} id={36}/>
    <Village typeOfMarker='red' top={400} left={321} currentInfo={currentInfo} id={37}/>
    <Village typeOfMarker='yellow' top={420} left={440} currentInfo={currentInfo} id={38}/>
    <Village typeOfMarker='yellow' top={448} left={548} currentInfo={currentInfo} id={39}/>
    <Village typeOfMarker='red' top={440} left={659} currentInfo={currentInfo} id={40}/>
    <Village typeOfMarker='red' top={450} left={750} currentInfo={currentInfo} id={41}/>
    <Village typeOfMarker='NOONTHEMAP' top={0} left={0} currentInfo={currentInfo} id={42}/>
    <Village typeOfMarker='greenRed' top={450} left={840} currentInfo={currentInfo} id={43}/>
    <Village typeOfMarker='red' top={540} left={980} currentInfo={currentInfo} id={44}/>
    <Village typeOfMarker='yellow' top={630} left={1040} currentInfo={currentInfo} id={45}/>
    <Village typeOfMarker='red' top={567} left={1090} currentInfo={currentInfo} id={46}/>
    <Village typeOfMarker='greenRed' top={380} left={1030} currentInfo={currentInfo} id={47}/>
    <Village typeOfMarker='yellow' top={720} left={960} currentInfo={currentInfo} id={48}/>
    <Village typeOfMarker='greenRed' top={600} left={943} currentInfo={currentInfo} id={49}/>
    <Village typeOfMarker='yellow' top={650} left={830} currentInfo={currentInfo} id={50}/>
    <Village typeOfMarker='red' top={745} left={800} currentInfo={currentInfo} id={51}/>
    <Village typeOfMarker='yellow' top={815} left={780} currentInfo={currentInfo} id={52}/>
    <Village typeOfMarker='yellow' top={550} left={700} currentInfo={currentInfo} id={53}/>
    <Village typeOfMarker='greenRed' top={520} left={800} currentInfo={currentInfo} id={54}/>
    <Village typeOfMarker='greenRed' top={620} left={695} currentInfo={currentInfo} id={55}/>
    <Village typeOfMarker='red' top={580} left={570} currentInfo={currentInfo} id={56}/>
    <Village typeOfMarker='red' top={630} left={600} currentInfo={currentInfo} id={57}/>
    <Village typeOfMarker='yellow' top={520} left={380} currentInfo={currentInfo} id={58}/>
    <Village typeOfMarker='greenYellow' top={710} left={1100} currentInfo={currentInfo} id={59}/>
    <Village typeOfMarker='yellow' top={770} left={1017} currentInfo={currentInfo} id={60}/>
    <Village typeOfMarker='yellow' top={810} left={1090} currentInfo={currentInfo} id={61}/>
    <Village typeOfMarker='red' top={760} left={580} currentInfo={currentInfo} id={62}/>
    <Village typeOfMarker='red' top={700} left={410} currentInfo={currentInfo} id={63}/>
    <Village typeOfMarker='red' top={700} left={550} currentInfo={currentInfo} id={64}/>
    <Village typeOfMarker='yellow' top={720} left={460} currentInfo={currentInfo} id={65}/>
    <Village typeOfMarker='yellow' top={740} left={250} currentInfo={currentInfo} id={66}/>
    <Village typeOfMarker='yellow' top={820} left={620} currentInfo={currentInfo} id={67}/>
  </div>
}



function Village({top, left, typeOfMarker, currentInfo, id}){
    return <span className={typeOfMarker + ' villagesSpan'} style={{top: top + 'px', left: left + 'px'}} onClick={() => currentInfo(id)}></span>
  }
