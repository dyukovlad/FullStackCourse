import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

// const Hello = ({ name, age }) => {
//   const bornYear = () => new Date().getFullYear() - age

//   return (
//       <div>
//         <p>Hello {name}, you are {age} years old</p>
//         <p>So you were probably born in {bornYear()}</p>
//       </div>
//   )
// }
  
//   const App = () => {
//     const name = 'Peter'
//     const age = 35

//     return (
//       <div>
//         <h1>Greetings</h1>
//         <Hello name="George" age={21}/>
//         <Hello name={name} age={age} />



//       </div>
//     )
//   }

// ReactDOM.render(<App />, document.getElementById('root'));

// const Display = ({ counter }) => <div>{counter}</div>

// const Button = ({ onClick, text }) => (
//   <button onClick={onClick}>
//     {text}
//   </button>
// )

// const App = () => {
//   const [ counter, setCounter ] = useState(0)
//   const setToValue = (value) => setCounter(value)


//   return (
//     <div>
//       <Display counter={counter}/>
//       <Button
//         onClick={() => setToValue(counter + 1)}
//         text='plus'
//       />
//       <Button
//         onClick={() => setToValue(counter - 1)}
//         text='minus'
//       />
//       <Button
//         onClick={() => setToValue(0)}
//         text='zero'
//       />
//     </div>
//   )
// }
// ***********************************************
// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }

//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const  Button = ({ onClick, text}) => (
//   <button onClick={onClick}>
//     {text}
//   </button>
// )

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       <div>
//         {left}
//         <Button onClick={handleLeftClick} text='left' />
//         <Button onClick={handleRightClick} text='right' />
//         {right}
//         <History allClicks={allClicks} />
//       </div>
//     </div>
//   )
// }
// ***********************************************
const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Display = (props) => <div>{props.value}</div>

const App = (props) => {
  const [value, setValue] = useState(20)

  useEffect(() => {
    // Обновляем заголовок документа, используя API браузера
    document.title = `Вы нажали ${value} раз`;
  });

  const setToValue = (newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value}></Display>
      <Button handleClick={() => setToValue(1000)} text="thousand"></Button>
      <Button handleClick={() => setToValue(0)} text="reset"></Button>
      <Button handleClick={() => setToValue(value + 1)} text="increment"></Button>
    </div>
  )
}
ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
