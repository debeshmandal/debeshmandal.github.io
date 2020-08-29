import React from 'react';
import '../styles/cv.css';

function CVComponent (props) {
  return <div className="section"><h2>{props.name}</h2>{props.content}</div>
}

function CVEntry (props) {
  if (props.date) {
    var [date_from, date_to] = props.date;
  }
  var itemList = null;
  if (props.items) {
    let key = 0;
    let items = props.items;
    itemList = items.map((item) => <li key={key} className='CV-item'>{item}</li>);
    key += 1;
  }
  
  var text = null
  if (props.text) {
    text = props.text
  }
  return (
    <div className='CVEntry'>
      <div className="section-header">
        <h3 className='employer'>{props.employer}</h3>
        <p className='date'>{date_from} - {date_to}</p>
      </div>
      <div className="section-body">
        <p className='job-title'>{props.title}</p>
        { props.items && 
          <ul className="CV-summary">{itemList}</ul>
        }
        {
          props.text && 
          <p className="CV-text">{text}</p>
        }
      </div>
    </div> 
  );
}

function Education () {
  let content = [
    <CVEntry 
      employer='Imperial College London' 
      date={['September 2017', 'Present']} 
      title='PhD Materials Research' 
      key={0}
      text = {`
        My PhD focuses on different uses of computation materials science 
        for use in advanced healthcare applications. Firstly, I look at 
        developing a model for the condensation of nucleic acids with 
        positively-charged polyelectrolytes for use in gene therapy. Then 
        I have developed models for the controlled release of generic payloads 
        from hydrogel-based drug delivery vectors. Finally I am completing 
        research on advanced design of DNA origami.
      `}
      />,
    <CVEntry 
      employer='Imperial College London' 
      date={['September 2013', 'June 2017']} 
      title='MEng Biomaterials and Tissue Engineering' 
      items={['Achieved Grade 2:1']}
      key={1}
      text={`
        As part of my course, I studied a wide range of materials science topics
        including metals, glasses, polymers, nanomaterials,
        thin-film materials, and mechanics. I specialised in
        biomaterials and tissue engineering, with a Masters project
        that investigated using diacrylate gels to create
        microtopographical features using 2PP (two-photon
        polymerisation), an advanced form of 3D printing on the 
        nanoscale. Alongside this I developed soft and non-technical
        skills relating to entrepreneurship, business analytics and
        finance, as well as general skills relating to pitching
        and creating business cases.
      `}
    />,
    <CVEntry 
      employer='The Manchester Grammar School' 
      date={['September 2007', 'June 2013']} 
      key={2}
      items = {['A-levels: A*AA', 'GCSEs: 7A*2A1B']}
    />
  ];
  return <CVComponent name='Education' content={content} />
}

function Employment () {
  let content = [
    <CVEntry 
      employer='FabricNano' 
      date={['October 2019', 'April 2020']} 
      title='Intern Theoretical Scientist' 
      key={0}
      text={`
        My main tasks were around the design and simulation of DNA origami.
      `}
      />,
    <CVEntry 
      employer='Imperial College London' 
      date={['April 2018', 'Present']} 
      title='Graduate Teaching Assistant' 
      key={1}
      text={`
        I have completed a variety of teaching courses at Imperial College 
        and have taught Undergraduate and Postgraduate courses in polymer 
        science, Python and LaTeX.
      `}  
      />
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