import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SwapCallsOutlinedIcon from '@mui/icons-material/SwapCallsOutlined';

const ProductDetailAttribute = () => {
    return (
        <div className="mt-[30px] grid grid-cols-2 gap-[10px] max-md:grid-cols-1 max-md:gap-[15px] max-md:mb-[15px]">
            <div className="flex items-center">
                <StarBorderOutlinedIcon sx={{ fontSize: '24px', marginRight: '10px' }} />
                <div className="text-[14px]">Nhận <b>HSV Point</b> cho mỗi lần mua</div>
            </div>
            <div className="flex items-center">
                <VerifiedUserOutlinedIcon sx={{ fontSize: '22px', marginRight: '10px' }} />
                <div className="text-[14px]">Cam kết <b>hàng chính hãng</b></div>
            </div>
            <div className="flex items-center">
                <LocalShippingOutlinedIcon sx={{ fontSize: '22px', marginRight: '10px' }} />
                <div className="text-[14px]"><b>Miễn phí giao hàng</b> 24h</div>
            </div>
            <div className="flex items-center">
                <SwapCallsOutlinedIcon sx={{ fontSize: '22px', marginRight: '10px' }} />
                <div className="text-[14px]">Đổi/trả hàng trong <b>7 ngày</b></div>
            </div>
        </div>
    );
};

export default ProductDetailAttribute;