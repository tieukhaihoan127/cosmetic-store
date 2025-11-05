import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import HeaderCategoryButton from './HeaderCategoryButton';
import { useState } from 'react';

interface HeaderCategoryCarouselProps {
  onHoverCategory: (category: string) => void;
  onLeaveCategory: () => void;
}

const HeaderCategoryCarousel = ({ onHoverCategory, onLeaveCategory } : HeaderCategoryCarouselProps) => {
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);


  return (
    <div className='flex items-center w-full header-carousel'>
      <button className={`custom-prev absolute [@media(min-width:1454px)]:left-10 [@media(min-width:1260px)]:left-8 [@media(min-width:984px)]:left-6 [@media(min-width:797px)]:left-4 left-2 z-10 bg-[var(--text_primary)] w-[20px] h-[20px] flex items-center justify-center rounded-full hover:cursor-pointer transition-opacity ${
          isBeginning ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}>
        <NavigateBeforeOutlinedIcon sx={{ fontSize: "20px", color: "white" }} />
      </button>
      <Swiper modules={[Navigation]} navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }} slidesPerView="auto" slidesPerGroup={10} spaceBetween={20} watchOverflow={true} centeredSlides={false} onSwiper={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onResize={(swiper) => {   
          swiper.update();
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className="flex h-max overflow-x-auto overflow-y-hidden  w-full justify-start"
        >
        <SwiperSlide className='w-auto'>
          <HeaderCategoryButton content='Thương hiệu' to='/' onHover={() => onHoverCategory('Thương hiệu')} onLeave={onLeaveCategory}/>
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
      <button className={`custom-next absolute [@media(min-width:1454px)]:right-10 [@media(min-width:1260px)]:right-8 [@media(min-width:984px)]:right-6 [@media(min-width:797px)]:right-4 right-2 z-10 bg-[var(--text_primary)] w-[20px] h-[20px] flex items-center justify-center rounded-full hover:cursor-pointer transition-opacity ${
          isEnd ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}>
        <NavigateNextOutlinedIcon sx={{ fontSize: "20px", color: "white" }} />
      </button>
    </div>
  )
}

export default HeaderCategoryCarousel