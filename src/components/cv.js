import React from 'react';
import '../styles/cv.css';

function CVComponent (props) {
  return <div className="section"><h2>{props.name}</h2>{props.content}</div>
}

function CVEntry (props) {
  let [date_from, date_to] = props.date
  return (
    <div className="section-header">
      <h3 className='employer'>{props.employer}</h3>
      <p className='date'>{date_from} - {date_to}</p>
    </div>
  );
}

function Education () {
  let content = [
    <CVEntry employer='Imperial College London' date={['September 2017', 'Present']} key={0}/>,
    <CVEntry employer='Imperial College London' date={['September 2013', 'June 2017']} key={1}/>,
    <CVEntry employer='The Manchester Grammar School' date={['September 2007', 'June 2013']} key={2}/>
  ];
  return <CVComponent name='Education' content={content} />
}

function Employment () {
  let content = [
    <CVEntry employer='FabricNano' date={['October 2019', 'April 2020']} key={0}/>,
    <CVEntry employer='Imperial College London' date={['April 2018', 'Present']} key={1}/>
  ];
  return <CVComponent name='Employment' content={content}/>
}

function CV () {
  return (
    <div className='App-main'>
      <Education />
      <Employment />
    </div>
  );
};

export default CV;