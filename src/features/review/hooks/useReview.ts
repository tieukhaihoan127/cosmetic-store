import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../shared/store/hook";
import { closeReviewDialog, openReviewDialog } from "../store/review.slice";

const useReview = () => {

    const dispatch = useAppDispatch();
    
    const isOpen = useAppSelector((state) => state.reviewDialog.isOpen);
    
    const [helpful, setHelpful] = useState(false);

    const handleOpenReviewDialog = () => {
        dispatch(openReviewDialog());
    };

    const handleCloseReviewDialog = () => {
        dispatch(closeReviewDialog());
    };

    return { isOpen, helpful, setHelpful, handleOpenReviewDialog, handleCloseReviewDialog };

};

export default useReview;