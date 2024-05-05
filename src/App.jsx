import { useState } from 'react';

import Button from './components/Button'
import Operator from './components/Operator'
import Display from './components/Display'
import './App.css'


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

  let [ result, setResult ] = useState(null);
  let [ input, setInput ] = useState(null);
  let [ mem, setMem ] = useState(null);
  let [ operator, setOperator ] = useState(null);

  const numberButtonClick = buttonValue => {
    if(input) {
      setInput(prevInput => (prevInput*10) + buttonValue)
    } else {
      setInput(buttonValue)
    }
  }

  const opClick = buttonValue => {
    if (buttonValue === 'CLR') {
      setResult(null);
      setInput(null);
      setMem(null);
      setOperator(null);
      return
    } else if (buttonValue === '=') {
      let answer = findCalc(mem, input, operator)
      setResult(answer)
      setMem(null)
      setInput(null)
      setOperator(null)
      return
    } else {
      setMem(input)
      setOperator(buttonValue)
      setInput(null)
    }
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
        <Button value={'()'} />
        <Button value={0} numberButtonClick={numberButtonClick} />
        <Button value={'CE'} />
        <Operator operation="/" opClick={opClick} />
      </div>
      <div className="grid-flow-row text-center p-1 pt-3 ">
        <Operator operation={"="} opClick={opClick} />
        <Operator operation={"CLR"} opClick={opClick} />
      </div>
      <Display result={result} input={input} operator={operator} mem={mem} />
    </div>
  )
}

export default App
