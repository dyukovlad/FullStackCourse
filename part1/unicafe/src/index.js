import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToValue = (newValue, SetVal) => {
    SetVal(newValue)
  }

  return (
    <div>
      <h1>give feedback</h1>
        <div>
            <Button text="good" handleClick={() => setToValue(good + 1, setGood)}></Button>
            <Button text="neutral" handleClick={() => setToValue(neutral + 1, setNeutral)}></Button>
            <Button text="bad" handleClick={() => setToValue(bad + 1, setBad)}></Button>
        </div>
      <h1>statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)