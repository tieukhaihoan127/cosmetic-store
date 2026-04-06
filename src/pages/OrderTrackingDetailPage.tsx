import { Link } from 'react-router-dom'
import OrderStatusStepper from '../components/ui/Stepper/OrderStatusStepper'
import Divider from '@mui/material/Divider'

const OrderTrackingDetailPage = () => {
    return (
        <div className='mt-[15px]'>
            <div className='w-[80%] mx-auto [@media(max-width:576px)]:w-[90%]'>
                <div className="flex items-center text-[#797979] gap-2 leading-relaxed">
                    <Link to="/" className="text-[12px]">
                        Trang chủ
                    </Link>
                    <div className="text-[14px]">{">"}</div>
                    <Link to="/" className="text-[12px]">
                        Đơn hàng
                    </Link>
                </div>
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
                    <div className='rounded-[38px] border-black border-1 py-[8px] px-[15px] text-[14px] cursor-pointer [@media(max-width:906px)]:mt-[15px]'>
                        Mua lại
                    </div>
                </div>
            </div>
            <div className='w-[85%] mx-auto [@media(max-width:576px)]:w-[90%]'>
                <OrderStatusStepper />
            </div>
            <div className='w-[80%] mx-auto [@media(max-width:576px)]:w-[90%]'>
                <div className='h-full border-1 border-[#dfdfdf] rounded-[5px] p-[20px] min-h-[140px]'>
                    <div className='text-[16px] font-bold leading-[23px] mb-[10px]'>
                        Đơn hàng
                    </div>
                    <div>
                        <div className='my-[24px] flex items-center justify-between'>
                            <div className='flex items-center'>
                                <img src="https://image.hsv-tech.io/65x65/bbx/common/4f4c8aba-1e4f-43ee-8acc-13ee6e192e37.webp" alt="" className='h-[80px] w-[65px] min-w-[65px]'/>
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
                        <div className='my-[24px] flex items-center justify-between'>
                            <div className='flex items-center'>
                                <img src="https://image.hsv-tech.io/65x65/bbx/common/4f4c8aba-1e4f-43ee-8acc-13ee6e192e37.webp" alt="" className='h-[80px] w-[65px] min-w-[65px]'/>
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
                    </div>
                    <Divider />
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
                </div>
            </div>
        </div>
    )
}

export default OrderTrackingDetailPage