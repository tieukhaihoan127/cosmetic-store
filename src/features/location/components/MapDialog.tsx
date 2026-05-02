import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import StoreMap from './StoreMap';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import useDialog from '../hooks/useDialog';

const MapDialog = () => {

    const { isOpenMap, handleCloseMapDialog } = useDialog();

    return (
        <Dialog
            open={isOpenMap}
            onClose={handleCloseMapDialog}
            maxWidth="md"
            fullWidth
            slotProps={{
                paper: {
                    sx: { borderRadius: '10px', overflow: 'hidden' }
                }
            }}
        >
            <div className="flex items-center justify-between px-[20px] py-[15px]">
                <div className="font-bold text-[18px]">Bản đồ cửa hàng</div>
                <IconButton onClick={handleCloseMapDialog}>
                    <CloseIcon />
                </IconButton>
            </div>
            <DialogContent sx={{ p: 0 }}>
                <StoreMap />
            </DialogContent>
        </Dialog>
    );
};

export default MapDialog;