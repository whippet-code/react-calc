import { useState } from 'react';

import './App.css'

function Button({ value, numberButtonClick }) {
  return (
    <button 
      key={value}
      className="bg-sky-500 hover:bg-sky-700 text-white font-bold p-6 rounded mx-1"
      onClick={() => numberButtonClick(value)} >
      {value}
    </button>
)}

function Operator({ operation, opClick }) {
  return (
    <button 
      key={"key"+operation}
      className="bg-sky-500 hover:bg-sky-700 text-white font-bold p-6 rounded mx-1 operatorButton"
      onClick={() => opClick(operation)} >
      {operation}
    </button>
  )
}

function findCalc(a, b, op) {
  if (op === "+") {
    return a + b
  } else if (op === "-") {
    return a - b
  } else if (op === "*") {
    return a * b
  } else if (op === "/") {
    return a / b
  }
}

function App() {

  let [ result, setResult ] = useState(0);
  let [ input, setInput ] = useState(0);
  let [ mem, setMem ] = useState(0);
  let [ operator, setOperator ] = useState(null);

  const numberButtonClick = buttonValue => {
    setInput(buttonValue);
  }

  const opClick = buttonValue => {
    if (buttonValue === 'CLR') {
      setResult(0);
      setInput(0);
      setMem(0);
      setOperator(null);
      return
    } else if (buttonValue === '=') {
      let answer = findCalc(mem, input, operator)
      setResult(answer)
      setMem(0)
      setInput(0)
      setOperator(null)
      return
    }
    setMem(input)
    setOperator(buttonValue)
  }

  return (
    <div className='App grid'>
      <div className='text-4xl font-bold bg-slate-500 text-slate-100 p-4 mx-2 rounded-md text-center text-pretty'>
        <h1>Vite, React + Tailwind</h1>
        <h4>Calculator</h4>
      </div>
      <div className='grid-flow-row text-center p-1 pt-3'>
        <Button value={1} numberButtonClick={numberButtonClick} />
        <Button value={2} numberButtonClick={numberButtonClick} />
        <Button value={3} numberButtonClick={numberButtonClick} />
        <Operator operation="+" opClick={opClick} />
      </div>
      <div className='grid-flow-row text-center p-1'>
        <Button value={4} numberButtonClick={numberButtonClick} />
        <Button value={5} numberButtonClick={numberButtonClick} />
        <Button value={6} numberButtonClick={numberButtonClick} />
        <Operator operation="-" opClick={opClick} />
      </div>
      <div className='grid-flow-row text-center p-1'>
        <Button value={7} numberButtonClick={numberButtonClick} />
        <Button value={8} numberButtonClick={numberButtonClick} />
        <Button value={9} numberButtonClick={numberButtonClick} />
        <Operator operation="*" opClick={opClick} />
      </div>
      <div className='grid-flow-row text-center p-1'>
        <Button value={'('} />
        <Button value={0} numberButtonClick={numberButtonClick} />
        <Button value={')'} />
        <Operator operation="/" opClick={opClick} />
      </div>
      <div className="grid-flow-row text-center p-1 pt-3 ">
        <Operator operation={"="} opClick={opClick} />
        <Operator operation={"CLR"} opClick={opClick} />
      </div>
      <div className="grid-flow-row text-center pt-4 font-size-xl font-black">
        <h3 className='text-3xl text-blue-700'>Result: {result}</h3>
      </div>

    </div>
  )
}

export default App
