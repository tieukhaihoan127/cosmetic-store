import { createSlice } from "@reduxjs/toolkit";

const reviewDialogSlice = createSlice({
    name: 'reviewDialog',
    initialState: { isOpen: false },
    reducers: {
        openReviewDialog: (state) => { state.isOpen = true },
        closeReviewDialog: (state) => { state.isOpen = false }
    }
});

export const { openReviewDialog, closeReviewDialog } = reviewDialogSlice.actions;
export default reviewDialogSlice.reducer;