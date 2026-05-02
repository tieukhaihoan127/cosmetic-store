import LinearProgress from '@mui/material/LinearProgress';

interface ProductRatingBarProps {
    ratingNumber: number;
    ratingQuantity: number;
    total: number;
}

const ProductRatingBar = ({ ratingNumber, ratingQuantity, total } : ProductRatingBarProps) => {

    const percent = total > 0 ? (ratingQuantity / total) * 100 : 0;

    return (
        <div className="flex items-center mb-[15px]">
            <div className="mr-[20px] text-[18px]">{ratingNumber}</div>
            <LinearProgress variant="determinate" value={percent} sx={{ backgroundColor: '#DFDFDF', flex: 1, '& .MuiLinearProgress-bar': { backgroundColor: 'black' } }} className="flex-1" />
            <div className="ml-[20px] text-[16px]">({ratingQuantity})</div>
        </div>
    );
};

export default ProductRatingBar;