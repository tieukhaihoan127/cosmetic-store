import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import useProductGallery from '../hooks/useProductGallery';
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Thumbs } from "swiper/modules";
import ProductImageCard from './ProductImageCard';

interface ProductMainSwiperProps {
    thumbsSwiper: SwiperType | null;
    setMainSwiper: (swiper: SwiperType) => void;
};

const ProductMainSwiper = ({ thumbsSwiper, setMainSwiper } : ProductMainSwiperProps) => {

    const { images, isXS } = useProductGallery();

    return (
        <div className="min-w-0 self-start sticky top-[150px] mr-[10px] [@media(max-width:1199px)]:ml-[2px] [@media(max-width:1199px)]:mr-[40px] [@media(max-width:992px)]:relative [@media(max-width:992px)]:top-0 [@media(max-width:992px)]:mr-0 [@media(max-width:576px)]:col-span-full">
            <Swiper
                onSwiper={setMainSwiper}
                onSlideChange={(swiper) => thumbsSwiper?.slideTo(swiper.activeIndex)}
                thumbs={{ swiper: thumbsSwiper }}
                navigation={isXS ? {
                    nextEl: '.product-next',
                    prevEl: '.product-prev',
                } : false}
                modules={[Thumbs, Navigation]}
            >
                {images.map((src, i) => (
                    <SwiperSlide key={i}>
                        <ProductImageCard imageUrl={src} />
                    </SwiperSlide>
                ))}
                {isXS &&
                    <div className="product-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 
                                w-[35px] h-[35px] bg-white border-1 border-[#efefef] rounded-full 
                                flex items-center justify-center cursor-pointer shadow-[0_0_4px_rgba(0,0,0,0.25)]">
                        <ArrowBackIosNewOutlinedIcon sx={{ color: 'black', fontSize: 16 }} />
                    </div>
                }
                {isXS &&
                    <div className="product-next absolute right-2 top-1/2 -translate-y-1/2 z-10 
                                w-[35px] h-[35px] bg-white border-1 border-[#efefef] rounded-full 
                                flex items-center justify-center cursor-pointer shadow-[0_0_4px_rgba(0,0,0,0.25)]">
                        <ArrowForwardIosOutlinedIcon sx={{ color: 'black', fontSize: 16 }} />
                    </div>
                }
            </Swiper>
        </div>
    );
};

export default ProductMainSwiper;