import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../shared/store/hook";
import { closeAddDialog, closeChangeDialog, closeEditDialog, closeEditProfileDialog, openAddDialog, openChangeDialog, openEditDialog, openEditProfileDialog } from "../store/profile.slice";

const useProfileDialog = () => {

    const dispatch = useAppDispatch();

    const isOpenAdd = useAppSelector((state) => state.profileDialog.isOpenAdd);

    const isOpenEdit = useAppSelector((state) => state.profileDialog.isOpenEdit);

    const isOpenEditProfile = useAppSelector((state) => state.profileDialog.isOpenEditProfile);

    const isOpenChange = useAppSelector((state) => state.profileDialog.isOpenChange);

    const [selected, setSelected] = useState(1);

    const handleOpenAdd = () => {
        dispatch(openAddDialog());
    };

    const handleCloseAdd = () => {
        dispatch(closeAddDialog());
    };

    const handleOpenEdit = () => {
        dispatch(openEditDialog());
    };

    const handleCloseEdit = () => {
        dispatch(closeEditDialog());
    };

    const handleOpenChange = () => {
        dispatch(openChangeDialog());
    };

    const handleCloseChange = () => {
        dispatch(closeChangeDialog());
    };

    const handleOpenEditProfile = () => {
        dispatch(openEditProfileDialog());
    };

    const handleCloseEditProfile = () => {
        dispatch(closeEditProfileDialog());
    };

    return { isOpenAdd, isOpenEdit, isOpenChange, isOpenEditProfile, handleOpenAdd, handleCloseAdd, handleOpenEdit, handleCloseEdit, handleOpenChange, handleCloseChange, handleOpenEditProfile, handleCloseEditProfile, selected, setSelected };

};

export default useProfileDialog;