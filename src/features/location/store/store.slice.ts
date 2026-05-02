import { createSlice } from "@reduxjs/toolkit";

interface StoreSliceProps {
    isOpenStore: boolean;
    isOpenShowroom: boolean;
    isOpenTime: boolean;
    isOpenMap: boolean;
};

const initialState : StoreSliceProps = {
    isOpenStore: false,
    isOpenShowroom: false,
    isOpenTime: false,
    isOpenMap: false
};

const storeDialogSlice = createSlice({
    name: 'storeDialog',
    initialState,
    reducers: {
        openStoreDialog: (state) => { state.isOpenStore = true },
        closeStoreDialog: (state) => { state.isOpenStore = false },
        openShowroomDialog: (state) => { state.isOpenShowroom = true },
        closeShowroomDialog: (state) => { state.isOpenShowroom = false },
        openTimeDialog: (state) => { state.isOpenTime = true },
        closeTimeDialog: (state) => { state.isOpenTime = false },
        openMapDialog: (state) => { state.isOpenMap = true },
        closeMapDialog: (state) => { state.isOpenMap = false }
    }
});

export const { openStoreDialog, closeStoreDialog, openShowroomDialog, closeShowroomDialog, openTimeDialog, closeTimeDialog, openMapDialog, closeMapDialog } = storeDialogSlice.actions;
export default storeDialogSlice.reducer;