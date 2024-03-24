import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/00Home';
import FirstComp from './components/01PropsUseStatComp';
import UseEfUseRfClbk from './components/02UseEfUseRfClbk';
import ApiHook from './components/03ApiHook';

//----------------------------------------------------------
import Calculator from './components/selfProjectComp/01Calculator';
import BMICalculator from './components/selfProjectComp/02BMICalculator';



function App() {
  let obj = { game: "Counter Strike", player: "PlayerOne" };
  let my_ary = ["Deepak Gautam ", 6473647367, " Lucknow"];

  const [newCount, setnewCount] = useState(0);
  const [newData, setnewData] = useState('Deepak');

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/firstcomp" element={<FirstComp name="Ishu Kirti Gautam" age='21' other={{ address: 'Nainital', mobile:'7465746574'}}  myObject={obj} myArray={my_ary}/>} />
          <Route path="/UseEfUseRfClbk" element={<UseEfUseRfClbk nwCount={newCount} nwData={newData} />} />
          <Route path="/ApiHooks" element={<ApiHook/>} />
          


          {/*-------------------------------------------------------------------------- */}

          <Route path="/calculator" element={<Calculator/>}/>
          <Route path="/bmicalculator" element={<BMICalculator/>}/>

        </Routes>
      </BrowserRouter>
      {/* 02UseEfUseRfClbk */}
      {/* <p>For component - 02UseEfUseRfClbk.jsx</p>
      <button onClick={() => setnewCount(newCount + 1)} className='btn btn-primary'>Update Count</button>
      <button onClick={() => setnewData('Javascript')} className='btn btn-success'>Update Data</button> */}
    </>
  )
}





export default App
