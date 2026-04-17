import { Link } from 'react-router-dom'
import StoreDetailMap from '../components/common/Map/StoreDetailMap'

const StoreDetailPage = () => {
  return (
    <div className='w-[90%] mx-auto'>
      <div className='mt-[10px]'>
        <div className="flex items-center text-[#797979] gap-2 leading-relaxed">
          <Link to="/" className="text-[12px]">
            Trang chủ
          </Link>
          <div className="text-[14px]">{">"}</div>
          <Link to="/" className="text-[12px]">
            Cửa hàng
          </Link>
        </div>
        <div className='text-[24px] leading-[25px] uppercase mt-[20px] mb-[15px] font-bold'>
          BEAUTY BOX KHÁNH HỘI
        </div>
      </div>
      <div className='grid grid-cols-12 gap-[20px]'>
        <div className='col-span-7 [@media(max-width:768px)]:col-span-12'>
          <div className='p-[15px] rounded-[3px] border-1 border-[#F0F0F0]'>
            <div className='flex items-center justify-between'>
              <div className='text-[14px] leading-[1.5715] font-bold'>Địa chỉ</div>
              <div className='text-[14px] leading-[1.5715] underline text-[#ab2328]'>Chỉ đường</div>
            </div>
            <div className='mt-[10px] text-[14px] leading-[1.5715]'>
              175 Nguyễn Thái Học, Phường Ô Chợ Dừa, Hà Nội , Phường Giảng Võ, Quận Ba Đình <span className='underline text-[#ab2328]'>18006035</span>
            </div>
            <div className='mt-[20px]'>
              <StoreDetailMap />
            </div>
          </div>
          <div className='p-[15px] rounded-[3px] border-1 border-[#F0F0F0] mt-[20px]'>
            <div className='flex items-center justify-between text-[14px] leading-[1.5715]'>
              <div className='font-bold'>Giờ mở cửa</div>
              <div className='flex gap-[10px]'>
                <div>Đang mở cửa</div>
                <div>09:00 - 22:00</div>
              </div>
            </div>
            <div className='flex items-center justify-between text-[14px] leading-[1.5715]'>
              <div>Thứ 2 tới thứ 6</div>
              <div>09:00 - 22:00</div>
            </div>
            <div className='flex items-center justify-between text-[14px] leading-[1.5715]'>
              <div>Thứ 7</div>
              <div>09:00 - 22:00</div>
            </div>
            <div className='flex items-center justify-between text-[14px] leading-[1.5715]'>
              <div>Chủ nhật</div>
              <div>09:00 - 22:00</div>
            </div>
          </div>
        </div>
        <div className='col-span-5 [@media(max-width:768px)]:col-span-12'>
          <div className='sticky top-[150px]'>
            <img src="https://image.hsv-tech.io/890x0/bbx/common/6d01e6c0-e740-4c49-8c9f-67b3e9b9d752.webp" alt="" className='max-h-[calc(100vh-80px)] object-contain mx-auto' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoreDetailPage