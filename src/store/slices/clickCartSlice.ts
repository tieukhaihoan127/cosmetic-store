import { createSlice } from "@reduxjs/toolkit"

const cartDrawerSlice = createSlice({
    name: 'cartDrawer',
    initialState: { isOpen: false },
    reducers: {
        openCartDrawer: (state) => { state.isOpen = true },
        closeCartDrawer: (state) => { state.isOpen = false }
    }
})

export const { openCartDrawer, closeCartDrawer } = cartDrawerSlice.actions
export default cartDrawerSlice.reducer