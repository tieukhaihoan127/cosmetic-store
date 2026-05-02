import Popover from '@mui/material/Popover';
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import type { Dispatch, SetStateAction } from 'react';

interface DeleteAddressPopoverProps {
    anchorEl: SVGSVGElement | null;
    setAnchorEl: Dispatch<SetStateAction<SVGSVGElement | null>>;
};

const DeleteAddressPopover = ({ anchorEl, setAnchorEl } : DeleteAddressPopoverProps) => {
    return (
        <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            transformOrigin={{ vertical: "bottom", horizontal: "center" }}
            slotProps={{
                paper: {
                    sx: {
                        px: '16px',
                        py: '12px',
                        borderRadius: '10px',
                        overflow: 'visible',
                        mt: '-24px',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: '-8px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: 0,
                            height: 0,
                            borderLeft: '8px solid transparent',
                            borderRight: '8px solid transparent',
                            borderTop: '8px solid white',
                        },
                    }
                }
            }}
        >
            <div className='flex items-center gap-[8px] pb-[15px]'>
                <WarningAmberIcon sx={{ fontSize: '18px', color: '#E6A508' }} />
                <div className='text-[14px]'>
                    Bạn có chắc muốn xoá địa chỉ này?
                </div>
            </div>
            <div className='flex items-center gap-[8px] justify-end'>
                <div className='py-[4px] px-[8px] cursor-pointer text-[14px] rounded-[2px] border-1 border-[#d9d9d9] hover:text-[#bf585b] hover:border-[#bf585b] transition-all ease-in-out duration-300'>
                    Hủy
                </div>
                <div className='py-[4px] px-[8px] cursor-pointer text-[14px] rounded-[2px] bg-[#ab2328] text-white hover:opacity-50 transition-all ease-in-out duration-300'>
                    Xóa
                </div>
            </div>
        </Popover>
    );
};

export default DeleteAddressPopover;