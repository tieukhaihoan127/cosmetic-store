import { useAppDispatch, useAppSelector } from "../../../shared/store/hook";
import { closeBuyAgainDialog, closeDeleteDialog, openBuyAgainDialog, openDeleteDialog } from "../store/order.slice";

const useOrder = () => {

    const dispatch = useAppDispatch();

    const isOpenDelete = useAppSelector((state) => state.orderDialog.isOpenDelete);

    const isOpenBuyAgain = useAppSelector((state) => state.orderDialog.isOpenBuyAgain);

    const handleOpenDeleteDialog = () => {
        dispatch(openDeleteDialog());
    };

    const handleCloseDeleteDialog = () => {
        dispatch(closeDeleteDialog());
    };

    const handleOpenBuyAgainDialog = () => {
        dispatch(openBuyAgainDialog());
    };

    const handleCloseBuyAgainDialog = () => {
        dispatch(closeBuyAgainDialog());
    };

    return { isOpenDelete, isOpenBuyAgain, handleOpenDeleteDialog, handleCloseDeleteDialog, handleOpenBuyAgainDialog, handleCloseBuyAgainDialog };
};

export default useOrder;