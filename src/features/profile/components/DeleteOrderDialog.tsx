import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import type { Dispatch, SetStateAction } from 'react';

interface DeleteOrderDialogProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>
};

const DeleteOrderDialog = ({ isOpen, setIsOpen } : DeleteOrderDialogProps) => {
    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            maxWidth={false}
            fullWidth
            slotProps={{
                paper: {
                    sx: { borderRadius: '10px', width: '380px' }
                }
            }}
        >
            <DialogTitle sx={{ paddingX: '15px', paddingY: '24px' }}>
                <div className="flex items-center justify-center">
                    <div className="text-[24px] font-semibold">Xác nhận</div>
                </div>
            </DialogTitle>
            <DialogContent sx={{ p: '24px' }}>
                <div className="text-center text-[14px] leading-[1.5715]">
                    Bạn có chắc chắn muốn hủy đơn hàng này?
                </div>
                <div className="flex items-center mt-[30px] gap-[10px] justify-center">
                    <div onClick={() => setIsOpen(false)} className="text-white h-[40px] px-[20px] py-[6px] rounded-[40px] flex items-center justify-center cursor-pointer bg-black">
                        Trở về
                    </div>
                    <div className="text-white h-[40px] px-[20px] py-[6px] rounded-[40px] flex items-center justify-center cursor-pointer" style={{ backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" }}>
                        Hủy
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteOrderDialog;