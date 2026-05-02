import { useTheme } from "@emotion/react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { clearHoveredCategory, setHoveredCategory } from "../store/navigation.slice";
import { openLoginDialog } from "../../features/auth";
import { openWishlistDrawer } from "../../features/wishlist";
import { openCartDrawer } from "../../features/cart";

const useHeader = () => {

    const theme = useTheme();

    const dispatch = useAppDispatch();

    const hoveredCategory = useAppSelector((state) => state.hoveredMenu.hoveredCategory);

    const handleHoverCategory = (category: string) => {
        dispatch(setHoveredCategory(category));
    };

    const handleLeaveCategory = () => {
        dispatch(clearHoveredCategory());
    };

    const handleOpenLoginDialog = () => {
        dispatch(openLoginDialog());
    };

    const handleOpenWishlistDrawer = () => {
        dispatch(openWishlistDrawer());
    };

    const handleOpenCartDrawer = () => {
        dispatch(openCartDrawer());
    };

    return { theme, hoveredCategory, handleHoverCategory, handleLeaveCategory, handleOpenLoginDialog, handleOpenWishlistDrawer, handleOpenCartDrawer };

};

export default useHeader;