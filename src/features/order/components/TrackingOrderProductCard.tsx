const TrackingOrderProductCard = () => {
    return (
        <div className='my-[24px] flex items-center justify-between'>
            <div className='flex items-center'>
                <img src="https://image.hsv-tech.io/65x65/bbx/common/4f4c8aba-1e4f-43ee-8acc-13ee6e192e37.webp" alt="" className='h-[80px] w-[65px] min-w-[65px]' />
                <div className='flex-1 ml-[15px]'>
                    <div className='text-[14px] leading-[20px] underline'>
                        Chì Chân Mày Peripera Speedy Skinny Brow 0.05G
                    </div>
                    <div className='opacity-50 text-[12px] my-[3px]'>
                        02 dark brown
                    </div>
                    <div className='flex items-center gap-[20px]'>
                        <div className='text-[14px] leading-1.5715'>
                            SKU: 26320022
                        </div>
                        <div className='text-[14px] leading-1.5715'>
                            x1
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-1 font-bold text-[14px] text-right'>
                129.000đ
            </div>
        </div>
    );
};

export default TrackingOrderProductCard;