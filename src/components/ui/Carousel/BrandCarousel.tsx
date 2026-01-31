import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';

const BrandCarousel = () => {
  return (
    <div>
        <Swiper 
            slidesPerView={2}
            slidesPerGroup={2}
            grid={{
                rows: 2,
                fill: 'row' 
            }}
            navigation={true}
            spaceBetween={20}
            breakpoints={{
                640: {
                    slidesPerView: 3,
                    slidesPerGroup: 2,
                    spaceBetween: 15,
                    grid: {
                        rows: 2,
                        fill: 'row'
                    }
                },
                768: {
                    slidesPerView: 4,
                    slidesPerGroup: 3,
                    spaceBetween: 15,
                    grid: {
                        rows: 2,
                        fill: 'row'
                    }
                },
                1024: {
                    slidesPerView: 5,
                    slidesPerGroup: 4,
                    spaceBetween: 20,
                    grid: {
                        rows: 2,
                        fill: 'row'
                    }
                },
                1280: {
                    slidesPerView: 6,
                    slidesPerGroup: 4,
                    spaceBetween: 20,
                    grid: {
                        rows: 2,
                        fill: 'row'
                    }
                },
            }}
            modules={[Grid, Navigation]}
            className='brandSwiper w-[90%] mt-3'
        >
            <SwiperSlide>
                <Link to={'/'}>
                    <img src="https://image.hsv-tech.io/900x439/bbx/common/05ab3d22-0080-41d6-bfd4-43f4696d120a.webp" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/'}>
                    <img src="https://image.hsv-tech.io/900x439/bbx/common/095c2396-ff14-4fb6-897f-a5fcc9d203a2.webp" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/'}>
                    <img src="https://image.hsv-tech.io/900x439/bbx/common/455c648f-ed24-4b19-a1d9-7edbae3a7ddd.webp" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/'}>
                    <img src="https://image.hsv-tech.io/900x439/bbx/common/5129ffce-7480-4920-a2e1-372fa69cc3a8.webp" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/'}>
                    <img src="https://image.hsv-tech.io/900x439/bbx/common/533f13d9-9b8c-47d5-b084-87dfdc182d9b.webp" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/'}>
                    <img src="https://image.hsv-tech.io/900x439/bbx/common/851bfd4a-d255-40e0-a92b-262d864a27ba.webp" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/'}>
                    <img src="https://image.hsv-tech.io/900x439/bbx/common/42e25a05-e70e-4e54-a4d7-391dd31583ad.webp" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/'}>
                    <img src="https://image.hsv-tech.io/900x439/bbx/common/99e0467c-2bfa-466d-8df5-82a4ebe7f8c8.webp" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/'}>
                    <img src="https://image.hsv-tech.io/900x439/bbx/common/7df65e05-451b-4198-869e-4c76d8b1b8dd.webp" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/'}>
                    <img src="https://image.hsv-tech.io/900x439/bbx/common/ded9b2ae-3f33-4021-9789-64fcc0db21dd.webp" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/'}>
                    <img src="https://image.hsv-tech.io/900x439/bbx/common/b33472ea-f977-4761-8d34-5436a7eb59cb.webp" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/'}>
                    <img src="https://image.hsv-tech.io/900x439/bbx/common/1f122bc0-60c1-4e88-a592-e104f9e375ca.webp" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/'}>
                    <img src="https://image.hsv-tech.io/900x439/bbx/common/7181a78e-a04a-461e-952b-5ef636d9a5bb.webp" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/'}>
                    <img src="https://image.hsv-tech.io/900x439/bbx/common/93d1ebea-a392-43a4-b930-fde516b298e5.webp" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/'}>
                    <img src="https://image.hsv-tech.io/900x439/bbx/common/7181a78e-a04a-461e-952b-5ef636d9a5bb.webp" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/'}>
                    <img src="https://image.hsv-tech.io/900x439/bbx/common/93d1ebea-a392-43a4-b930-fde516b298e5.webp" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/'}>
                    <img src="https://image.hsv-tech.io/900x439/bbx/common/950dcf94-9fb5-47b5-8aef-a2327922dad3.webp" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/'}>
                    <img src="https://image.hsv-tech.io/900x439/bbx/common/1f61423d-5fa8-4101-acd1-8513e05b4db2.webp" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/'}>
                    <img src="https://image.hsv-tech.io/900x439/bbx/common/9d310391-1b94-4f51-b4ff-91cfd9836cb4.webp" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/'}>
                    <img src="https://image.hsv-tech.io/900x439/bbx/common/cad3266c-74be-449b-9680-9749b9091559.webp" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/'}>
                    <img src="https://image.hsv-tech.io/900x439/bbx/common/124b4465-b323-4609-b36f-161385e6b9ee.webp" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/'}>
                    <img src="https://image.hsv-tech.io/900x439/bbx/common/d08cd181-f48d-4567-ba6a-708a110d1b9e.webp" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/'}>
                    <img src="https://image.hsv-tech.io/900x439/bbx/common/1b4629d4-6a1d-4323-946b-f2a81375ae8b.webp" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/'}>
                    <img src="https://image.hsv-tech.io/900x439/bbx/common/f34c628d-957a-4e99-aa1d-87b75fddede4.webp" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/'}>
                    <img src="https://image.hsv-tech.io/900x439/bbx/common/2ecc2fd8-6809-4a29-b218-8bfbd536a248.webp" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/'}>
                    <img src="https://image.hsv-tech.io/900x439/bbx/common/6db78932-52c7-45b4-accb-51d8aac32048.webp" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/'}>
                    <img src="https://image.hsv-tech.io/900x439/bbx/common/4ed8e864-9412-4ee4-ace5-35337cdfe84a.webp" alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/'}>
                    <img src="https://image.hsv-tech.io/900x439/bbx/common/8795a53f-9fbd-4fe6-a1ea-4f3fe3458900.webp" alt="" />
                </Link>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default BrandCarousel