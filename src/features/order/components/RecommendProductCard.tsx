import Rating from '@mui/material/Rating';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

const RecommendProductCard = () => {
    return (
        <div className='flex items-center mt-[20px]'>
            <img src="https://image.hsv-tech.io/150x0/bbx/common/c336f484-4500-4598-aa8d-b2a3d6ce591a.webp" alt="" className='w-[100px] h-[100px] [@media(max-width:800px)]:w-[80px] [@media(max-width:800px)]:h-[80px] [@media(max-width:576px)]:!w-[64px] [@media(max-width:576px)]:!h-[64px] rounded-[5px] mr-[25px]' />
            <div className='flex-1 flex flex-col gap-[2px]'>
                <div className='text-[12px] font-bold leading-[17px]'>AHC</div>
                <div className='text-[14px] leading-[20px] line-clamp-2'>Kem Mắt Và Mặt AHC Mờ Nám, Làm Đều Màu Da Pro Shot Gluta-Ctivation Bright 3 30ml</div>
                <div className='flex gap-[5px]'>
                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly sx={{ color: 'black', fontSize: '14px', gap: '6px' }} />
                    <div className='text-[12px] underline ml-1'>(1)</div>
                </div>
                <div className='text-[14px] font-bold'>
                    542.900đ
                </div>
            </div>
            <div className='ml-[8px] border-1 border-black rounded-[38px] px-[20px] py-[8px] text-[14px] font-bold cursor-pointer hover:border-[#BF585B] hover:text-[#BF585B] transition-all duration-300 ease-in-out [@media(max-width:800px)]:hidden'>
                Thêm
            </div>
            <div className='[@media(min-width:800px)]:hidden w-[36px] h-[36px] rounded-[10px] border-2 border-[#949494] flex items-center justify-center ml-[20px]'>
                <AddShoppingCartOutlinedIcon sx={{ color: 'black', fontSize: '20px' }} />
            </div>
        </div>
    );
};

export default RecommendProductCard;