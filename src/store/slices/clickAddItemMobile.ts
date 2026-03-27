import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ClickAddItemMobileProps {
    isOpen: boolean;
    method: string
}

const initialState : ClickAddItemMobileProps = {
    isOpen: false,
    method: ''
}

const clickAddItemMobileSlice = createSlice({
    name: 'clickAddItemMobile',
    initialState,
    reducers: {
        openDrawer: (state, action: PayloadAction<string>) => {
            state.isOpen = true
            state.method = action.payload
        },
        closeDrawer: (state) => {
            state.isOpen = false
            state.method = ''
        }
    }
});

export const { openDrawer, closeDrawer } = clickAddItemMobileSlice.actions;
export default clickAddItemMobileSlice.reducer;