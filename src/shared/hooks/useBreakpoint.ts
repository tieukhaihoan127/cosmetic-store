import useMediaQuery from "@mui/material/useMediaQuery";

const useBreakpoint = () => {

    const isXS = useMediaQuery('(max-width: 576px)');
    
    const isMD = useMediaQuery('(max-width: 768px)');

    const isFlexing = useMediaQuery('(max-width: 408px)');

    return { isXS, isMD, isFlexing };

};

export default useBreakpoint;