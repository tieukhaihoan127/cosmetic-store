import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';

const AdvertisementCarousel = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className='relative h-[100%]'>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={{
          nextEl: '.ad-next',
          prevEl: '.ad-prev',
        }}
        breakpoints={{
          1400: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 3.3,
          },
          768: {
            slidesPerView: 3,
          },
          0: {
            slidesPerView: 2.5,
            spaceBetween: 20
          },
        }}
        modules={[Navigation]}
        className="mt-10 w-[90%]"
        onSlideChange={handleSlideChange}
        onInit={handleSlideChange}
      >
        <SwiperSlide>
          <img src="https://image.hsv-tech.io/700x0/bbx/common/31b88b05-e866-4e8d-8323-d6a6829a8fe7.webp" alt="" className='rounded-lg w-full h-auto' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://image.hsv-tech.io/700x0/bbx/common/cb145f8c-ea4a-48de-97ff-1c1f91005381.webp" alt="" className='rounded-lg w-full h-auto' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://image.hsv-tech.io/700x0/bbx/common/4ace9448-2404-47a6-90a8-a6d45744b6ff.webp" alt="" className='rounded-lg w-full h-auto' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://image.hsv-tech.io/700x0/bbx/common/43812007-d8d1-4bec-9644-e4dac76d46aa.webp" alt="" className='rounded-lg w-full h-auto' />
        </SwiperSlide>
      </Swiper>
      <div 
        className={`ad-prev absolute w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer z-50 bg-white left-[40px] top-[40%] [@media(max-width:1020px)]:left-[25px] [@media(max-width:768px)]:left-[15px] [@media(max-width:576px)]:left-0 shadow-[0_54px_55px_rgba(0,0,0,0.25),0_-12px_30px_rgba(0,0,0,0.12),0_4px_6px_rgba(0,0,0,0.12),0_12px_13px_rgba(0,0,0,0.17),0_-3px_5px_rgba(0,0,0,0.09)] transition-opacity duration-300 ${isBeginning ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <ArrowBackIosNewOutlinedIcon sx={{ fontSize: 18 }} />
      </div>
      
      <div 
        className={`ad-next absolute w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer z-50 bg-white right-[40px] top-[40%] [@media(max-width:1020px)]:right-[25px] [@media(max-width:768px)]:right-[15px] [@media(max-width:576px)]:right-0 shadow-[0_54px_55px_rgba(0,0,0,0.25),0_-12px_30px_rgba(0,0,0,0.12),0_4px_6px_rgba(0,0,0,0.12),0_12px_13px_rgba(0,0,0,0.17),0_-3px_5px_rgba(0,0,0,0.09)] transition-opacity duration-300 ${isEnd ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <ArrowForwardIosOutlinedIcon sx={{ fontSize: 18 }} />
      </div>
    </div>
  )
}

export default AdvertisementCarousel