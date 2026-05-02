import { useState } from 'react'
import NavigateBreadcrumb from '../../shared/components/common/Breadcrumb/NavigateBreadcrumb';
import SelectShipmentRadio from '../../shared/components/ui/Radio/SelectShipmentRadio';
import SelectMethodPaymentRadio from '../../shared/components/ui/Radio/SelectMethodPaymentRadio';
import ToggleButtonYesNo from '../../shared/components/ui/Button/ToggleButtonYesNo';
import CommonTextfield from '../../shared/components/common/Textfield/CommonTextfield';
import PhoneTextfield from '../../shared/components/common/Textfield/PhoneTextfield';
import { CheckoutInformationGuest, CheckoutInformationUser, OrderCheckout, OrderDrawer, OrderMobileAppbar } from '../../features/order';

const CheckoutPage = () => {

    const [note, setNote] = useState(false);

    const [exported, setExported] = useState(false);

    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className='max-w-[1220px] mx-auto mt-[15px] px-[5%]'>
            <NavigateBreadcrumb mainCategory='Trang chủ' subCategory='Thanh toán' />
            <div className='font-bold text-[24px] leading-[26px] my-[10px]'>
                Thông tin thanh toán
            </div>
            <div className='grid grid-cols-12 gap-[20px] mt-[25px] [@media(max-width:800px)]:block'>
                <div className='col-span-8 [@media(max-width:992px)]:col-span-7'>
                    <div>
                        {isLogin ? (
                            <CheckoutInformationUser />
                        ) : (
                            <CheckoutInformationGuest />
                        )}
                        <div className='leading-[26px] text-[18px] font-bold mb-[10px] mt-[25px]'>
                            Phương thức thanh toán
                        </div>
                        <SelectMethodPaymentRadio />
                        <div className='leading-[26px] text-[18px] font-bold mb-[10px] mt-[30px]'>
                            Phương thức vận chuyển
                        </div>
                        <SelectShipmentRadio />
                        <div className='leading-[26px] text-[18px] font-bold mb-[10px] mt-[30px]'>
                            HSV Loyalty Point
                        </div>
                        <div className='p-[15px] text-[14px] leading-1.5715 border-1 border-[#dfdfdf] rounded-[5px]'>
                            <span className='underline semibold pr-[3px] cursor-pointer'>Đăng nhập</span> để dùng điểm tích lũy của bạn
                        </div>
                        <div className='mt-[20px] flex items-center justify-between'>
                            <div className='leading-[26px] text-[18px] font-bold'>Ghi chú</div>
                            <ToggleButtonYesNo value={note} setValue={setNote} />
                        </div>
                        {note == true &&
                            <textarea
                                className='mt-[15px] h-[50px] rounded-[5px] w-full border-1 border-[#d9d9d9] p-[11px] text-[14px] 
                                focus:outline-none focus:border-[#bf585b] focus:shadow-[0_0_0_2px_rgb(234,199,200)] 
                                hover:border-[#bf585b]
                                transition-all duration-200 resize-none placeholder:text-[14px] placeholder:text-[#858585]'
                                placeholder='Nếu bạn muốn để lại một số ghi chú'
                            />
                        }
                        <div className='mt-[25px] flex items-center justify-between'>
                            <div className='leading-[26px] text-[18px] font-bold'>Thông tin xuất hoá đơn</div>
                            <ToggleButtonYesNo value={exported} setValue={setExported} /> 
                        </div>
                        {exported == true &&
                            <div className='mt-[15px] grid grid-cols-12 gap-[20px] p-[15px] border-1 border-[#dfdfdf] rounded-[2px]'>
                                <div className='col-span-12'>
                                    <CommonTextfield placeholder='Tên doanh nghiệp' />
                                </div>
                                <div className='col-span-12'>
                                    <CommonTextfield placeholder='Mã số thuế' />
                                </div>
                                <div className='col-span-12'>
                                    <CommonTextfield placeholder='Địa chỉ' />
                                </div>
                                <div className='col-span-6'>
                                    <PhoneTextfield country='84' />
                                </div>
                                <div className='col-span-6'>
                                    <CommonTextfield placeholder='Email nhận hóa đơn' />
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <OrderCheckout />
                <OrderMobileAppbar />
            </div>
            <OrderDrawer />
        </div>
    );
};

export default CheckoutPage;