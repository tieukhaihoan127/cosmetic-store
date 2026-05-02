import { useState } from "react";
import { useAppDispatch } from "../../../shared/store/hook";
import { openDrawer } from "../store/filter.slice";
import useBreakpoint from "../../../shared/hooks/useBreakpoint";

const FILTER_OPTIONS = [
    "Tất cả",
    "Giá tăng dần",
    "Giá giảm dần",
    "% giảm"
];

const useHeadFilter = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedFilter, setSelectedFilter] = useState(FILTER_OPTIONS[0]);

    const dispatch = useAppDispatch();

    const { isMD } = useBreakpoint();

    const open = Boolean(anchorEl) && !isMD;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (isMD) {
            dispatch(openDrawer());
        }
        else {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelect = (value: string) => {
        setSelectedFilter(value);
        handleClose();
    };

    return { FILTER_OPTIONS, anchorEl, selectedFilter, open, handleClick, handleClose, handleSelect };
};

export default useHeadFilter;