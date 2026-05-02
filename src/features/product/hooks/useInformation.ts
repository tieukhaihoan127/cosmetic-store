import { useState } from "react";
import useBreakpoint from "../../../shared/hooks/useBreakpoint";
import { useAppDispatch, useAppSelector } from "../../../shared/store/hook";
import { changeDeliveryMethod, closeDrawer, openDrawer } from "../store/product.slice";
import { openStoreDialog } from "../../location";

const useInformation = () => {

    const [num, setNum] = useState(1);
    
    const [isSelected, setIsSelected] = useState(false);

    const { isXS, isMD, isFlexing } = useBreakpoint();

    const dispatch = useAppDispatch();

    const method = useAppSelector((state) => state.productDrawer.method);
    
    const addItemButton = useAppSelector((state) => state.productDrawer.isOpen);

    const value = useAppSelector((state) => state.productDrawer.value);

    const handleOpenMethod = (method : string) => {
        dispatch(openDrawer(method));
    };

    const handleCloseMethod = () => {
        dispatch(closeDrawer());
    };

    const handleChangeVaLue = (value : string) => {
        dispatch(changeDeliveryMethod(value));
    };

    const handleOpenStoreDialog = () => {
        dispatch(openStoreDialog());
    };

    return { isXS, isMD, isFlexing, num, isSelected, method, addItemButton, value, handleOpenMethod, handleCloseMethod, handleChangeVaLue, handleOpenStoreDialog };

};

export default useInformation;