import Divider from '@mui/material/Divider';
import Rating from '@mui/material/Rating';

const UserReview = () => {
    return (
        <div className="p-0 mb-[15px]">
            <div className="text-14px">
                eopihanta
            </div>
            <div className="flex items-center gap-[20px]">
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly sx={{ color: 'black', fontSize: '14px', gap: '8px' }} />
                <div className="text-[14px] leading-[20px] text-[#828282] ">
                    10/03/2026 22:08
                </div>
            </div>
            <div className="my-[10px] leading-[23px] text-[14px]">
                Mau trôi lớp bóng, còn lại bao lì , màu hơi trầm
            </div>
            <div className="pl-[44px] mt-[20px] mb-[30px]">
                <div className="flex items-center gap-[20px] text-[14px]">
                    <div className="text-[#b0100f] font-semibold">Beauty Box Vietnam</div>
                    <div>10/20/2025 04:18</div>
                </div>
                <div className="text-[12px] mt-[5px] mb-[15px]">
                    Cảm ơn bạn đã đánh giá sản phẩm của AMUSE 5 sao! Chúng tôi rất vui vì bạn đã có trải nghiệm tốt với sản phẩm. Ý kiến của bạn chính là động lực giúp AMUSE tiếp tục cố gắng và phục vụ khách hàng, đem đến những sản phẩm tốt nhất. Hy vọng bạn sẽ tiếp tục yêu thích và sử dụng sản phẩm của AMUSE
                </div>
            </div>
            <Divider sx={{ marginTop: '20px' }} />
        </div>
    );
};

export default UserReview;