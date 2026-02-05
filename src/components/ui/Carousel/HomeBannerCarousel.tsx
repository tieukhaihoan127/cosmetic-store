import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const HomeBannerCarousel = () => {


  return (
    <div className='relative bannerSlide'>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        navigation={{
          nextEl: '.banner-next',
          prevEl: '.banner-prev',
        }}
        breakpoints={{
          1280: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2.2,
          },
          0: {
            slidesPerView: "auto",
          },
        }}
        modules={[Navigation]}
        className="mt-10 w-[90%]"
      >
        <SwiperSlide>
          <img src="https://image.hsv-tech.io/1920x914/bbx/common/2ef27f45-f92e-4f33-8c4f-17f6ad0e8d7c.webp" alt="" className='rounded-lg w-full h-full' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://image.hsv-tech.io/1920x914/bbx/common/6f97e1c0-db14-408c-be3b-9f37506b7e9e.webp" alt="" className='rounded-lg w-full h-full' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://image.hsv-tech.io/1920x914/bbx/common/99dc319a-3b48-42c6-87e0-05c8d2f237a6.webp" alt="" className='rounded-lg w-full h-full' />
        </SwiperSlide>
      </Swiper>
      <div className="banner-prev absolute w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer z-50 bg-white left-[35px] top-[45%] [@media(max-width:1020px)]:left-[25px] [@media(max-width:768px)]:left-[15px] [@media(max-width:576px)]:left-0 shadow-[0_54px_55px_rgba(0,0,0,0.25),0_-12px_30px_rgba(0,0,0,0.12),0_4px_6px_rgba(0,0,0,0.12),0_12px_13px_rgba(0,0,0,0.17),0_-3px_5px_rgba(0,0,0,0.09)]">
            <ArrowBackIosNewOutlinedIcon sx={{ fontSize: 18 }} />
          </div>
          <div className="banner-next absolute w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer z-50 bg-white right-[35px] top-[45%] [@media(max-width:1020px)]:right-[25px] [@media(max-width:768px)]:right-[15px] [@media(max-width:576px)]:right-0 shadow-[0_54px_55px_rgba(0,0,0,0.25),0_-12px_30px_rgba(0,0,0,0.12),0_4px_6px_rgba(0,0,0,0.12),0_12px_13px_rgba(0,0,0,0.17),0_-3px_5px_rgba(0,0,0,0.09)]">
            <ArrowForwardIosOutlinedIcon sx={{ fontSize: 18 }} />
          </div>
    </div>
  )
}

export default HomeBannerCarousel