import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../shared/store/hook";
import useBreakpoint from "../../../shared/hooks/useBreakpoint";
import { closeCartDrawer } from "../store/cart.slice";

const useCart = () => {

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const isOpenCart = useAppSelector((state) => state.cartDrawer.isOpen);

    const { isXS } = useBreakpoint();

    const handlePayment = () => {
        navigate('/preview-order');
        dispatch(closeCartDrawer());
    };

    const handleClose = () => {
        dispatch(closeCartDrawer());
    };

    return { isOpenCart, isXS, handlePayment, handleClose };

};

export default useCart;