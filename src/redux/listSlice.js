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
            state.students = state.students.map(item => item === action.payload ? { ...item, name: action.payload } : item)
        }
    }
})

export const { deleteStudent, addStudent, updateStudent } = listSlice.actions
export default listSlice.reducer