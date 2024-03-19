import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function Calculator() {

  const [firstnum, setfirstnum] = useState(0);
  const [secondnum, setsecondnum] = useState(0);
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(0);


  // const handlecalculate = () => {
  //   // alert((firstnum) (operator) (secondnum))
  //   console.log(firstnum,secondnum,operator);
  //   parseFloat(firstnum,secondnum);
  //   if (operator == "+") { setResult(parseFloat(firstnum) + parseFloat(secondnum)) }
  //   else if (operator == "-") { setResult(parseFloat(firstnum) + parseFloat(secondnum))}
  //   else if (operator == "*") { setResult(parseFloat(firstnum) + parseFloat(secondnum)) }
  //   else if (operator == "/") { setResult(parseFloat(firstnum) + parseFloat(secondnum)) }
  //   else if (operator == "%") { setResult(parseFloat(firstnum) + parseFloat(secondnum)) }
  //   else if (operator == "**") { setResult(parseFloat(firstnum) + parseFloat(secondnum)) }
  //   else { alert('Something went wrong') }
  // }

  const handlecalculate = () => {
    switch (operator) {
      case "+": setResult(parseFloat(firstnum) + parseFloat(secondnum)); break;
      case "-": setResult(parseFloat(firstnum) - parseFloat(secondnum)); break;
      case "*": setResult(parseFloat(firstnum) * parseFloat(secondnum)); break;
      case "/": setResult(parseFloat(firstnum) / parseFloat(secondnum)); break;
      case "%": setResult(parseFloat(firstnum) % parseFloat(secondnum)); break;
      case "**": setResult(parseFloat(firstnum) ** parseFloat(secondnum)); break;
    }
  }

  return (
    <div className='container border-2 rounded-3 my-5' style={{ backgroundImage: "linear-gradient(to right, #a8c0ff, #3f2b96)" }}>
      <h2 className='text-center text-decoration-underline'>Calculator</h2>
      <div>
        <label>First Number</label>
        <input onChange={(e) => setfirstnum(e.target.value)} value={firstnum} type="number" placeholder="0" className='form-control' />

        <label>Second Number</label>
        <input onChange={(e) => setsecondnum(e.target.value)} value={secondnum} type="number" placeholder="0" className='form-control' />

        <div className="row">
          <div className="col m-3 ">
            <label>Select Operator : </label>

            <select onChange={(e) => setOperator(e.target.value)} value={operator} name="option">
              <option value="+" className='btn btn-primary col m-2'>+</option>
              <option value="-" className='btn btn-primary col m-2'>-</option>
              <option value="*" className='btn btn-primary col m-2'>*</option>
              <option value="/" className='btn btn-primary col m-2'>/</option>
              <option value="%" className='btn btn-primary col m-2'>%</option>
              <option value="**" className='btn btn-primary col m-2'>pow</option>
            </select>

          </div>
        </div>

        <div className="row text-center my-2 pb-3 ">
          <h4>{result}</h4>
          <div>
            <button className='btn btn-primary' onClick={handlecalculate}>Calculate</button>
          </div>
        </div>
      </div>

    </div>
  )
}
