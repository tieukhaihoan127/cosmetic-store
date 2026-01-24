import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';

const HeaderTextCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      slidesPerView={1} 
      allowTouchMove={false}
    >
      <SwiperSlide className="text-center text-white text-[12px]">
        Freeship 15K mọi đơn hàng
      </SwiperSlide>
      <SwiperSlide className="text-center text-white text-[12px]">
        Quà Tặng Cho Đơn Từ 499K
      </SwiperSlide>
      <SwiperSlide className="text-center text-white text-[12px]">
        Giao Hàng Nhanh 24H
      </SwiperSlide>
      <SwiperSlide className="text-center text-white text-[12px]">
        Mua online nhận tại cửa hàng gần nhất
      </SwiperSlide>
    </Swiper>
  )
}

export default HeaderTextCarousel