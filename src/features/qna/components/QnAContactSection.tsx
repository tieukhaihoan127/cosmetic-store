import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const QnAContactSection = () => {
    return (
        <div className='grid grid-cols-3 [@media(max-width:768px)]:grid-cols-2 [@media(max-width:576px)]:!grid-cols-1 gap-[20px]'>
            <div className='p-[40px] flex flex-col items-center justify-center bg-[#f9f9f9] rounded-[10px] cursor-pointer'>
                <LocalPhoneOutlinedIcon sx={{ marginBottom: '25px', fontSize: '30px' }} />
                <div className='font-bold text-center flex-1'>
                    Gọi chúng tôi
                </div>
                <div className='mt-1 text-[14px]'>
                    18006035
                </div>
            </div>
            <div className='p-[40px] flex flex-col items-center justify-center bg-[#f9f9f9] rounded-[10px] cursor-pointer'>
                <EmailOutlinedIcon sx={{ marginBottom: '25px', fontSize: '30px' }} />
                <div className='font-bold text-center flex-1'>
                    Gửi email cho chúng tôi
                </div>
                <div className='mt-1 text-[14px]'>
                    customcare@gmail.com
                </div>
            </div>
            <div className='p-[40px] flex flex-col items-center justify-center bg-[#f9f9f9] rounded-[10px] cursor-pointer'>
                <MessageOutlinedIcon sx={{ marginBottom: '25px', fontSize: '30px' }} />
                <div className='font-bold text-center flex-1'>
                    Để lại lời nhắn cho chúng tôi
                </div>
            </div>
        </div>
    );
};

export default QnAContactSection;