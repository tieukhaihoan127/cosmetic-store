import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

const HelpCenterPage = () => {

    const imageUrl = "https://beautybox.com.vn/images/helpCenter.webp";

    return (
        <div className="w-[90%] mx-auto">
            <div className="mt-[15px] relative h-[300px] [@media(max-width:780px)]:h-[250px] bg-cover rounded-[10px] flex justify-center" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className='flex flex-col items-center justify-center w-[80%]'>
                    <div className="text-[30px] leading-[43px] text-white font-bold mb-[20px] text-center [@media(max-width:780px)]:text-[22px]">
                        Xin chào, chúng tôi có thể giúp gì cho bạn?
                    </div>
                    <div className="rounded-full min-w-[650px] [@media(max-width:919px)]:min-w-[570px] [@media(max-width:780px)]:!min-w-[95%]">
                        <TextField
                            fullWidth  
                            variant="outlined"
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon sx={{ color: '#888', fontSize: '28px' }} />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Button
                                                onClick={() => console.log('submit')}
                                                sx={{
                                                    borderRadius: '999px',
                                                    backgroundColor: 'white',
                                                    textTransform: 'none',
                                                    color: 'black',
                                                    border: '0',
                                                    px: 0,
                                                    fontSize: '14px',
                                                    fontWeight: 700
                                                }}
                                            >
                                                Tìm kiếm
                                            </Button>
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            sx={{
                                width: '100%',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '999px',
                                    backgroundColor: '#fff',
                                    px: '25px',
                                    '& fieldset': { border: 'none' },
                                    '&:hover fieldset': { border: 'none' },
                                    '&.Mui-focused fieldset': { border: 'none' },
                                },
                                '& .MuiInputBase-input': {
                                    py: '10.5px',
                                    fontSize: '0.9rem',
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className='max-w-[994px] mx-auto mt-[80px]'>
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
                <div className='my-[30px] text-[20px] font-bold text-center'>
                    Quý khách có thể liên hệ với chúng tôi qua các hình thức sau
                </div>
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
            </div>
        </div>
    )
}

export default HelpCenterPage