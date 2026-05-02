import { useDispatch } from "react-redux";
import useBreakpoint from "../../../shared/hooks/useBreakpoint";
import { useAppSelector } from "../../../shared/store/hook";
import { closeMapDialog, openMapDialog } from "../store/store.slice";

const useDialog = () => {
    const dispatch = useDispatch();

    const { isXS } = useBreakpoint();

    const isOpenMap = useAppSelector((state) => state.storeDialog.isOpenMap);

    const handleOpenMapDialog = () => {
        dispatch(openMapDialog());
    };

    const handleCloseMapDialog = () => {
        dispatch(closeMapDialog());
    };

    return { isXS, isOpenMap, handleOpenMapDialog, handleCloseMapDialog };
};

export default useDialog;