import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import ProductCard from '../Card/ProductCard';
import { Navigation } from 'swiper/modules';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const FlashSaleCarousel = () => {
  return (
    <div className='bg-[#7233A2] m-auto mt-10 w-[90%] px-[40px] pt-[35px] [@media(max-width:820px)]:pb-[35px] rounded-3xl relative saleSwiper'>
      <div className='flex items-center w-full max-md:flex-col max-md:gap-4'>
        <div className='flex-[3] flex items-center [@media(max-width:820px)]:flex-[5] max-md:flex-none max-md:w-full max-md:justify-center'>
          <img src="https://image.hsv-tech.io/1920x0/bbx/common/dcfcdba0-ef41-4a57-9936-1d563ed63889.webp" alt="" className='object-cover max-w-[80%] max-md:max-w-[100%]' />
        </div>
        <div className='flex-[4] flex justify-start [@media(max-width:820px)]:flex-[5] [@media(max-width:820px)]:justify-end max-md:flex-none max-md:justify-center'>
          <div className='flex bg-white px-[12px] py-[8px] rounded-3xl w-auto items-center'>
            <div className='px-[8px] flex items-center'>
              <div className='mr-[4px] text-[#020c6b] leading-[24px] [@media(max-width:576px)]:text-[14px]'>00</div>
              <div className='text-[#020c6b] text-sm [@media(max-width:576px)]:text-[12px]'>ngày</div>
            </div>
            <div className='text-sm text-[#020c6b] [@media(max-width:576px)]:text-[12px]'>|</div>
            <div className='px-[8px] flex items-center'>
              <div className='mr-[4px] text-[#020c6b] leading-[24px] [@media(max-width:576px)]:text-[14px]'>01</div>
              <div className='text-[#020c6b] text-sm [@media(max-width:576px)]:text-[12px]'>giờ</div>
            </div>
            <div className='text-sm text-[#020c6b] [@media(max-width:576px)]:text-[12px]'>|</div>
            <div className='px-[8px] flex items-center'>
              <div className='mr-[4px] text-[#020c6b] leading-[24px] [@media(max-width:576px)]:text-[14px]'>20</div>
              <div className='text-[#020c6b] text-sm [@media(max-width:576px)]:text-[12px]'>phút</div>
            </div>
            <div className='text-sm text-[#020c6b] [@media(max-width:576px)]:text-[12px]'>|</div>
            <div className='px-[8px] flex items-center'>
              <div className='mr-[4px] text-[#020c6b] leading-[24px] [@media(max-width:576px)]:text-[14px]'>30</div>
              <div className='text-[#020c6b] text-sm [@media(max-width:576px)]:text-[12px]'>giây</div>
            </div>
          </div>
        </div>
        <div className='flex-[3] flex justify-end [@media(max-width:820px)]:hidden'>
          <button className='px-[20px] py-[12px] h-auto bg-white text-[#d20062] rounded-lg font-medium cursor-pointer'>Xem tất cả</button>
        </div>
      </div>
      <div className='relative'>
        <Swiper
          spaceBetween={20}
          navigation={{
            nextEl: '.flash-next',
            prevEl: '.flash-prev',
          }}
          breakpoints={{
            0: {
              slidesPerView: 2
            },
            640: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 3
            },
            1024: {
              slidesPerView: 3
            },
            1280: {
              slidesPerView: 4
            },
          }}
          modules={[Navigation]}
          className="mt-10"
        >
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        </Swiper>
        <div className="flash-prev absolute w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer bg-white left-[-65px] top-[35%] shadow-[0_54px_55px_rgba(0,0,0,0.25),0_-12px_30px_rgba(0,0,0,0.12),0_4px_6px_rgba(0,0,0,0.12),0_12px_13px_rgba(0,0,0,0.17),0_-3px_5px_rgba(0,0,0,0.09)] [@media(max-width:576px)]:left-[-55px]">
          <ArrowBackIosNewOutlinedIcon sx={{ fontSize: 18 }}/>
        </div>
        <div className="flash-next absolute w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer bg-white right-[-65px] top-[35%] shadow-[0_54px_55px_rgba(0,0,0,0.25),0_-12px_30px_rgba(0,0,0,0.12),0_4px_6px_rgba(0,0,0,0.12),0_12px_13px_rgba(0,0,0,0.17),0_-3px_5px_rgba(0,0,0,0.09)] [@media(max-width:576px)]:right-[-55px]">
          <ArrowForwardIosOutlinedIcon sx={{ fontSize: 18 }}/>
        </div> 
      </div>
      <div className='flex justify-center mt-[35px]'>
        <button className='px-[30px] py-[12px] h-auto bg-white text-[#d20062] rounded-lg font-medium cursor-pointer [@media(min-width:820px)]:hidden'>Xem tất cả</button>
      </div>
    </div>
  )
}

export default FlashSaleCarousel