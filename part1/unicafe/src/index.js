import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
)

const Statistic = ({ text, value }) => (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )

const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad
    const average = good - bad

    if (total === 0){
        return(
            <div><p>no feedback given</p></div>
        )
    }

    return(
        <div>
            <h1>statistics</h1>
            <table>
                <tbody>
                    <Statistic text="good" value ={good} />
                    <Statistic text="neutral" value ={neutral} />
                    <Statistic text="bad" value ={bad} />
                    <Statistic text="all" value ={total} />
                    <Statistic text="average" value ={average / total} />
                    <Statistic text="positive" value ={`${100 * good / total} %`} />
                </tbody>
            </table>
        </div>
    )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



//   if (total === 0) {
    
//   }

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
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)