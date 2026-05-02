import CheckoutProductCard from './CheckoutProductCard';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';

const OrderCheckout = () => {
    return (
        <div className='col-span-4 [@media(max-width:992px)]:col-span-5 [@media(max-width:800px)]:hidden'>
            <div className='sticky top-[23%]'>
                <div className='pt-[15px] pb-[20px] rounded-[5px] border-1 border-[#dfdfdf] shadow-[0px_0px_10px_rgba(57,105,179,0.25)]'>
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
                    <div className='px-[15px] flex items-center justify-between font-medium text-[14px] my-[10px]'>
                        <div>Giảm giá</div>
                        <div className='text-[#0992d0]'>0đ</div>
                    </div>
                    <div className='px-[15px] flex items-center justify-between font-medium text-[14px]'>
                        <div>Phí vận chuyển</div>
                        <div>0đ</div>
                    </div>
                    <div className='px-[15px]'>
                        <Divider sx={{ marginY: '15px' }} />
                    </div>
                    <div className='px-[15px] flex items-center justify-between font-medium text-[14px]'>
                        <div>Tổng (đã bao gồm VAT)</div>
                        <div>1.471.000đ</div>
                    </div>
                    <div className='px-[15px] mt-[20px]'>
                        <div className="text-white h-[40px] px-[20px] py-[6px] rounded-[40px] flex items-center justify-center cursor-pointer font-bold" style={{ backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" }}>
                            TIẾP TỤC
                        </div>
                        <div className='text-[12px] font-semibold text-center mt-[15px]'>
                            *Vui lòng không hủy đơn hàng khi đã thanh toán*
                        </div>
                    </div>
                </div>
                <div className='px-[18px] py-[16px] border-1 border-[#dfdfdf] rounded-[2px] mt-[20px]'>
                    <div className='mb-[10px] text-[14px]'>
                        Coupon & Voucher
                    </div>
                    <div className='flex items-center'>
                        <TextField
                            variant="outlined"
                            placeholder="NHẬP MÃ GIẢM GIÁ"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    padding: '11px',
                                    borderTopLeftRadius: '5px',
                                    borderBottomLeftRadius: '5px',
                                    borderTopRightRadius: '0px',
                                    borderBottomRightRadius: '0px',
                                    cursor: 'pointer',
                                    '& fieldset': {
                                        border: '1px solid #b7b6c2',
                                        transition: 'all 200ms ease-in-out',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#bf585b',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#bf585b',
                                        boxShadow: '0 0 0 2px rgb(234,199,200)',
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    padding: '0px !important',
                                },
                                '& .MuiAutocomplete-input': {
                                    padding: '0px !important',
                                    cursor: 'pointer',
                                },
                                '& input::placeholder': {
                                    fontSize: '14px',
                                    color: '#858585',
                                    opacity: 1,
                                },
                            }}
                        />
                        <div className='whitespace-nowrap bg-black text-[14px] px-[15px] py-[12px] rounded-r-[5px] cursor-pointer text-white transition-all ease-in-out duration-300 hover:bg-[#333333]'>
                            Áp dụng
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCheckout;