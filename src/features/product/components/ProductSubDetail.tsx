import Divider from '@mui/material/Divider';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ProductSubDetail = () => {
    return (
        <div className="flex mb-[5px] items-center">
            <div className='flex items-center gap-[5px]'>
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly sx={{ color: 'black', fontSize: '14px', gap: '6px' }} />
                <div className='text-[12px] underline ml-1'>(39)</div>
            </div>
            <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{
                    mx: "8px",
                    height: "15px",
                    alignSelf: "center",
                    display: "block",
                }}
            />
            <div className="flex gap-[10px] items-center">
                <FavoriteIcon sx={{ fontSize: 14, color: '#c73130' }} />
                <div className="text-[12px]">
                    6
                </div>
            </div>
            <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{
                    mx: "8px",
                    height: "15px",
                    alignSelf: "center",
                    display: "block",
                }}
            />
            <div className="flex">
                <div className="text-[12px] font-bold mr-1">Xuất xứ:</div>
                <div className="text-[12px]">Hàn Quốc</div>
            </div>
            <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{
                    mx: "8px",
                    height: "15px",
                    alignSelf: "center",
                    display: "block",
                }}
            />
            <div className="flex">
                <div className="text-[12px] font-bold mr-1">SKU:</div>
                <div className="text-[12px]">11112241</div>
            </div>
        </div>
    );
};

export default ProductSubDetail;