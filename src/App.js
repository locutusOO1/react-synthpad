import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { AMSynth } from 'tone';

const synth = new AMSynth().toMaster();

// synth.triggerAttackRelease("C4","8n");

function App() {
  return (
    <><button onClick={() => synth.triggerAttackRelease("C4","8n")}></button></>
  );
}

export default App;
