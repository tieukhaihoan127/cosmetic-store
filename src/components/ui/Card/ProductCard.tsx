import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <Link to={'/'}>
        <div className='bg-white rounded-2xl'>
        <div className='relative'>
            <img src="https://image.hsv-tech.io/600x600/bbx/common/bb5a2a0e-fce9-41d9-b1ca-1da7d5cda3f3.webp" alt="" className='object-cover rounded-t-2xl max-w-[100%]'/>
            <img src="https://image.hsv-tech.io/400x0/bbx/common/9d0ffd41-19f9-4c1f-9aab-31c7662f058e.webp" alt="" className='absolute bottom-0'/>
            <FavoriteBorderIcon sx={{ fontSize: 25, position: 'absolute', top: 15, right: 10, cursor: 'pointer' }}/>
            <div className='absolute top-[10px] left-[10px]'>
                <div className='bg-black text-white rounded-full w-[45px] h-[45px] flex items-center justify-center text-sm mb-3 [@media(max-width:576px)]:w-[30px] [@media(max-width:576px)]:h-[30px] [@media(max-width:576px)]:text-[10px]'>MỚI</div>
                <div className='bg-black text-white rounded-full w-[45px] h-[45px] flex items-center justify-center text-sm [@media(max-width:576px)]:w-[30px] [@media(max-width:576px)]:h-[30px] [@media(max-width:576px)]:text-[10px]'>20%</div>
            </div>
        </div>
        <div className='text-center p-[14px]'>
            <div className='text-sm pb-[8px] font-semibold'>THE FACE SHOP</div>
            <div className='text-xs overflow-hidden line-clamp-2'>[Mua 5 tặng 7] Combo Mặt Nạ Giấy THE FACE SHOP Cấp Ẩm Real Nature Face Mask</div>
            <div className='text-sm font-bold py-[10px]'>210.000 đ</div>
            <div className='flex justify-center items-center gap-[5px]'>
                <StarIcon sx={{ fontSize: 14 }}/>
                <StarIcon sx={{ fontSize: 14 }}/>
                <StarIcon sx={{ fontSize: 14 }}/>
                <StarIcon sx={{ fontSize: 14 }}/>
                <StarIcon sx={{ fontSize: 14 }}/>
                <div className='text-sm'>(0)</div>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default ProductCard