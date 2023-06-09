//nơi lưu trữ thông tin
import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"

export default configureStore({
  reducer: {
    userLogin: userSlice,
  }
})

