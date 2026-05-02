import { useDispatch } from "react-redux";
import useBreakpoint from "./useBreakpoint";
import { useAppSelector } from "../store/hook";
import { closeShowroomDialog, closeStoreDialog, closeTimeDialog, openShowroomDialog, openStoreDialog, openTimeDialog } from "../../features/location";

const useLocationDialog = () => {

    const dispatch = useDispatch();

    const { isXS } = useBreakpoint();

    const isOpenStore = useAppSelector((state) => state.storeDialog.isOpenStore);

    const isOpenTime = useAppSelector((state) => state.storeDialog.isOpenTime);

    const isOpenShowroom = useAppSelector((state) => state.storeDialog.isOpenShowroom);

    const isOpenMap = useAppSelector((state) => state.storeDialog.isOpenMap);

    const handleOpenStoreDialog = () => {
        dispatch(openStoreDialog());
    };

    const handleCloseStoreDialog = () => {
        dispatch(closeStoreDialog());
    };

    const handleOpenShowroomDialog = () => {
        dispatch(openShowroomDialog());
    };

    const handleCloseShowroomDialog = () => {
        dispatch(closeShowroomDialog());
    };

    const handleOpenTimeDialog = () => {
        dispatch(openTimeDialog());
    };

    const handleCloseTimeDialog = () => {
        dispatch(closeTimeDialog());
    };

    return { isXS, isOpenStore, isOpenShowroom, isOpenTime, isOpenMap, handleOpenStoreDialog, handleCloseStoreDialog, handleOpenShowroomDialog, handleCloseShowroomDialog, handleOpenTimeDialog, handleCloseTimeDialog  };

};

export default useLocationDialog;