import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <div className='bg-white rounded-2xl max-w-sm'>
        <div className='relative'>
            <img src="https://image.hsv-tech.io/600x600/bbx/common/bb5a2a0e-fce9-41d9-b1ca-1da7d5cda3f3.webp" alt="" className='object-cover rounded-t-2xl max-w-[100%]'/>
            <img src="https://image.hsv-tech.io/400x0/bbx/common/9d0ffd41-19f9-4c1f-9aab-31c7662f058e.webp" alt="" className='absolute bottom-0'/>
            <Link to={'/'}>
                <FavoriteBorderIcon sx={{ fontSize: 25, position: 'absolute', top: 15, right: 15 }}/>
            </Link>
        </div>
        <div className='text-center p-[14px]'>
            <Link to={'/'}>
                <div className='text-sm pb-[8px] font-semibold'>THE FACE SHOP</div>
            </Link>
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
  )
}

export default ProductCard