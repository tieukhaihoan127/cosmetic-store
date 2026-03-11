import { createSlice } from "@reduxjs/toolkit";

interface ClickFilterButtonProps {
    isOpen: boolean;
}

const initialState : ClickFilterButtonProps = {
    isOpen: false
}

const clickFilterButtonSlice = createSlice({
    name: 'clickFilterButton',
    initialState,
    reducers: {
        openDrawer: (state) => { state.isOpen = true },
        closeDrawer: (state) => { state.isOpen = false }
    }
});

export const { openDrawer, closeDrawer } = clickFilterButtonSlice.actions;
export default clickFilterButtonSlice.reducer;