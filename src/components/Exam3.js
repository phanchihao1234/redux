import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeAvg, rechecked } from '../redux/studentSlice'


export default function Exam3() {
    const student = useSelector(state => state.student.student)
    const checked = useSelector(state => state.student.checked)
    const dispatch = useDispatch()
    return (
        <div>
            <hr />
            <h1>name: {student.name}</h1>
            <h1>math: {student.math}</h1>
            <h1>pro: {student.pro}</h1>
            <h1>avg: {student.avg}</h1>
            <h1>Checked: {checked ? "true" : "false"}</h1>
            <button onClick={() => dispatch(rechecked())}> rechecked</button>
            <button onClick={() => dispatch(changeAvg())}> AVG</button>
        </div>
    )
}
