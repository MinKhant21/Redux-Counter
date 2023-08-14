import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    items:[]
}
const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        increase(state, actions) {
            switch (actions.payload.type) {
                case "ADD_TO_CART":
                    state.value += 1
                    state.items.push(actions.payload.data)
                    break;
                case "REMOVE_CART":
                    state.value -= 1
                    state.items.filter(item => {
                        if (item.id != actions.payload.data.id) {
                            console.log(item)
                        }
                    })
                    break;
                default:
                    break;
            }
        }
    }
    
})

export const { increase } = cartSlice.actions
export default cartSlice.reducer