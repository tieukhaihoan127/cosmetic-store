import { createSlice } from "@reduxjs/toolkit"

const previewOrderDrawerSlice = createSlice({
    name: 'previewOrderDrawer',
    initialState: { isOpen: false },
    reducers: {
        openPreviewOrderDrawer: (state) => { state.isOpen = true },
        closePreviewOrderDrawer: (state) => { state.isOpen = false }
    }
})

export const { openPreviewOrderDrawer, closePreviewOrderDrawer } = previewOrderDrawerSlice.actions
export default previewOrderDrawerSlice.reducer