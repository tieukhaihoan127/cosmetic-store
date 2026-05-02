import { createSlice } from "@reduxjs/toolkit";

interface ProfileSliceProps {
    isOpenAdd: boolean;
    isOpenEdit: boolean;
    isOpenChange: boolean;
    isOpenEditProfile: boolean;
};

const initialState : ProfileSliceProps = {
    isOpenAdd: false,
    isOpenEdit: false,
    isOpenChange: false,
    isOpenEditProfile: false
};

const profileDialogSlice = createSlice({
    name: 'orderDialog',
    initialState,
    reducers: {
        openAddDialog: (state) => { state.isOpenAdd = true },
        closeAddDialog: (state) => { state.isOpenAdd = false },
        openEditDialog: (state) => { state.isOpenEdit = true },
        closeEditDialog: (state) => { state.isOpenEdit = false },
        openChangeDialog: (state) => { state.isOpenChange = true },
        closeChangeDialog: (state) => { state.isOpenChange = false },
        openEditProfileDialog: (state) => { state.isOpenEditProfile = true },
        closeEditProfileDialog: (state) => { state.isOpenEditProfile = false },
    }
});

export const { openAddDialog, closeAddDialog, openEditDialog, closeEditDialog, openChangeDialog, closeChangeDialog, openEditProfileDialog, closeEditProfileDialog } = profileDialogSlice.actions;
export default profileDialogSlice.reducer;