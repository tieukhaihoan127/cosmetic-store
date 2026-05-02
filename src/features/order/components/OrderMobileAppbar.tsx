import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import usePreviewOrder from '../hooks/usePreviewOrder';

const OrderMobileAppbar = () => {

    const { handleOpenPreviewOrderDrawer } = usePreviewOrder();
    
    return (
        <div className='[@media(min-width:800px)]:hidden fixed bottom-0 left-0 right-0 bg-white pt-[15px] pb-[20px] shadow-[0px_0px_10px_rgba(57,105,179,0.25)]'>
            <div className='absolute -top-[16px] left-1/2 -translate-x-1/2'>
                <div onClick={handleOpenPreviewOrderDrawer} className='w-[40px] h-[40px] bg-white rounded-full shadow-[0_-2px_8px_rgba(0,0,0,0.15)] flex items-center justify-center cursor-pointer'>
                    <KeyboardArrowUpIcon sx={{ fontSize: '24px' }} />
                </div>
            </div>
            <div className='flex items-center justify-between font-medium text-[14px] px-[23px]'>
                <div>Tổng giá trị đơn hàng</div>
                <div>1.471.000đ</div>
            </div>
            <div className='mt-[20px] px-[23px]'>
                <div className="text-white h-[40px] px-[20px] py-[6px] rounded-[40px] flex items-center justify-center cursor-pointer font-bold" style={{ backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" }}>
                    ĐẶT HÀNG
                </div>
                <div className='text-[12px] font-semibold text-center mt-[15px]'>
                    *Vui lòng không hủy đơn hàng khi đã thanh toán*
                </div>
            </div>
        </div>
    );
};

export default OrderMobileAppbar;