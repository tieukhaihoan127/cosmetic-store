import { Swiper, SwiperSlide } from "swiper/react"
import ImageCard from "../components/ui/Card/ImageCard"
import { Navigation, Thumbs } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Divider from "@mui/material/Divider";
import HelpIcon from '@mui/icons-material/Help';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ProductDetailRadio from "../components/ui/Radio/ProductDetailRadio";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SwapCallsOutlinedIcon from '@mui/icons-material/SwapCallsOutlined';

const ProductDetailPage = () => {

    const SLIDES_PER_VIEW = 4;

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null); 
    const isSyncing = useRef(false);
    const [num, setNum] = useState(1);
    const [isSelected, setIsSelected] = useState(false);
    const [value, setValue] = useState('pick-up');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    const handlePrev = () => {
        if (!thumbsSwiper || !mainSwiper) return
        const prevIndex = mainSwiper.activeIndex - 1
        const targetIndex = prevIndex < 0 ? images.length - 1 : prevIndex
        isSyncing.current = true
        mainSwiper.slideTo(targetIndex)
        thumbsSwiper.slideTo(targetIndex)
        isSyncing.current = false
    }

    const handleNext = () => {
        if (!thumbsSwiper || !mainSwiper) return
        const nextIndex = mainSwiper.activeIndex + 1
        const targetIndex = nextIndex >= images.length ? 0 : nextIndex
        isSyncing.current = true
        mainSwiper.slideTo(targetIndex)
        thumbsSwiper.slideTo(targetIndex)
        isSyncing.current = false
    }

    const images = [
        'https://image.hsv-tech.io/0x1920/bbx/common/53dd920f-cd75-45b8-bdd5-fd311def024c.webp',
        'https://image.hsv-tech.io/0x1920/bbx/common/e643a59e-b3e1-4966-acab-a3dba2a03234.webp',
        'https://image.hsv-tech.io/0x1920/bbx/common/9969b9c9-2479-4ec1-9f0d-9090365d8da4.webp',
        'https://image.hsv-tech.io/0x1900/bbx/common/c4d00bb8-6829-4c55-90e4-339f3b1d7d99.webp',
        'https://image.hsv-tech.io/0x1920/bbx/common/0bd5e5da-7e37-4188-8408-ad4cc2f733c6.webp',
        'https://image.hsv-tech.io/0x1920/bbx/common/f38ab282-7dd1-45cc-abc3-02b0efc143b0.webp',
        'https://image.hsv-tech.io/0x1900/bbx/common/45359be5-16ad-4799-8d34-257a15a29ae0.webp',
        'https://image.hsv-tech.io/0x1900/bbx/common/9bba6ba7-e32e-4e7e-95d6-bd5f17555937.webp',
        'https://image.hsv-tech.io/0x1900/bbx/common/5cf8f15d-a0b1-4621-ab80-9721e18e429e.webp',
        'https://image.hsv-tech.io/0x1900/bbx/common/bf8a3fb7-7c2b-432d-ac5b-8dd525a95c1b.webp',
    ]

    const paddedImages = [
        ...images,
        ...Array(SLIDES_PER_VIEW - 1).fill(null)  
    ]

  return (
    <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-12 mt-[20px]">
            <div className="col-span-1 flex flex-col items-center px-[5px] w-[100px]">
                <div onClick={handlePrev} className="thumb-prev z-10 cursor-pointer mb-[12px]">
                    <KeyboardArrowUpIcon sx={{ fontSize: 28 }} />
                </div>
                <div className="flex-1 w-full overflow-hidden">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    onSlideChange={(swiper) => {
                        thumbsSwiper?.slideTo(swiper.activeIndex) 
                    }}
                    onActiveIndexChange={(swiper) => {
                        mainSwiper?.slideTo(swiper.activeIndex)  
                    }}
                    direction="vertical"
                    slidesPerView={4}
                    slidesPerGroup={1}
                    rewind={true} 
                    allowTouchMove={false}
                    watchSlidesProgress  
                    modules={[Thumbs]}
                    className="!h-[50vh]"
                >
                    {paddedImages.map((src, i) => (
                    <SwiperSlide key={i} className="!h-auto">
                        {({ isActive }) => {
                            return src && (
                                <img src={src}
                                    alt={`thumbnail-${i}`}
                                    onClick={() => mainSwiper?.slideTo(i)}
                                    className={`w-[90px] h-[90px] mb-[12px] object-cover rounded cursor-pointer transition-all duration-200
                                    ${isActive
                                        ? "border-2 border-black"
                                        : "border-2 border-transparent opacity-60 hover:opacity-100"
                                    }`}
                                />
                            )
                        }}
                    </SwiperSlide>
                    ))}
                </Swiper>
                </div>
                <div onClick={handleNext} className="thumb-next z-10 cursor-pointer mt-[12px]">
                    <KeyboardArrowDownIcon sx={{ fontSize: 28 }} />
                </div>
            </div>
            <div className="col-span-4">
                <Swiper
                        onSwiper={setMainSwiper} 
                        onSlideChange={(swiper) => thumbsSwiper?.slideTo(swiper.activeIndex)}
                        thumbs={{ swiper: thumbsSwiper }}  
                        modules={[Thumbs, Navigation]}
                    >
                        {images.map((src, i) => (
                            <SwiperSlide key={i}>
                                <ImageCard imageUrl={src}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-6">
                <div className="flex items-center text-[#797979] gap-2 leading-relaxed">
                    <Link to="/" className="text-[12px]">
                        Trang chủ
                    </Link>
                    <div className="text-[14px]">{">"}</div>
                    <Link to="/" className="text-[12px]">
                        Sản phẩm
                    </Link>
                </div>
                <div className="my-[5px] font-bold text-[14px] leading-[20px] text-[#b0100f]">
                    AMUSE
                </div>
                <div className="font-bold p-0 text-[20px]">
                    Son Thạch Bóng Thuần Chay Amuse Jel-Fit Tint 3.8g
                </div>
                <div className="flex mb-[5px] items-center">
                    <div className='flex items-center gap-[5px]'>
                        <StarIcon sx={{ fontSize: 14 }}/>
                        <StarIcon sx={{ fontSize: 14 }}/>
                        <StarIcon sx={{ fontSize: 14 }}/>
                        <StarIcon sx={{ fontSize: 14 }}/>
                        <StarIcon sx={{ fontSize: 14 }}/>
                        <div className='text-[12px] underline ml-1'>(39)</div>
                    </div>
                    <Divider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                        sx={{
                        mx: "8px",
                        height: "15px",
                        alignSelf: "center",
                        display: "block",
                        }}
                    />
                    <div className="flex gap-[10px] items-center">
                        <FavoriteIcon sx={{ fontSize: 14, color: '#c73130' }} />   
                        <div className="text-[12px]">
                            6    
                        </div> 
                    </div>
                    <Divider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                        sx={{
                        mx: "8px",
                        height: "15px",
                        alignSelf: "center",
                        display: "block",
                        }}
                    />
                    <div className="flex">
                        <div className="text-[12px] font-bold mr-1">Xuất xứ:</div> 
                        <div className="text-[12px]">Hàn Quốc</div>
                    </div>
                    <Divider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                        sx={{
                        mx: "8px",
                        height: "15px",
                        alignSelf: "center",
                        display: "block",
                        }}
                    />
                    <div className="flex">
                        <div className="text-[12px] font-bold mr-1">SKU:</div> 
                        <div className="text-[12px]">11112241</div>
                    </div>
                </div>
                <div className="flex gap-[10px] items-center">
                    <div className="text-[20px] font-bold">289.000đ</div>
                    <div className="text-[14px] line-through opacity-50">399.000đ</div>
                    <div className="w-auto h-[19px] bg-[#c73130] rounded-tl-[3px] rounded-tr-[4px] rounded-br-[4px] rounded-bl-[3px] text-[10px] text-white font-bold px-[10px] ml-[12px] flex items-center"  style={{ clipPath: "polygon(8px 0%, 100% 0%, 100% 100%, 8px 100%, 0% 50%)" }}>-28%</div>
                </div>
                <div className="flex items-center justify-between rounded-[10px] border-1 px-[20px] py-[10px] mt-[10px] border-[#efefef]">
                    <div >
                        <b className="font-semibold text-[14px] mr-[5px]">Từ</b>
                        <span className="text-[18px] text-[#0045ca] font-bold">96.333đ</span>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center gap-[6px]">
                            <div className="text-[14px] text-[#777777]">với</div>
                            <img src="https://image.hsv-tech.io/400x0/bbx/common/3a4054ce-a218-4fbb-bfab-944b6c226ff7.webp" alt="" className="max-w-[100%] h-[11px]"/>
                            <HelpIcon sx={{ fontSize: '12px', color: '#777777' }} />
                        </div>
                        <div className="ml-[20px] bg-[#0045ca] rounded-[6px] text-white text-[10px] px-[10px] py-[5px]">
                            Giảm 70K (*)
                        </div>
                    </div>
                </div>
                <div className="py-[8px] px-[15px] mt-[15px] mb-[20px] rounded-[10px] flex items-center justify-between" style={{ backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" }}>
                    <div className="flex items-center">
                        <span>
                            <FlashOnIcon sx={{ fontSize: '30px', color: 'white' }}/>
                        </span>
                        <span className="italic  text-white font-bold">
                            SIÊU DEAL CHỚP NHOÁNG | ĐỘC QUYỀN ONLINE
                        </span>
                    </div>
                    <div className="flex items-center">
                        <div className="text-[14px] bg-white ml-[7px] w-[35px] h-[35px] rounded-[5px] flex items-center justify-center font-bold">00</div>
                        <span className="ml-[8px] text-white">:</span>
                        <div className="text-[14px] bg-white ml-[7px] w-[35px] h-[35px] rounded-[5px] flex items-center justify-center font-bold">00</div>
                        <span className="ml-[8px] text-white">:</span>
                        <div className="text-[14px] bg-white ml-[7px] w-[35px] h-[35px] rounded-[5px] flex items-center justify-center font-bold">22</div>
                        <span className="ml-[8px] text-white">:</span>
                        <div className="text-[14px] bg-white ml-[7px] w-[35px] h-[35px] rounded-[5px] flex items-center justify-center font-bold">40</div>
                    </div>
                </div>
                <div className="mb-[20px]">
                    <div className="flex gap-[10px] text-[14px]">
                        <div className="font-bold">
                            Color:
                        </div>
                        <div>
                            08 Gorgeous Mauve - tím
                        </div>
                    </div>
                    <div className="flex items-center gap-[2px] mt-[5px]">
                        <div className={`rounded-full p-[3px] ${num > 0 ? `cursor-pointer ${isSelected ? 'border-2' : 'border-0'}` : 'border-transparent cursor-not-allowed'}`}>
                            <div className="relative w-[30px] h-[30px] rounded-full bg-[#fea8ae] overflow-hidden">
                            <div
                                className={`absolute inset-0 rounded-full ${num > 0 && 'hidden'}`}
                                style={{ backgroundImage: "linear-gradient(to left top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) calc(50% - 0.8px), rgb(0,0,0) 50%, rgba(0,0,0,0) calc(50% + 0.8px), rgba(0,0,0,0) 100%)" }}
                                />
                            </div>
                        </div>
                        <div className={`rounded-full p-[3px] ${num > 0 ? `cursor-pointer ${isSelected ? 'border-2' : 'border-0'}` : 'border-transparent cursor-not-allowed'}`}>
                            <div className="relative w-[30px] h-[30px] rounded-full bg-[#d56e85] overflow-hidden">
                            <div
                                className={`absolute inset-0 rounded-full ${num > 0 && 'hidden'}`}
                                style={{ backgroundImage: "linear-gradient(to left top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) calc(50% - 0.8px), rgb(0,0,0) 50%, rgba(0,0,0,0) calc(50% + 0.8px), rgba(0,0,0,0) 100%)" }}
                                />
                            </div>
                        </div>
                        <div className={`rounded-full p-[3px] ${num > 0 ? `cursor-pointer ${isSelected ? 'border-2' : 'border-0'}` : 'border-transparent cursor-not-allowed'}`}>
                            <div className="relative w-[30px] h-[30px] rounded-full bg-[#c17276] overflow-hidden">
                            <div
                                className={`absolute inset-0 rounded-full ${num > 0 && 'hidden'}`}
                                style={{ backgroundImage: "linear-gradient(to left top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) calc(50% - 0.8px), rgb(0,0,0) 50%, rgba(0,0,0,0) calc(50% + 0.8px), rgba(0,0,0,0) 100%)" }}
                                />
                            </div>
                        </div>
                        <div className={`rounded-full p-[3px] ${num > 0 ? `cursor-pointer ${isSelected ? 'border-2' : 'border-0'}` : 'border-transparent cursor-not-allowed'}`}>
                            <div className="relative w-[30px] h-[30px] rounded-full bg-[#b15950] overflow-hidden">
                            <div
                                className={`absolute inset-0 rounded-full ${num > 0 && 'hidden'}`}
                                style={{ backgroundImage: "linear-gradient(to left top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) calc(50% - 0.8px), rgb(0,0,0) 50%, rgba(0,0,0,0) calc(50% + 0.8px), rgba(0,0,0,0) 100%)" }}
                                />
                            </div>
                        </div>
                        <div className={`rounded-full p-[3px] ${num > 0 ? `cursor-pointer ${isSelected ? 'border-2' : 'border-0'}` : 'border-transparent cursor-not-allowed'}`}>
                            <div className="relative w-[30px] h-[30px] rounded-full bg-[#c06370] overflow-hidden">
                            <div
                                className={`absolute inset-0 rounded-full ${num > 0 && 'hidden'}`}
                                style={{ backgroundImage: "linear-gradient(to left top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) calc(50% - 0.8px), rgb(0,0,0) 50%, rgba(0,0,0,0) calc(50% + 0.8px), rgba(0,0,0,0) 100%)" }}
                                />
                            </div>
                        </div>
                        <div className={`rounded-full p-[3px] ${num > 0 ? `cursor-pointer ${isSelected ? 'border-2' : 'border-0'}` : 'border-transparent cursor-not-allowed'}`}>
                            <div className="relative w-[30px] h-[30px] rounded-full bg-[#fc7d91] overflow-hidden">
                            <div
                                className={`absolute inset-0 rounded-full ${num > 0 && 'hidden'}`}
                                style={{ backgroundImage: "linear-gradient(to left top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) calc(50% - 0.8px), rgb(0,0,0) 50%, rgba(0,0,0,0) calc(50% + 0.8px), rgba(0,0,0,0) 100%)" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-[#c73130] text-[14px]">
                    Còn 1 sản phẩm
                </div>
                <div className="mt-[20px] rounded-[10px] px-[18px] py-[15px] border-2 border-transparent" style={{
                    background: "linear-gradient(white, white) padding-box, linear-gradient(90deg, rgb(255, 212, 0) 0%, rgb(199, 49, 48) 50.52%, rgb(102, 54, 149) 99.61%) border-box",
                }}>
                    <div className="mb-[5px] text-[18px] font-bold">Hình thức mua hàng</div>
                    <FormControl>
                        <RadioGroup
                            value={value}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="delivery" control={<ProductDetailRadio />} label={<span className="text-[15px] font-bold">Giao hàng</span>} />
                            <div className="flex items-center">
                                <FormControlLabel value="pick-up" control={<ProductDetailRadio />} label={<span className="text-[15px]"><span className="font-bold">Click & Collect</span> Mua và lấy hàng tại cửa hàng</span>} />
                                <div className="flex items-center">
                                    <div className="text-[15px] font-bold">Chọn cửa hàng</div>
                                    <KeyboardArrowDownIcon />
                                </div>
                            </div>
                        </RadioGroup> 
                    </FormControl>
                    <Divider sx={{ marginTop: '15px', marginBottom: '10px' }}/>
                    <div className="flex items-center justify-between cursor-pointer hover:text-[#b0100f] transition-all-ease duration-400">
                        <div className="flex items-end">
                            <StorefrontIcon sx={{ marginRight: '12px', fontSize: '22px', color: '#b0100f' }}/>
                            <div className="text-[14px]">
                                <span className="font-bold mr-[10px]">1/25</span> chi nhánh còn mặt hàng này
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="text-[14px] font-bold leading-[20px]">Xem tất cả các cửa hàng</div>
                            <KeyboardArrowRightIcon sx={{ fontSize: '22px' }}/>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-[10px] mt-[30px]">
                    <div className="flex items-center rounded-[38px] border-2 gap-6 px-[10px] py-[12px] border-[#efefef]">
                        <RemoveOutlinedIcon />
                        <div className="text-[16px] font-bold">1</div>
                        <AddOutlinedIcon />
                    </div>
                    <div className={`flex flex-1 items-center justify-center rounded-[38px] py-[12px] transition-all-ease duration-300 ${value !== "pick-up" ? 'bg-black hover:bg-[#333333] cursor-pointer' : 'bg-[#F7F7F7] border-2 border-[#D9D9D9] cursor-not-allowed'} `}>
                        <ShoppingBasketOutlinedIcon sx={{ color: 'white' }}/>
                        <div className={`ml-[8px] ${value !== "pick-up" ? 'text-white' : 'text-[#D9D9D9] hover:text-white transition-all-ease duration-300'}`}>Thêm vào giỏ hàng</div>
                    </div>
                    <div className={`rounded-[38px] py-[12px] px-[23px] ${value === 'pick-up' ? 'bg-[#F7F7F7] text-[#D9D9D9] hover:text-white transition-all-ease duration-300 cursor-not-allowed' : 'text-white cursor-pointer'}`} style={value !== 'pick-up' ? { backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" } : undefined}>
                        MUA NGAY
                    </div>
                    <div className="w-fit h-[50px] flex items-center justify-center rounded-[38px] px-[14px] border-2">
                        <FavoriteBorderOutlinedIcon sx={{fontSize: '22px' }} />
                    </div>
                </div>
                <div className="mt-[30px] grid grid-cols-2 gap-[10px]">
                    <div className="flex items-center">
                        <StarBorderOutlinedIcon sx={{ fontSize: '24px', marginRight: '10px' }}/>
                        <div className="text-[14px]">Nhận <b>HSV Point</b> cho mỗi lần mua</div>
                    </div>
                    <div className="flex items-center">
                        <VerifiedUserOutlinedIcon sx={{ fontSize: '22px', marginRight: '10px' }}/>
                        <div className="text-[14px]">Cam kết <b>hàng chính hãng</b></div>
                    </div>
                    <div className="flex items-center">
                        <LocalShippingOutlinedIcon sx={{ fontSize: '22px', marginRight: '10px' }}/>
                        <div className="text-[14px]"><b>Miễn phí giao hàng</b> 24h</div>
                    </div>
                    <div className="flex items-center">
                        <SwapCallsOutlinedIcon sx={{ fontSize: '22px', marginRight: '10px' }}/>
                        <div className="text-[14px]">Đổi/trả hàng trong <b>7 ngày</b></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetailPage