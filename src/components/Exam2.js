import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeAge, changeName } from '../redux/userSlice'

export default function Exam2() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    const le = useSelector(state => state.user)
    return (
        <div>
            <hr />
            <h1>user name: {user.name}</h1>
            <h1>user age: {user.age}</h1>
            <h1>{le.length}</h1>
            <button onClick={() => dispatch(changeName("ehe"))}>changeName</button>
            <button onClick={() => dispatch(changeAge("18"))}>changAge</button>
        </div>
    )
}
