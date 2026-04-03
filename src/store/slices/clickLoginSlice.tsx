import { createSlice } from "@reduxjs/toolkit"

const loginSlice = createSlice({
    name: 'loginDialog',
    initialState: { isOpen: false },
    reducers: {
        openLoginDialog: (state) => { state.isOpen = true },
        closeLoginDialog: (state) => { state.isOpen = false }
    }
})

export const { openLoginDialog, closeLoginDialog } = loginSlice.actions
export default loginSlice.reducer