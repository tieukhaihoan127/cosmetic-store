import { createSlice } from "@reduxjs/toolkit"

const wishlistDrawerSlice = createSlice({
    name: 'wishlistDrawer',
    initialState: { isOpen: false },
    reducers: {
        openWishlistDrawer: (state) => { state.isOpen = true },
        closeWishlistDrawer: (state) => { state.isOpen = false }
    }
})

export const { openWishlistDrawer, closeWishlistDrawer } = wishlistDrawerSlice.actions
export default wishlistDrawerSlice.reducer