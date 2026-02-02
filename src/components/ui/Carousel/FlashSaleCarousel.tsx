import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; 
import ProductCard from '../Card/ProductCard';
import { Navigation } from 'swiper/modules';

const FlashSaleCarousel = () => {
  return (
    <div className='bg-[#7233A2] m-auto mt-10 w-[90%] p-[40px] rounded-3xl relative'>
        <div className='flex justify-between items-center'>
            <img src="https://image.hsv-tech.io/1920x0/bbx/common/dcfcdba0-ef41-4a57-9936-1d563ed63889.webp" alt="" className='object-cover max-w-[20%]'/>
                <div className='flex bg-white px-[12px] py-[8px] justify-start rounded-3xl w-auto items-center'>
                  <div className='px-[8px] flex items-center'>
                    <div className='mr-[4px] text-[#020c6b] leading-[24px]'>00</div>
                    <div className='text-[#020c6b] text-sm'>ngày</div>
                  </div>
                  <div className='text-sm text-[#020c6b]'>|</div>
                  <div className='px-[8px] flex items-center'>
                    <div className='mr-[4px] text-[#020c6b] leading-[24px]'>01</div>
                    <div className='text-[#020c6b] text-sm'>giờ</div>
                  </div>
                  <div className='text-sm text-[#020c6b]'>|</div>
                  <div className='px-[8px] flex items-center'>
                    <div className='mr-[4px] text-[#020c6b] leading-[24px]'>20</div>
                    <div className='text-[#020c6b] text-sm'>phút</div>
                  </div>
                  <div className='text-sm text-[#020c6b]'>|</div>
                  <div className='px-[8px] flex items-center'>
                    <div className='mr-[4px] text-[#020c6b] leading-[24px]'>30</div>
                    <div className='text-[#020c6b] text-sm'>giây</div>
                  </div>
                </div>
            <button className='px-[20px] py-[12px] h-auto bg-white text-[#d20062] rounded-lg font-medium'>Xem tất cả</button>
        </div>
        <div className='relative'>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="saleSwiper mt-10"
          >
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
          </Swiper>
        </div>
    </div>
  )
}

export default FlashSaleCarousel