import { configureStore } from '@reduxjs/toolkit'
import countSlice from './countSlice'
import userSlice from './userSlice'
import studentSlice from './studentSlice'
import listSlice from './listSlice'

const store = configureStore({
    reducer: {
        count: countSlice,
        user: userSlice,
        student: studentSlice,
        students: listSlice
    }
})
export default store