const TrackingOrderPriceInformation = () => {
    return (
        <div className='mt-[15px]'>
            <div className='flex items-center justify-between mt-[5px] text-[14px]'>
                <div>Tạm tính</div>
                <div>0đ</div>
            </div>
            <div className='flex items-center justify-between mt-[5px] text-[14px]'>
                <div>Giảm giá</div>
                <div className='text-[#0992d0]'>0đ</div>
            </div>
            <div className='flex items-center justify-between mt-[5px] text-[14px]'>
                <div>Shipping</div>
                <div>0đ</div>
            </div>
            <div className='flex items-center justify-between mt-[5px] text-[14px]'>
                <div>Tổng</div>
                <div>106.000đ</div>
            </div>
        </div>
    );
};

export default TrackingOrderPriceInformation;