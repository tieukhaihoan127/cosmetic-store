import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Divider from '@mui/material/Divider';
import useProfileDialog from '../hooks/useProfileDialog';
import type { Dispatch, SetStateAction } from 'react';

interface ProfileAddressCardProps {
    setAnchorEl: Dispatch<SetStateAction<SVGSVGElement | null>>;
};

const ProfileAddressCard = ({ setAnchorEl } : ProfileAddressCardProps) => {

    const { handleOpenEditProfile } = useProfileDialog();
    
    return (
        <div className='rounded-[10px] border-1 border-[#f0f0f0]'>
            <div className='flex items-center justify-between p-[15px]'>
                <div className='text-[14px] leading-[1.5715] font-medium'>127 Lãnh Binh Thăng P12</div>
                <div className='flex items-center'>
                    <EditOutlinedIcon onClick={handleOpenEditProfile} sx={{ fontSize: '20px', width: '40px', cursor: 'pointer' }} />
                    <DeleteOutlinedIcon onClick={(e) => setAnchorEl(e.currentTarget)} sx={{ fontSize: '20px', width: '40px', cursor: 'pointer' }} />
                </div>
            </div>
            <Divider />
            <div className='p-[15px] text-[14px] lading-[1.5715] flex flex-col gap-[2px]'>
                <div className='font-bold'>
                    Tiêu Hoàn
                </div>
                <div className='font-medium'>
                    84764795487
                </div>
                <div className='font-medium break-after-all'>
                    tieukhaihoan127@gmail.com
                </div>
                <div>
                    adasd, Xã Cao Kỳ, Huyện Chợ Mới, Bắc Kạn
                </div>
            </div>
        </div>
    );
};

export default ProfileAddressCard;