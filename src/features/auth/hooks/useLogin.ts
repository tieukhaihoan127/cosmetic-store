import { useAppDispatch, useAppSelector } from "../../../shared/store/hook";
import { useEffect, useState } from "react";
import { closeLoginDialog } from "../store/login.slice";
import useBreakpoint from "../../../shared/hooks/useBreakpoint";

const useLogin = () => {

    const dispatch = useAppDispatch();

    const isOpenLogin = useAppSelector((state) => state.loginDialog.isOpen);

    const { isXS } = useBreakpoint();

    const [authenticationStep, setAuthenticationStep] = useState<'login' | 'otp'>('login');

    const [second, setSecond] = useState(10);

    const [resend, setResend] = useState(false);

    useEffect(() => {

        if (authenticationStep !== 'otp') return

        if (second <= 0) {
            setResend(true);
            return;
        }

        const timer = setTimeout(() => {
            setSecond(prev => prev - 1);
        }, 1000);

        return () => clearTimeout(timer);

    }, [second, authenticationStep]);

    const handleResend = () => {
        setSecond(10);
        setResend(false);
        setAuthenticationStep('otp');
    }

    const handleClose = () => {
        setAuthenticationStep('login');
        dispatch(closeLoginDialog());
    }

    return {
        isOpenLogin,
        isXS,
        authenticationStep,
        setAuthenticationStep,
        second,
        resend,
        handleResend,
        handleClose,
    };

};

export default useLogin;