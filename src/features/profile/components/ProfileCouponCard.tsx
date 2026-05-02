import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import type { Dispatch, SetStateAction } from 'react';

interface ProfileCouponCardProps {
    id: string;
    setIsOpen: Dispatch<SetStateAction<boolean>>
};

const ProfileCouponCard = ({ id, setIsOpen }: ProfileCouponCardProps) => {

    return (
        <div className='p-[20px] border-1 border-[#d3d7d3] rounded-[5px]'>
            <div className='flex items-center gap-[10px]'>
                <LibraryAddOutlinedIcon sx={{ fontSize: '16px' }} />
                <div className='text-[14px] leading-[1.5715]'>
                    MÃ {id}
                </div>
            </div>
            <div onClick={() => setIsOpen(true)} className='underline text-[14px] font-semibold leading-[1.5715] mt-1 cursor-pointer'>
                Điều kiện
            </div>
        </div>
    );
};

export default ProfileCouponCard;