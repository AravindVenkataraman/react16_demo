import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="cvs-app">
      <h3>Basic</h3>
      <div className="align-center">
        <cvs-button>Plain</cvs-button>
        <cvs-button color="primary">Primary</cvs-button>
        <cvs-button color="secondary">Secondary</cvs-button>
        <cvs-button color="danger">Danger</cvs-button>
      </div>
      <h3>Raised</h3>
      <div className="align-center">
        <cvs-button type="raised">Plain</cvs-button>
        <cvs-button type="raised" color="primary">Primary</cvs-button>
        <cvs-button type="raised" color="secondary">Secondary</cvs-button>
        <cvs-button type="raised" color="danger">Danger</cvs-button>
      </div>
      <h3>Outline</h3>
      <div className="align-center">
        <cvs-button type="outline">Plain</cvs-button>
        <cvs-button type="outline" color="primary">Primary</cvs-button>
        <cvs-button type="outline" color="secondary">Secondary</cvs-button>
        <cvs-button type="outline" color="danger">Danger</cvs-button>
      </div>
      <h3>Flat</h3>
      <div className="align-center">
        <cvs-button type="flat">Plain</cvs-button>
        <cvs-button type="flat" color="primary">Primary</cvs-button>
        <cvs-button type="flat" color="secondary">Secondary</cvs-button>
        <cvs-button type="flat" color="danger">Danger</cvs-button>
      </div>
    </div >
  );
}

export default App;
