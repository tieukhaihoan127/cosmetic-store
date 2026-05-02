import Divider from '@mui/material/Divider';
import CheckoutProductCard from './CheckoutProductCard';
import usePreviewOrder from '../hooks/usePreviewOrder';

const PreviewProductCheckout = () => {

    const { handleCheckout } = usePreviewOrder();

    return (
        <div className='col-span-4 [@media(max-width:992px)]:col-span-5 [@media(max-width:800px)]:hidden'>
            <div className='pt-[15px] pb-[20px] rounded-[5px] border-1 border-[#dfdfdf] shadow-[0px_0px_10px_rgba(57,105,179,0.25)] sticky top-[23%]'>
                <div className='text-[14px] font-bold px-[15px]'>
                    Đơn hàng
                </div>
                <div className='px-[15px] max-h-[260px] overflow-y-auto custom-scrollbar'>
                    <CheckoutProductCard />
                    <CheckoutProductCard />
                    <CheckoutProductCard />
                    <CheckoutProductCard />
                </div>
                <Divider sx={{ marginY: '15px' }} />
                <div className='px-[15px] flex items-center justify-between font-medium text-[14px]'>
                    <div>Tổng giá trị đơn hàng</div>
                    <div>1.471.000đ</div>
                </div>
                <Divider sx={{ marginY: '15px' }} />
                <div className='px-[15px] font-medium text-[14px]'>
                    Mã giảm giá, voucher có thể thêm vào ở màn hình kế tiếp
                </div>
                <div className='px-[15px] mt-[20px]'>
                    <div onClick={handleCheckout} className="text-white h-[40px] px-[20px] py-[6px] rounded-[40px] flex items-center justify-center cursor-pointer font-bold" style={{ backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" }}>
                        TIẾP TỤC
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreviewProductCheckout;