import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
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
        },
        remove: (state) => {
            state.name = "";
            state.img = "";
            state.mark = 0;
            state.favourite = [];
            state.order = [];
        },
    }
})

export const { update,remove } = userSlice.actions;
export default userSlice.reducer;

