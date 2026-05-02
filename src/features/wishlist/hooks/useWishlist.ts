import useBreakpoint from "../../../shared/hooks/useBreakpoint";
import { useAppDispatch, useAppSelector } from "../../../shared/store/hook";
import { closeWishlistDrawer } from "../store/wishlist.slice";

const useWishlist = () => {

    const dispatch = useAppDispatch();

    const isOpenWishlist = useAppSelector((state) => state.wishlistDrawer.isOpen);

    const { isXS } = useBreakpoint();

    const handleClose = () => {
        dispatch(closeWishlistDrawer());
    }

    return { isOpenWishlist, isXS, handleClose };

};

export default useWishlist;