import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addStudent, deleteStudent } from '../redux/listSlice'
import Add from './Add'
export default function ToDoList() {
    const students = useSelector(state => state.students.students)
    const dispacth = useDispatch()
    const [flag, setFlag] = useState("")
    // const [text, setText] = useState("")
    console.log("render toDO list")
    const handle_add = (text) => {
        dispacth(addStudent(text))
    }
    const filterList = (list, flag) => {
        if (flag == "Check") {
            return list.filter(listStu => listStu.checked)
        }
        else if (flag == "NoCheck") {
            return list.filter(listStu => !listStu.checked)
        } else {
            return list
        }
    }
    return (
        <div>
            <Add handle_add={handle_add} />
            {
                filterList(students, flag).map((item, index) => (
                    <div>
                        {item.name}
                        <button onClick={() => dispacth(deleteStudent(item.id))}>delele</button>
                    </div>
                ))
            }
            <button className='btn-success mx-1' onClick={() => setFlag("Check")}>filter check</button>
            <button className='btn-success mx-1' onClick={() => setFlag("NoCheck")}>filter no check</button>
            <button className='btn-success mx-1' onClick={() => setFlag("")}>Clear</button>
        </div>
    )
}
