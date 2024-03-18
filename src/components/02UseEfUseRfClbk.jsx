import React, { useCallback, useEffect, useState, useRef } from 'react'

export default function UseEfUseRfClbk(props) {
  
  const [randomNum, setrandomNum] = useState('');
  function getRandomNo(min, max) {
    min = Math.ceil(min);                           // Round up minimum value
    max = Math.floor(max);                          // Round down maximum value
    const range = max - min + 1;                      // Calculate the range
    return Math.floor(Math.random() * range) + min;     // Generate random integer
  }
  function GenRandNo() {
    let pass = getRandomNo(1, 100);
    setrandomNum(pass);
  }

  //-------------------------------------------------------------------------------

  const [length, setlength] = useState(6);
  const [IsNum, setIsNum] = useState(false);
  const [IsChar, setIsChar] = useState(false);
  const [password, setPassword] = useState("");
  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (IsNum) str += "0123456789"
    if (IsChar) str += "!@#$%^&*~`'|:;?><,./-=";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 2)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, IsNum, IsChar, setPassword])

  useEffect(() => { passGen() }, [length, IsNum, IsChar])

  const passwordRef = useRef(null);
  const copyToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    alert("Password copied")
  }, [password]);
  // const copyToClipboard = () => {
  //   passwordRef.current.select();
  //   document.execCommand("Copy")
  //   alert("Password Copied to ClipBoard!");
  // };


  //====> For UseEffect  
  React.useEffect(() => {
    // alert('UseEffect');
  });


  //----> useEffect on state
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.warn('UseEffect count :', count)
  });

  const [ndata, nsetData] = useState('default data');
  const [ncount, nsetCount] = useState(100);

  useEffect(() => {
    console.warn("<h3>Useeffect Called on data</h3>");
    // alert('State Updated');
  }, [ndata]);     // <== passed data as argument so usEffect will run only on data not on count

  useEffect(() => {
    console.log('UseEffect called on count. Count : ' + count);
  }, [ncount]);   // <== passed data as argument so usEffect will run only on count not on data



  //-----------------------------------------------------------------------------
  //USEEFFECT WITH PROPS
  useEffect(() => {
    alert("UseEffect running on both 'count' and 'data' ");
  }, [props.nwdata, props.nwcount]);

  //=====> UseRef
  let InputRef = useRef(null);

  function myFunction() {
    InputRef.current.value = '10000';
    InputRef.current.focus(); //bring focus to input box on button click 
    InputRef.current.style.color = 'red'; //change background color of the text field
    InputRef.current.style.backgroundColor = 'blue';
    InputRef.current.style.font = 'bold';

    //InputRef.current.style.display = "none";   // will hide the text field
  }

  //------------------------------------------------------------------------------
  return (
    <div style={{ backgroundColor: 'lightblue' }} className='container'>
      <h2 className='text-center text-decoration-underline mb-4'>UseEffect UserRef and Callback</h2>

      <h4 className='text-decoration-underline'>Number generator</h4>
      <p>{randomNum}</p>
      <button onClick={GenRandNo} className="btn btn-primary">Generate Number</button>

      <h4 className='text-decoration-underline'>Password generator</h4>
      <input type='text' value={password} ref={passwordRef} placeholder='password' readOnly className='m-1' />
      Include Numbers : <input type='checkbox' onChange={() => setIsNum((prev) => !prev)} className='m-1' />     &nbsp;&nbsp;
      Include Characters :<input type='checkbox' onChange={() => setIsChar((prev) => !prev)} className='m-1' />  &nbsp;&nbsp;
      Password Length {length} :<input type='range' value={length} min={6} max={20} onChange={(e) => { setlength(e.target.value) }} className='m-1' />  &nbsp;&nbsp;
      <button className='btn btn-success' onClick={copyToClipboard}>Copy Password</button>


      {/*-------------------------------------------------------------*/}

      <h2>UseEffect Hook</h2>
      <ul>
        <li>useEffect runs on every render.</li>
        <li>The useEffect hook is used to handle the side effects of a component.</li>
        <li>The useEffect Hook allows you to perform side effects in your components.</li>
        <li>Some examples of side effects are: fetching data, directly updating the DOM, and timers.</li>
        <li>useEffect accepts two arguments. The second argument is optional.
          useEffect (function, dependency);
        </li>
        <li>We can use  multiple UseEffects</li>
      </ul>

      <h4>useEffect in Rect {count}</h4>
      <button onClick={() => setCount(count + 1)}>Update Counter</button>
      <hr />

      <h2 className='text-decoration-underline text-center'>Use Effect with Conditional Rendering</h2>
      <ul>
        <li>Use Effect with Conditional Rendering is used in functional component</li>
        <li>It only runs when the value of data changes.</li>

      </ul>

      <h4>Count : {ncount}</h4>
      <h4>Data : {ndata}</h4>
      <button onClick={() => nsetCount(count + 1)}>Update Count</button>
      <button onClick={() => nsetData('React')}>Update Data</button>


      <h3 className='text-decoration-underline text-center'>Use Effect with props</h3>
      {/* USING useEffect with props */}
      <h4>Props : {props.nwCount}</h4>    {/* props passed from App.js */}
      <h4>Props : {props.nwData}</h4>     {/* props passed from App.js */}



      {/*-------------------------------------------------------------*/}

      <h2>UseRef Hook</h2>
      <ul>
        <li>Used for DOM manipulation.</li>
        <li>useRef is a React Hook that is used to create a mutable object called a ref. This ref can hold a .current property, which can be assigned any value.</li>
        <li>The main purpose of useRef is to persist values across renders without causing the component to re-render when the ref's value changes.</li>
      </ul>
      <input type="text" ref={InputRef} className='text-center' />
      <button onClick={myFunction}>Handle Input</button>
      <hr />
    </div>
  )
}
