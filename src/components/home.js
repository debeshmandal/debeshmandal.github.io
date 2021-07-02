import React from 'react';
import Frame from './frames/frame';

function Placeholder () {
  return (
    <Frame 
      link="https://placeholder.com"
      img="https://via.placeholder.com/150"
      alt="placeholder" 
    />)
}

function Home () {
  return (
    <div>
      <div className='row'>
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </div>
      <div className='row'>
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </div>
    </div>
  )
};
export default Home;