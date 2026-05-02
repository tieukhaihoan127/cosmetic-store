import useOrder from '../hooks/useOrder';

const TrackingOrderDetailInformation = () => {

    const { handleOpenDeleteDialog, handleOpenBuyAgainDialog } = useOrder();

    return (
        <div className='flex items-center justify-between mt-[20px] flex-wrap'>
            <div>
                <div className='text-[30px] leading-[34px] font-semibold mb-[20px]'>
                    Đơn hàng #BW02ICYQ đã đặt thành công!
                </div>
                <div className='leading-1.5 mb-[10px] text-[14px]'>
                    Giao hàng dự kiến: 04/09/2026 - 04/12/2026
                </div>
                <div className='text-[#c73130] text-[12px] leading-[20px]'>
                    Tuyệt đối không chuyển khoản cho shipper trước khi nhận hàng.
                </div>
            </div>
            <div className='flex items-center gap-[8px]'>
                <div onClick={handleOpenBuyAgainDialog} className='rounded-[38px] border-black border-1 py-[8px] px-[15px] text-[14px] cursor-pointer [@media(max-width:906px)]:mt-[15px]'>
                    Mua lại
                </div>
                <div onClick={handleOpenDeleteDialog} className='rounded-[38px] border-black border-1 py-[8px] px-[15px] text-[14px] cursor-pointer [@media(max-width:906px)]:mt-[15px]'>
                    Hủy
                </div>
            </div>
        </div>
    );
};

export default TrackingOrderDetailInformation;