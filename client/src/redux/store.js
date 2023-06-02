//nơi lưu trữ thông tin
import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"

const store =  configureStore({
  reducer: {
    userLogin: userSlice,
  }
})

export default store;