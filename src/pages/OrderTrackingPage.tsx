import TextField from '@mui/material/TextField'
import { useAppDispatch } from '../store/hooks';
import { openLoginDialog } from '../store/slices/clickLoginSlice';

const OrderTrackingPage = () => {

    const dispatch = useAppDispatch();
    
  return (
    <div className='w-[90%] mx-auto'>
        <div className='text-center'>
            <div className='text-[25px] font-bold leading-[25px] uppercase mt-[20px] mb-[15px]'>
                Theo dõi đơn hàng
            </div>
            <div className='text-[16px] leading-[25px]'>
                Tra cứu đơn hàng của bạn dễ dàng chỉ với mã đơn hàng
            </div>
        </div>
        <div className='max-w-[500px] mx-auto mt-[40px] text-center'>
            <TextField
                fullWidth
                placeholder="Mã đơn hàng (vd. GYS-19281)"
                type="search"
                variant="outlined"
                sx={{
                    '& .MuiOutlinedInput-root': {
                        backgroundColor: '#ffffff',
                        borderRadius: '5px',
                        fontSize: '16px',

                    '& fieldset': {
                        borderColor: '#d1d5db',
                        transition: 'border-color 0.4s ease, box-shadow 0.3s ease', 
                    },
                    '&:hover fieldset': {
                        borderColor: '#bf585b',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#bf585b',
                        boxShadow: '0 0 0 2px rgb(234,199,200)', 
                    },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#7D7D8D',
                        fontSize: '16px',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        borderColor: '#bf585b',
                    },
                }}
            />
            <div className="w-fit mx-auto text-white h-[40px] px-[20px] py-[6px] mt-[40px] rounded-[40px] flex items-center justify-center cursor-pointer" style={{ backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" }}>
                ĐĂNG NHẬP
            </div>
            <div className='text-[14px] mt-[20px]'>
                Hoặc
                <span onClick={() => dispatch(openLoginDialog())} className='underline font-bold px-[6px] cursor-pointer'>
                    Đăng nhập
                </span>
                để tra cứu nhanh hơn 
            </div>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default OrderTrackingPage