import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CommonTextfield from '../../../shared/components/common/Textfield/CommonTextfield';
import PhoneTextfield from '../../../shared/components/common/Textfield/PhoneTextfield';
import FormControlLabel from '@mui/material/FormControlLabel';
import CartCheckbox from '../../../shared/components/ui/Checkbox/CartCheckbox';
import AddressAutocomplete from '../../../shared/components/common/Autocomplete/AddressAutocomplete';
import { cities, districts } from '../../../shared/constants/address.constant';
import useProfileDialog from '../hooks/useProfileDialog';

const AddAddressDialog = () => {

    const { isOpenAdd, handleCloseAdd } = useProfileDialog();

    return (
        <Dialog
            open={isOpenAdd}
            onClose={handleCloseAdd}
            maxWidth={false}
            fullWidth
            slotProps={{
                paper: {
                    sx: { borderRadius: '10px', width: '470px' }
                }
            }}
        >
            <DialogTitle sx={{ paddingX: '15px', paddingY: '24px' }}>
                <div className="flex items-center justify-between">
                    <div></div>
                    <div className="text-[24px] font-semibold">Thêm địa chỉ</div>
                    <IconButton disableRipple onClick={handleCloseAdd} sx={{ transition: '300ms ease', '&:hover': { color: 'black' } }}>
                        <CloseIcon sx={{ fontSize: '30px', }} />
                    </IconButton>
                </div>
            </DialogTitle>
            <DialogContent sx={{ p: '24px' }}>
                <div className='grid grid-cols-12 gap-[15px]'>
                    <div className='col-span-12'>
                        <CommonTextfield placeholder='Tên địa chỉ(vd: Văn phòng, Nhà, ...)' />
                    </div>
                    <div className='col-span-6'>
                        <CommonTextfield placeholder='Họ' />
                    </div>
                    <div className='col-span-6'>
                        <CommonTextfield placeholder='Tên' />
                    </div>
                    <div className='col-span-12'>
                        <CommonTextfield placeholder='Email' />
                    </div>
                    <div className='col-span-12'>
                        <PhoneTextfield country='84' />
                    </div>
                    <div className='col-span-6'>
                        <AddressAutocomplete options={cities} placeholder='Tỉnh/Thành phố' />
                    </div>
                    <div className='col-span-6'>
                        <AddressAutocomplete options={districts} placeholder='Quận/huyện' />
                    </div>
                    <div className='col-span-12'>
                        <AddressAutocomplete options={districts} placeholder='Phường/xã' />
                    </div>
                    <div className='col-span-12 my-[5px]'>
                        <FormControlLabel
                            sx={{ margin: 0 }}
                            control={<CartCheckbox />}
                            label={
                                <span style={{ fontSize: '14px', color: '#000000', paddingLeft: '8px', paddingRight: '8px' }}>
                                    Đặt làm địa chỉ mặc định
                                </span>
                            }
                        />
                    </div>
                    <div className='col-span-12'>
                        <div className="text-white h-[40px] px-[20px] py-[6px] rounded-[40px] flex items-center justify-center cursor-pointer font-bold" style={{ backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" }}>
                            LƯU
                        </div>
                    </div>
                </div>

            </DialogContent>
        </Dialog>
    );
};

export default AddAddressDialog;