import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import { Link } from 'react-router-dom';

const HomeCarousel = () => {
  return (
    <Swiper
      pagination={true}
      navigation={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      loop={true}
      modules={[Pagination, Navigation, EffectCoverflow]}
      className='mySwiper mt-2 relative'
    >
      <SwiperSlide className='carousel-slide'>
        <Link to={'/'} className='block h-full'>
            <img 
              src="https://image.hsv-tech.io/1920x0/bbx/common/63926bb1-6df8-4028-84a1-69dc1f5f1d31.webp" 
              alt="" 
              className='w-full object-cover'
            />
        </Link>
      </SwiperSlide>
      <SwiperSlide className='carousel-slide'>
        <Link to={'/'} className='block h-full'>
            <img 
              src="https://image.hsv-tech.io/1920x0/bbx/common/3530e3f0-ad41-4149-8f1a-cab07d7493c3.webp" 
              alt="" 
              className='w-full object-cover'
            />
        </Link>
      </SwiperSlide>
      <SwiperSlide className='carousel-slide'>
        <Link to={'/'} className='block h-full'>
            <img 
              src="https://image.hsv-tech.io/1920x0/bbx/common/7c11e9e2-cdf0-43fe-9a4a-50fe550f4f1b.webp" 
              alt="" 
              className='w-full object-cover'
            />
        </Link>
      </SwiperSlide>
      <SwiperSlide className='carousel-slide'>
        <Link to={'/'} className='block h-full'>
            <img 
              src="https://image.hsv-tech.io/1920x0/bbx/common/6b2073fd-913a-4388-9a3d-d4cc7c2ca246.webp" 
              alt="" 
              className='w-full object-cover'
            />
        </Link>
      </SwiperSlide>
      <SwiperSlide className='carousel-slide'>
        <Link to={'/'} className='block h-full'>
            <img 
              src="https://image.hsv-tech.io/1920x0/bbx/common/ec08c58e-4889-4c62-877a-3b7920ceba76.webp" 
              alt="" 
              className='w-full object-cover'
            />
        </Link>
      </SwiperSlide>
    </Swiper>
  )
}

export default HomeCarousel