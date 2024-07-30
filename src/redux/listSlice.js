import { createSlice } from "@reduxjs/toolkit";
import { changeAge } from "./userSlice";

const initialState = {
    students: [
        { id: 1, name: "hao", checked: true },
        { id: 2, name: "van", checked: false },
        { id: 3, name: "nhan", checked: true },
    ],
    checkedAll: false
}
const listSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        addStudent(state, action) {
            state.students = [...state.students, { id: 4, name: action.payload, checked: true }]
        },
        deleteStudent(state, action) {
            state.students = state.students.filter(item => item.id !== action.payload)
        },
        updateStudent(state, action) {
            state.students = state.students.map(item => item.id === action.payload.id ? { ...item, name: action.payload.name, checked: true } : item)
        },
        rechecked(state,action){
            state.students=state.students.map(item => item.id === action.payload.id ? { ...item, checked: !item.checked } : item)
        },
        checkedAll(state,action){
            state.students=state.students.map(item=>item.checked!==true?{...item, checked: !item.checked }:item)
            // ({...item, checked: !item.checked })
            // [...state.students, {checked: !state.students.checked }]
        }
    }
})

export const { deleteStudent, addStudent, updateStudent, rechecked,checkedAll } = listSlice.actions
export default listSlice.reducer