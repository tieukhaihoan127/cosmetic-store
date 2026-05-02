import { createSlice } from "@reduxjs/toolkit";

interface FilterSliceProps {
    isOpenDrawer: boolean;
    isOpenFloatingDrawer: boolean
};

const initialState : FilterSliceProps = {
    isOpenDrawer: false,
    isOpenFloatingDrawer: false
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        openDrawer: (state) => { state.isOpenDrawer = true },
        closeDrawer: (state) => { state.isOpenDrawer = false },
        openFloatingDrawer: (state) => { state.isOpenFloatingDrawer = true },
        closeFloatingDrawer: (state) => { state.isOpenFloatingDrawer = false },
    }
});

export const { openDrawer, closeDrawer, openFloatingDrawer, closeFloatingDrawer } = filterSlice.actions;
export default filterSlice.reducer;