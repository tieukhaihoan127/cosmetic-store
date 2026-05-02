import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import useDialog from '../hooks/useDialog';
import useLocationDialog from '../../../shared/hooks/useLocationDialog';
import AddressAutocomplete from '../../../shared/components/common/Autocomplete/AddressAutocomplete';
import { cities, districts } from '../../../shared/constants/address.constant';

const StoreDialog = () => {

    const { isOpenStore, handleOpenShowroomDialog, handleOpenTimeDialog, handleCloseStoreDialog } = useLocationDialog();
    
    const { isXS } = useDialog();

    return (
        <Dialog
            open={isOpenStore}
            onClose={handleCloseStoreDialog}
            fullScreen={isXS}
            sx={{
                maxHeight: '700px',
                height: '700px',
                borderRadius: '20px'
            }}
            maxWidth='sm'
            fullWidth
            slotProps={{
                paper: {
                    sx: {
                        borderRadius: '10px',
                    }
                }
            }}
        >
            <DialogTitle sx={{ paddingX: '32px', paddingY: '28px' }}>
                <div className="flex items-center justify-between">
                    <div className="text-[22px] font-semibold">Danh sách cửa hàng</div>
                    <IconButton disableRipple onClick={handleCloseStoreDialog} sx={{ transition: '300ms ease', '&:hover': { color: 'black' } }}>
                        <CloseIcon sx={{ fontSize: '30px', }} />
                    </IconButton>
                </div>
            </DialogTitle>
            <DialogContent sx={{ paddingX: '32px', paddingY: '28px' }}>
                <div className="flex flex-col gap-[20px]">
                    <div className="flex my-[24px]">
                        <img src="https://image.hsv-tech.io/65x65/bbx/common/53dd920f-cd75-45b8-bdd5-fd311def024c.webp" alt="" className="min-w-[65px] w-[65px] h-[65px]" />
                        <div className="text-[14px] ml-[15px]">
                            <div className="font-semibold leading-[20px] mb-[5px]">AMUSE</div>
                            <div className="leading-[23px] text-[16px] mb-[5px]">Son Thạch Bóng Thuần Chay Amuse Jel-Fit Tint 3.8g</div>
                            <div>SKU: 11112241</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-[10px]">
                        <AddressAutocomplete options={cities} placeholder='Tỉnh/Thành phố' />
                        <AddressAutocomplete options={districts} placeholder='Quận/huyện' />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <div className="p-[20px] text-[14px] leading-[1.5715] border-1 border-[#EFEFEF] rounded-[3px] cursor-pointer">
                            <div className="flex items-center justify-between mb-1">
                                <div>Hồ Chí Minh</div>
                                <div className="rounded-[5px] bg-[#f6ffed] text-[#389e0d] px-[12px] py-[3px] text-[12px]">Còn hàng</div>
                            </div>
                            <div className="font-bold mb-1">BEAUTY BOX 199 KHÁNH HỘI</div>
                            <div className="mb-1">Số 199 Khánh Hội, Phường Vĩnh Hội, Thành Phố Hồ Chí Minh, Phường 9, Quận 4</div>
                            <div className="underline">18002004</div>
                            <div className="flex items-center mt-[10px] underline gap-[10px]">
                                <div onClick={handleOpenShowroomDialog}>Xem showroom</div>
                                <div onClick={handleOpenTimeDialog}>Giờ mở cửa</div>
                                <div>Chi tiết</div>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default StoreDialog;