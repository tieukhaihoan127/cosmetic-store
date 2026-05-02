import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../shared/store/hook";
import { useState } from "react";
import { closePreviewOrderDrawer, openPreviewOrderDrawer } from "../store/order.slice";

const usePreviewOrder = () => {

    const [expanded, setExpanded] = useState(false);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const previewProducts = useAppSelector((state) => state.orderDialog.isOpenPreviewOrder);

    const handleCheckout = () => {
        navigate('/check-out');
    };

    const handleChangeExpanded = () => {
        setExpanded((prev) => !prev);
    };

    const handleOpenPreviewOrderDrawer = () => {
        dispatch(openPreviewOrderDrawer());
    };

    const handleClosePreviewOrderDrawer = () => {
        dispatch(closePreviewOrderDrawer());
    };

    return { expanded, setExpanded, previewProducts, handleCheckout, handleChangeExpanded, handleOpenPreviewOrderDrawer, handleClosePreviewOrderDrawer };

};

export default usePreviewOrder;