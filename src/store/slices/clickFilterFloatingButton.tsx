import { createSlice } from "@reduxjs/toolkit";

interface ClickFilterFloatingButtonProps {
    isOpen: boolean;
}

const initialState : ClickFilterFloatingButtonProps = {
    isOpen: false
}

const clickFilterFloatingButtonSlice = createSlice({
    name: 'clickFilterFloatingButton',
    initialState,
    reducers: {
        openDrawer: (state) => { state.isOpen = true },
        closeDrawer: (state) => { state.isOpen = false }
    }
});

export const { openDrawer, closeDrawer } = clickFilterFloatingButtonSlice.actions;
export default clickFilterFloatingButtonSlice.reducer;