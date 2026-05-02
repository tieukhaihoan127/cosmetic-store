import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';

const QnAServiceSection = () => {
    return (
        <div className='grid grid-cols-3 [@media(max-width:768px)]:grid-cols-2 [@media(max-width:576px)]:!grid-cols-1 gap-[20px]'>
            <div className='p-[40px] flex flex-col items-center justify-center bg-[#f9f9f9] rounded-[10px] cursor-pointer'>
                <HelpOutlineIcon sx={{ marginBottom: '25px', fontSize: '30px' }} />
                <div className='font-bold text-center flex-1'>
                    Các câu hỏi thường gặp
                </div>
            </div>
            <div className='p-[40px] flex flex-col items-center justify-center bg-[#f9f9f9] rounded-[10px] cursor-pointer'>
                <ReportGmailerrorredIcon sx={{ marginBottom: '25px', fontSize: '30px' }} />
                <div className='font-bold text-center flex-1'>
                    Đánh giá chất lượng dịch vụ
                </div>
            </div>
            <div className='p-[40px] flex flex-col items-center justify-center bg-[#f9f9f9] rounded-[10px] cursor-pointer'>
                <StoreOutlinedIcon sx={{ marginBottom: '25px', fontSize: '30px' }} />
                <div className='font-bold text-center flex-1'>
                    Tìm cửa hàng gần nhất
                </div>
            </div>
        </div>
    );
};

export default QnAServiceSection;