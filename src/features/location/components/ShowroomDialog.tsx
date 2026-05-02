import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import useLocationDialog from '../../../shared/hooks/useLocationDialog';

const ShowroomDialog = () => {

    const { isOpenShowroom, handleCloseShowroomDialog } = useLocationDialog();

    return (
        <Dialog
            open={isOpenShowroom}
            onClose={handleCloseShowroomDialog}
            maxWidth="xs"
            fullWidth
            slotProps={{
                paper: {
                    sx: { borderRadius: '10px' }
                }
            }}
        >
            <DialogContent sx={{ p: 0 }}>
                <img
                    src="https://image.hsv-tech.io/890x0/bbx/common/6d01e6c0-e740-4c49-8c9f-67b3e9b9d752.webp"
                    alt="showroom"
                    className="w-full object-contain"
                />
            </DialogContent>
        </Dialog>
    );
};

export default ShowroomDialog;