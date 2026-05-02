import FormControlLabel from '@mui/material/FormControlLabel';
import CartCheckbox from '../../../shared/components/ui/Checkbox/CartCheckbox';
import { cities, districts } from '../../../shared/constants/address.constant';
import AddressAutocomplete from '../../../shared/components/common/Autocomplete/AddressAutocomplete';
import CommonTextfield from '../../../shared/components/common/Textfield/CommonTextfield';

const CheckoutInformationGuest = () => {
    return (
        <>
            <div className='flex items-center justify-between pb-[10px]'>
                <div className='leading-[26px] text-[18px] font-bold'>Thông tin người mua hàng</div>
                <div className='text-[#ab2328] text-[14px] leading-1.5715 hover:text-black transition duration-400 ease-in-out cursor-pointer px-[15px]'>Đăng nhập nhanh</div>
            </div>
            <div className='grid grid-cols-2 gap-[15px]'>
                <CommonTextfield placeholder='Tên' />
                <CommonTextfield placeholder='Họ' />
                <CommonTextfield placeholder='Số điện thoại' />
                <CommonTextfield placeholder='Email' />
            </div>
            <div className='leading-[26px] text-[18px] font-bold mb-[10px] mt-[25px]'>
                Thông tin nhận hàng
            </div>
            <div className='grid grid-cols-12 gap-[15px]'>
                <div className='col-span-12'>
                    <AddressAutocomplete options={cities} placeholder='Tỉnh/Thành phố' />
                </div>
                <div className='col-span-6'>
                    <AddressAutocomplete options={districts} placeholder='Quận/huyện' />
                </div>
                <div className='col-span-6'>
                    <AddressAutocomplete options={districts} placeholder='Phường/xã' />
                </div>
                <div className='col-span-12'>
                    <CommonTextfield placeholder='Tòa nhà, số nhà, tên đường' />
                </div>
                <div className='col-span-12'>
                    <CommonTextfield placeholder='Tên địa chỉ(vd: Văn phòng, Nhà, ...)' />
                </div>
                <div className='col-span-12'>
                    <FormControlLabel
                        sx={{ margin: 0 }}
                        control={<CartCheckbox />}
                        label={
                            <span style={{ fontSize: '14px', color: '#000000', paddingLeft: '8px', paddingRight: '8px' }}>
                                Tạo tài khoản với thông tin này
                            </span>
                        }
                    />
                </div>
            </div>
        </>
    );
};

export default CheckoutInformationGuest;