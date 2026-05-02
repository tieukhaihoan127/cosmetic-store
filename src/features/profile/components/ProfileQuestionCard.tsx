import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import Badge from '@mui/material/Badge';

const ProfileQuestionCard = () => {
    return (
        <div className='border-1 border-[#efefef] p-[20px] rounded-[10px] cursor-pointer'>
            <div className='text-[14px] leading-[1.5715] mb-[20px]'>
                Kiểm tra thông tin đơn hàng đã đặt tại đâu?
            </div>
            <div className='w-[300px] flex gap-[15px] items-center'>
                <img src="https://image.hsv-tech.io/100x100/bbx/common/53dd920f-cd75-45b8-bdd5-fd311def024c.webp" alt="" className='w-[50px] h-[50px]' />
                <div className='text-[14px] leading-[1.5715]'>
                    <div>Son Thạch Bóng Thuần Chay Amuse Jel-Fit Tint 3.8g</div>
                    <div>SKu: 11112236</div>
                </div>
            </div>
            <div className='flex gap-[20px] items-center mt-1'>
                <div className='text-[14px] leading-1.5715] font-semibold'>Hoan Tieu</div>
                <div className='flex items-center gap-[20px]'>
                    <div className='text-[14px] leading-1.5715]'>03/22/2026 16:37</div>
                    <Badge badgeContent={1} sx={{
                        '& .MuiBadge-badge': {
                            backgroundColor: 'black',
                            color: 'white',
                            fontSize: '10px',
                            fontWeight: 'bold',
                            minWidth: '16px',
                            height: '16px',
                            padding: '0 4px',
                            borderRadius: '50%',
                        },
                    }}>
                        <MessageOutlinedIcon sx={{ fontSize: '24px' }} />
                    </Badge>
                </div>
            </div>
        </div>
    );
};

export default ProfileQuestionCard;