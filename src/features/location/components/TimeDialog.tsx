import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import useLocationDialog from '../../../shared/hooks/useLocationDialog';

const TimeDialog = () => {

    const { isOpenTime, handleCloseTimeDialog } = useLocationDialog();

    return (
        <Dialog
            open={isOpenTime}
            onClose={handleCloseTimeDialog}
            sx={{
                maxHeight: '700px',
                height: '700px',
                borderRadius: '20px'
            }}
            maxWidth='xs'
            fullWidth
            slotProps={{
                paper: {
                    sx: {
                        borderRadius: '10px',
                    }
                }
            }}
        >
            <DialogTitle >
                <div className="flex items-center justify-between">
                    <div className="text-[24px] font-semibold">Giờ mở cửa</div>
                    <IconButton disableRipple onClick={handleCloseTimeDialog} sx={{ transition: '300ms ease', '&:hover': { color: 'black' } }}>
                        <CloseIcon sx={{ fontSize: '30px', }} />
                    </IconButton>
                </div>
            </DialogTitle>
            <DialogContent>
                <div className="flex items-center justify-between text-[14px] leading-[1.5715]">
                    <div className="font-bold">Thứ 2 tới thứ 6</div>
                    <div>09:00 - 21:00</div>
                </div>
                <div className="flex items-center justify-between text-[14px] leading-[1.5715]">
                    <div className="font-bold">Thứ 7</div>
                    <div>09:00 - 21:00</div>
                </div>
                <div className="flex items-center justify-between text-[14px] leading-[1.5715]">
                    <div className="font-bold">Chủ nhật</div>
                    <div>09:00 - 21:00</div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default TimeDialog;