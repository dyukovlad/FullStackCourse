import React from 'react'

const Total = ({parts}) => {

    let exercises_array = new Array(parts.length)

    parts.forEach((element,index) => {
        exercises_array[index] = element.exercises
    });

    let total = exercises_array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    })

    return (
        <div>
            <strong>total of {total} exercises</strong>
        </div>
    )
}

export default Total