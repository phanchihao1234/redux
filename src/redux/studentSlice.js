import { createSlice } from "@reduxjs/toolkit";
import { changeAge } from "./userSlice";

const initialState = {
    student: {
        name: "Phan Chi Hao",
        math: 7,
        pro: 6.6,
        avg: 0
    },
    checked: false
}
const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {
        changeAvg(state) {
            state.student.avg = (state.student.math + state.student.pro) / 2

        },
        rechecked(state) {
            state.checked = !state.checked
        }
    }
})

export const { rechecked, changeAvg } = studentSlice.actions
export default studentSlice.reducer