import React from 'react'
import Course from './components/Course'

const App = ({ course }) => {
    // console.log(course.parts);
    const rows = () => course.parts.map(parts =>
        <Course  key={parts.id} course={parts} />
    )

    const summ = () => course.parts.reduce((acc, sum) => {
        return acc + sum.exercises;
    }, 0)

  return (
    <div>
      <ul>
        {rows()}
        <p><strong>total of {summ()} exercises</strong></p>
      </ul>
    </div>
  )
}

export default App