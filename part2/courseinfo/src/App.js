import React from 'react'
import Course from './components/Course'

const App = ({ course }) => {
    console.log(course.parts);

    const rows = () => course.parts.map(parts =>
        <Course  key={parts.id} course={parts} />
    )

  return (
    <div>
      <ul>
        {rows()}
      </ul>
    </div>
  )
}

export default App