import { createSlice } from "@reduxjs/toolkit";

export default userSlice = createSlice({
    name: "userLogin",
    initialState: {//giá trị khởi tạo ban đầu
        name: "",
        img: "",
        mark: 0,
        favourite: [],
        order: [],
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name;
            state.img = action.payload.img;
            state.mark = action.payload.mark;
            state.favourite = action.payload.favourite;
            state.order = action.payload.order;
        }
    }
})

