import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import CartCheckbox from '../../../shared/components/ui/Checkbox/CartCheckbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CommonTextfield from '../../../shared/components/common/Textfield/CommonTextfield';
import PhoneTextfield from '../../../shared/components/common/Textfield/PhoneTextfield';
import AddressAutocomplete from '../../../shared/components/common/Autocomplete/AddressAutocomplete';
import { districts } from '../../../shared/constants/address.constant';
import useProfileDialog from '../hooks/useProfileDialog';

const EditProfileAddressDialog = () => {

    const { isOpenEditProfile, handleCloseEditProfile } = useProfileDialog();

    return (
        <Dialog
            open={isOpenEditProfile}
            onClose={handleCloseEditProfile}
            maxWidth={false}
            fullWidth
            sx={{
                '@media (max-width: 576px)': {
                    '& .MuiDialog-container': {
                        alignItems: 'flex-end',
                    }
                }
            }}
            slotProps={{
                paper: {
                    sx: {
                        borderRadius: '10px',
                        width: '470px',
                        '@media (max-width: 576px)': {
                            width: '100%',
                            height: '86%',
                            maxHeight: '100% !important',
                            maxWidth: '100% !important',
                            margin: 0,
                            borderRadius: '10px 10px 0 0',
                        },
                    }
                }
            }}
        >
            <DialogTitle sx={{ paddingX: '15px', paddingY: '24px' }}>
                <div className="flex items-center justify-between">
                    <div></div>
                    <div className="text-[24px] font-semibold">Chỉnh sửa địa chỉ</div>
                    <IconButton disableRipple onClick={handleCloseEditProfile} sx={{ transition: '300ms ease', '&:hover': { color: 'black' } }}>
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
                        <AddressAutocomplete options={districts} placeholder='Quận/huyện' />
                    </div>
                    <div className='col-span-6'>
                        <AddressAutocomplete options={districts} placeholder='Phường/xã' />
                    </div>
                    <div className='col-span-12'>
                        <CommonTextfield placeholder='Tòa nhà, số nhà, tên đường' />
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
                        <div className="mx-auto w-[140px] h-[50px] py-[8px] px-[15px] bg-black text-white flex items-center justify-center">
                            LƯU
                        </div>
                    </div>
                </div>

            </DialogContent>
        </Dialog>
    );
};

export default EditProfileAddressDialog;