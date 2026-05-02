import { createSlice } from "@reduxjs/toolkit";

interface OrderSliceProps {
    isOpenDelete: boolean;
    isOpenBuyAgain: boolean;
    isOpenPreviewOrder: boolean
};

const initialState : OrderSliceProps = {
    isOpenDelete: false,
    isOpenBuyAgain: false,
    isOpenPreviewOrder: false
};

const orderDialogSlice = createSlice({
    name: 'orderDialog',
    initialState,
    reducers: {
        openDeleteDialog: (state) => { state.isOpenDelete = true },
        closeDeleteDialog: (state) => { state.isOpenDelete = false },
        openBuyAgainDialog: (state) => { state.isOpenBuyAgain = true },
        closeBuyAgainDialog: (state) => { state.isOpenBuyAgain = false },
        openPreviewOrderDrawer: (state) => { state.isOpenPreviewOrder = true },
        closePreviewOrderDrawer: (state) => { state.isOpenPreviewOrder = false }
    }
});

export const { openDeleteDialog, closeDeleteDialog, openBuyAgainDialog, closeBuyAgainDialog, openPreviewOrderDrawer, closePreviewOrderDrawer } = orderDialogSlice.actions;
export default orderDialogSlice.reducer;