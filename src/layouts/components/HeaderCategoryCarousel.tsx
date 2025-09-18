import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import HeaderCategoryButton from './HeaderCategoryButton';
import { useState } from 'react';

const HeaderCategoryCarousel = () => {
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);


  return (
    <div className='flex items-center justify-center'>
      <button className={`custom-prev absolute left-10 z-10 bg-[var(--text_primary)] w-[20px] h-[20px] flex items-center justify-center rounded-full hover:cursor-pointer transition-opacity ${
          isBeginning ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}>
        <NavigateBeforeOutlinedIcon sx={{ fontSize: "20px", color: "white" }} />
      </button>
      <Swiper modules={[Navigation]} navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }} slidesPerView="auto" spaceBetween={20} onSwiper={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className="mySwiper">
        <SwiperSlide className='w-auto'>
          <HeaderCategoryButton content='Thương hiệu' to='/' />
        </SwiperSlide>
        <SwiperSlide className='w-auto'>
          <HeaderCategoryButton content='Khuyến mãi hot' to='/' />
        </SwiperSlide>
        <SwiperSlide className='w-auto'>
          <HeaderCategoryButton content='Sản phẩm cao cấp' to='/' />
        </SwiperSlide>
        <SwiperSlide className='w-auto'>
          <HeaderCategoryButton content='Trang điểm' to='/' />
        </SwiperSlide>
        <SwiperSlide className='w-auto'>
          <HeaderCategoryButton content='Chăm sóc da' to='/' />
        </SwiperSlide>
        <SwiperSlide className='w-auto'>
          <HeaderCategoryButton content='Chăm sóc cá nhân' to='/' />
        </SwiperSlide>
        <SwiperSlide className='w-auto'>
          <HeaderCategoryButton content='Chăm sóc cơ thể' to='/' />
        </SwiperSlide>
        <SwiperSlide className='w-auto'>
          <HeaderCategoryButton content='Sản phẩm mới' to='/' />
        </SwiperSlide>
        <SwiperSlide className='w-auto'>
          <HeaderCategoryButton content='Đặt hàng Online & nhận tại cửa hàng' to='/' />
        </SwiperSlide>
        <SwiperSlide className='w-auto'>
          <HeaderCategoryButton content='Mã giảm' to='/' />
        </SwiperSlide>
      </Swiper>
      <button className={`custom-next absolute right-10 z-10 bg-[var(--text_primary)] w-[20px] h-[20px] flex items-center justify-center rounded-full hover:cursor-pointer transition-opacity ${
          isEnd ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}>
        <NavigateNextOutlinedIcon sx={{ fontSize: "20px", color: "white" }} />
      </button>
    </div>
  )
}

export default HeaderCategoryCarousel