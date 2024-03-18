import React from 'react';
import { useState } from 'react';
import MyCard from './MyCard';


export default function FirstComp(props) {

  function MyApp() {
    return (
      <div> <h4>MyApp function</h4> </div>
    )
  }


  const username = "Deepak Gautam";
  const gog = " Hello!";
  const anotherEle = (<a href="https://google.com" target='_blank'>Visit Google</a>);

  // custom element
  const reactElement = React.createElement(
    'a',
    { href: 'https://YouTube.com', target: '_blank' },
    'Visit YouTube',
    gog
  )

  const randomValue = () => {
    alert(`Random value generated : ${Math.random()}`);
  }

  let [counter, setCounter] = useState(0);
  let [addNum, setAddTwoNum] = useState(0);
  function addTwo(){
    // Note : it will update only once
    setAddTwoNum(addNum + 2);
    // setAddTwoNum(addNum + 2);
  }

  // PROPS
  let obj = { username: "Deepak Gautam", location: "Lucknow" };
  let my_ary = [1, 2, 3, 4, "Hello World"];

  const[bgColor, setbgColor] = useState('');

  return (
    <>
      <div className='mx-2 my-2 p-2' style={{ backgroundColor: "lightgray" }}>
        <h4 className="text-center text-decoration-underline">Variables</h4>
        <p>Username : {username}</p>
      </div>

      <div className='mx-2 my-2 p-2' style={{ backgroundColor: "lightskyblue" }}>
        <h4 className="text-center text-decoration-underline">Component</h4>
        <MyApp />            <br />
        {anotherEle}         <br />       {/* gets rendred */}
        {/* <MyObj/>                 // Not rendred*/}
        {reactElement}       <br />
      </div>

      <div className='mx-2 my-2 p-2' style={{ backgroundColor: "lightgray" }}>
        <h4 className="text-center text-decoration-underline">Buttons</h4>
        <button onClick={() => alert('Button clicked')}>Alert</button><br />

        <hr />

        <button onClick={randomValue}>Generate Random Number</button>
        {/* <button onClick={subValue}>Subtract Value</button> */}

        <hr />

        <h3>{counter}</h3>
        <button onClick={() => setCounter(counter - 1)} className='btn btn-primary'>-</button>
        <button onClick={() => setCounter(counter + 1)} className='btn btn-success'>+</button>

        <h3>{addNum}</h3>
        <button onClick={addTwo}>Add Two</button>
      </div>
      

      {/*=============> PASSING PROPS <============= */}
      <div className='mx-2 my-2 p-2' style={{ backgroundColor: "lightskyblue" }}>
        <h4 className='text-center text-decoration-underline'>Props</h4>
        <ul>
          <li>My name is {props.name}. Age is {props.age}. Lives in {props.other.address}.</li>
          <li>Game : {props.myObject.game}. Player : {props.myObject.player}</li>
          <li>Array is : {props.myArray}</li>
        </ul>

        <MyCard channel="Zeus Emperior" btnText="Visit Me" lnk="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa inventore a eveniet molestias doloremque, temporibus dolor sint mollitia maxime illo aliquid ducimus quibusdam quasi consequatur iure voluptates eaque optio ad?" />
        <MyCard channel="Roman Emperior" lnk="https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg" about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa inventore a eveniet molestias doloremque, temporibus dolor sint mollitia maxime illo aliquid ducimus quibusdam quasi consequatur iure voluptates eaque optio ad?" />
        {/* passing object */}
        <MyCard channel="Atlanta Emperior" btnText="About Me" myobj={obj} lnk="https://images.pexels.com/photos/139038/pexels-photo-139038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa inventore a eveniet molestias doloremque, temporibus dolor sint mollitia maxime illo aliquid ducimus quibusdam quasi consequatur iure voluptates eaque optio ad?" />
        {/* passing array */}
        <MyCard channel="Gaming" myary={my_ary} lnk="https://images.pexels.com/photos/159369/xbox-xbox-one-microsoft-joystick-159369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa inventore a eveniet molestias doloremque, temporibus dolor sint mollitia maxime illo aliquid ducimus quibusdam quasi consequatur iure voluptates eaque optio ad?" />
      </div>


      <div className='mx-2 my-2 p-2 text-center' style={{ backgroundColor: bgColor, height:'100px'}}>
          <h2 className='text-center'>Background Changer</h2>
          <button onClick={()=>setbgColor('red')} className='btn bg-red mx-2' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setbgColor('green')} className='btn bg-red mx-2' style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setbgColor('lightskyblue')} className='btn bg-red mx-2' style={{backgroundColor:"lightskyblue"}}>Light SkyBlue</button>
          <button onClick={()=>setbgColor('blue')} className='btn bg-red mx-2' style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setbgColor('pink')} className='btn bg-red mx-2' style={{backgroundColor:"pink"}}>Pink</button>
          <button onClick={()=>setbgColor('olive')} className='btn bg-red mx-2' style={{backgroundColor:"olive"}}>Olive</button>
      </div>

    </>
  )
}
