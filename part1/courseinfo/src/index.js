import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
    return (
        <div>
            <p>{props.course}</p>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
           <Part {props}/>
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>{props.exercises1}</p>
            <p>{props.exercises2}</p>
            <p>{props.exercises3}</p>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
           <p>{props}</p>
        </div>
    )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))