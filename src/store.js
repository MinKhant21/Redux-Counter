import counterSlice from "./features/counter/counterSlice";

const { configureStore } = require("@reduxjs/toolkit");
export const store = configureStore({
    reducer:{counterSlice}
})