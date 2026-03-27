import { Swiper, SwiperSlide } from "swiper/react"
import ImageCard from "../components/ui/Card/ImageCard"
import { Navigation, Thumbs } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Divider from "@mui/material/Divider";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import FlashSaleBanner from "../components/common/Banner/FlashSaleBanner";
import FundinBanner from "../components/common/Banner/FundinBanner";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import StorefrontIcon from '@mui/icons-material/Storefront'
import ProductDetailAttribute from "../components/common/Banner/ProductDetailAttribute";
import Rating from "@mui/material/Rating";
import LinearProgress from "@mui/material/LinearProgress";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import ProductCard from "../components/ui/Card/ProductCard";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import ProductDetailRadio from "../components/ui/Radio/ProductDetailRadio";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { closeDrawer, openDrawer } from "../store/slices/clickAddItemMobile";



const ProductDetailPage = () => {

    const SLIDES_PER_VIEW = 4;

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
    const isSyncing = useRef(false);
    const [num, setNum] = useState(1);
    const [isSelected, setIsSelected] = useState(false);
    const [value, setValue] = useState('delivery');
    const [expanded, setExpanded] = useState(false);
    const [question, setQuestion] = useState('');
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [openStoreDialog, setOpenStoreDialog] = useState(false);
    const [openTimeDialog, setOpenTimeDialog] = useState(false);
    const [openShowroomDialog, setOpenShowroomDialog] = useState(false);
    const [openRatingDialog, setOpenRatingDialog] = useState(false);
    const [helpful, setHelpful] = useState('co');

    const isMD = useMediaQuery('(max-width: 768px)');

    const isXS = useMediaQuery('(max-width: 576px)');

    const isFlexing = useMediaQuery('(max-width: 408px)');

    const dispatch = useAppDispatch();

    const addItemButton = useAppSelector((state) => state.mobileAddProductButton);

    const method = useAppSelector((state) => state.mobileAddProductButton.method);

    const handleSlideChange = (swiper: SwiperType) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    const handleClickExpanded = () => {
        setExpanded(prev => !prev);
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
    ];

    const questions = [
        "Thời gian nhận hàng sau khi đặt hàng trong vòng bao lâu?",
        "Kiểm tra thông tin đơn hàng đã đặt tại đâu?",
        "Làm sao có thể đặt hàng tại website?",
        "Có được đồng kiểm sản phẩm trước khi nhận không?",
        "Làm sao để có thể hủy đơn hàng đã đặt?",
        "Sản phẩm có phải là hàng chính hãng không?",
        "Phương thức mua hàng trả góp như thế nào?",
        "Muốn hỗ trợ đổi trả sản phẩm có được không?",
        "Thời gian nhận hàng sau khi đặt hàng trong vòng bao lâu?",
        "Kiểm tra thông tin đơn hàng đã đặt tại đâu?",
        "Làm sao có thể đặt hàng tại website?",
        "Có được đồng kiểm sản phẩm trước khi nhận không?",
        "Làm sao để có thể hủy đơn hàng đã đặt?",
        "Sản phẩm có phải là hàng chính hãng không?",
        "Phương thức mua hàng trả góp như thế nào?",
        "Muốn hỗ trợ đổi trả sản phẩm có được không?",
    ];

    const paddedImages = [
        ...images,
        ...Array(SLIDES_PER_VIEW - 1).fill(null)
    ];

    return (
        <div className="w-[90%] mx-auto">
            <div className="grid mt-[20px] [grid-template-columns:100px_1fr_50%] [@media(max-width:992px)]:[grid-template-columns:100px_1fr] [@media(max-width:992px)]:grid-rows-[auto_auto]">
                <div className="flex flex-col items-center px-[5px] w-[100px] self-start sticky top-[150px] [@media(max-width:992px)]:relative [@media(max-width:992px)]:top-0 [@media(max-width:576px)]:hidden">
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
                                <ImageCard imageUrl={src} />
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
                <div className="min-w-0 [@media(max-width:992px)]:col-span-full [@media(max-width:992px)]:mt-[15px]">
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
                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly sx={{ color: 'black', fontSize: '14px', gap: '6px' }} />
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
                        <div className="w-auto h-[19px] bg-[#c73130] rounded-tl-[3px] rounded-tr-[4px] rounded-br-[4px] rounded-bl-[3px] text-[10px] text-white font-bold px-[10px] ml-[12px] flex items-center" style={{ clipPath: "polygon(8px 0%, 100% 0%, 100% 100%, 8px 100%, 0% 50%)" }}>-28%</div>
                    </div>
                    <FundinBanner />
                    <FlashSaleBanner />
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
                    <div className="mt-[20px] rounded-[10px] px-[18px] py-[15px] border-2 border-transparent max-md:hidden" style={{
                        background: "linear-gradient(white, white) padding-box, linear-gradient(90deg, rgb(255, 212, 0) 0%, rgb(199, 49, 48) 50.52%, rgb(102, 54, 149) 99.61%) border-box",
                    }}>
                        <div className="mb-[5px] text-[18px] font-bold">Hình thức mua hàng</div>
                        <FormControl>
                            <RadioGroup
                                value={value}
                                onChange={handleChange}
                            >
                                <FormControlLabel value="delivery" control={<ProductDetailRadio />} label={<span className="text-[15px] font-bold">Giao hàng</span>} />
                                <div className="flex items-center flex-wrap">
                                    <FormControlLabel value="pick-up" control={<ProductDetailRadio />} label={<span className="text-[15px]"><span className="font-bold">Click & Collect</span> Mua và lấy hàng tại cửa hàng</span>} />
                                    {/* <div className="flex items-center">
                                        <div onClick={() => setOpenStoreDialog(true)} className="text-[15px] font-bold cursor-pointer">Chọn cửa hàng</div>
                                        <KeyboardArrowDownIcon />
                                    </div> */}
                                </div>
                                <div onClick={() => setOpenStoreDialog(true)} className="text-[14px] flex items-center ml-[28px] cursor-pointer flex-wrap">
                                    <div className="text-[#5aa000] text-[#da0000] font-semibold">Hết hàng</div>
                                    <div className="mx-2">tại</div>
                                    <div className="flex items-center">
                                        <div className="font-bold">BEAUTY BOX VÕ VĂN NGÂN</div>
                                        <KeyboardArrowDownIcon />
                                    </div>
                                    <div className="text-[#0992d0] ml-1 [@media(max-width:1199px)]:mt-1">Chọn cửa hàng khác</div>
                                </div>
                            </RadioGroup>
                        </FormControl>
                        <Divider sx={{ marginTop: '15px', marginBottom: '10px' }} />
                        <div className="flex items-center justify-between cursor-pointer hover:text-[#b0100f] transition-all-ease duration-400 flex-wrap">
                            <div className="flex items-end">
                                <StorefrontIcon sx={{ marginRight: '12px', fontSize: '22px', color: '#b0100f' }} />
                                <div className="text-[14px]">
                                    <span className="font-bold mr-[10px]">1/25</span> chi nhánh còn mặt hàng này
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="text-[14px] font-bold leading-[20px]">Xem tất cả các cửa hàng</div>
                                <KeyboardArrowRightIcon sx={{ fontSize: '22px' }} />
                            </div>
                        </div>
                    </div>
                    <Dialog
                        open={openStoreDialog}
                        onClose={() => setOpenStoreDialog(false)}
                        fullScreen={isXS}
                        sx={{
                            maxHeight: '700px',
                            height: '700px',
                            borderRadius: '20px'
                        }}
                        maxWidth='sm'
                        fullWidth
                        slotProps={{
                            paper: {
                                sx: {
                                    borderRadius: '10px',
                                }
                            }
                        }}
                    >
                        <DialogTitle sx={{ paddingX: '32px', paddingY: '28px' }}>
                            <div className="flex items-center justify-between">
                                <div className="text-[22px] font-semibold">Danh sách cửa hàng</div>
                                <IconButton disableRipple onClick={() => setOpenStoreDialog(false)} sx={{ transition: '300ms ease', '&:hover': { color: 'black' } }}>
                                    <CloseIcon sx={{ fontSize: '30px', }} />
                                </IconButton>
                            </div>
                        </DialogTitle>
                        <DialogContent sx={{ paddingX: '32px', paddingY: '28px' }}>
                            <div className="flex flex-col gap-[20px]">
                                <div className="flex my-[24px]">
                                    <img src="https://image.hsv-tech.io/65x65/bbx/common/53dd920f-cd75-45b8-bdd5-fd311def024c.webp" alt="" className="min-w-[65px] w-[65px] h-[65px]" />
                                    <div className="text-[14px] ml-[15px]">
                                        <div className="font-semibold leading-[20px] mb-[5px]">AMUSE</div>
                                        <div className="leading-[23px] text-[16px] mb-[5px]">Son Thạch Bóng Thuần Chay Amuse Jel-Fit Tint 3.8g</div>
                                        <div>SKU: 11112241</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <Autocomplete
                                        options={['Hà Nội', 'Hồ Chí Minh', 'Bình Dương', 'Hải Phòng']}
                                        slotProps={{
                                            popper: {
                                                placement: 'bottom',
                                                modifiers: [
                                                    {
                                                        name: 'flip',
                                                        enabled: false,
                                                    }
                                                ]
                                            },
                                            paper: {
                                                sx: {
                                                    '& .MuiAutocomplete-option': {
                                                        fontSize: '14px',
                                                        transition: 'all 200ms ease-in-out',
                                                    },
                                                    '& .MuiAutocomplete-option[aria-selected="true"]': {
                                                        backgroundColor: '#EAC7C8 !important',
                                                        color: 'white',
                                                    },
                                                    '& .MuiAutocomplete-option.Mui-focused': {
                                                        backgroundColor: '#EAC7C8 !important',
                                                        color: 'white',
                                                    },
                                                }
                                            }
                                        }}
                                        sx={{ paddingRight: '10px' }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                placeholder="Tỉnh/Thành phố"
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        padding: '11px',
                                                        borderRadius: '5px',
                                                        cursor: 'pointer',
                                                        '& fieldset': {
                                                            border: '1px solid #d9d9d9',
                                                            transition: 'all 200ms ease-in-out',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            border: '1px solid black !important',
                                                        },
                                                    },
                                                    '& .MuiAutocomplete-input': {
                                                        padding: '0 !important',
                                                        cursor: 'pointer',
                                                    },
                                                    '& input::placeholder': {
                                                        fontSize: '14px',
                                                    },
                                                }}
                                            />
                                        )}
                                    />
                                    <Autocomplete
                                        options={[
                                            "Quận 1",
                                            "Quận 2",
                                            "Quận 3",
                                            "Quận 4",
                                            "Quận 5",
                                            "Quận 6",
                                            "Quận 7",
                                            "Quận 8",
                                            "Quận 9",
                                            "Quận 10",
                                            "Quận 11",
                                            "Quận 12",
                                            "Quận Bình Thạnh",
                                            "Quận Bình Tân",
                                            "Quận Gò Vấp",
                                            "Quận Phú Nhuận",
                                            "Quận Tân Bình",
                                            "Quận Tân Phú",
                                            "Quận Thủ Đức",
                                            "Huyện Bình Chánh",
                                            "Huyện Cần Giờ",
                                            "Huyện Củ Chi",
                                            "Huyện Hóc Môn",
                                            "Huyện Nhà Bè",
                                        ]}
                                        slotProps={{
                                            popper: {
                                                placement: 'bottom',
                                                modifiers: [
                                                    {
                                                        name: 'flip',
                                                        enabled: false,
                                                    }
                                                ]
                                            },
                                            paper: {
                                                sx: {
                                                    '& .MuiAutocomplete-option': {
                                                        fontSize: '14px',
                                                    },
                                                    '& .MuiAutocomplete-option[aria-selected="true"]': {
                                                        backgroundColor: '#EAC7C8 !important',
                                                        color: 'white',
                                                    },
                                                    '& .MuiAutocomplete-option.Mui-focused': {
                                                        backgroundColor: '#EAC7C8 !important',
                                                        color: 'white',
                                                    },
                                                }
                                            }
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                placeholder="Quận/huyện"
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        padding: '11px',
                                                        borderRadius: '5px',
                                                        cursor: 'pointer',
                                                        '& fieldset': {
                                                            border: '1px solid #d9d9d9',
                                                            transition: 'all 200ms ease-in-out',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            border: '1px solid black !important',
                                                        },
                                                    },
                                                    '& .MuiAutocomplete-input': {
                                                        padding: '0 !important',
                                                        cursor: 'pointer',
                                                    },
                                                    '& input::placeholder': {
                                                        fontSize: '14px',
                                                    },
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <div className="p-[20px] text-[14px] leading-[1.5715] border-1 border-[#EFEFEF] rounded-[3px] cursor-pointer">
                                        <div className="flex items-center justify-between mb-1">
                                            <div>Hồ Chí Minh</div>
                                            <div className="rounded-[5px] bg-[#f6ffed] text-[#389e0d] px-[12px] py-[3px] text-[12px]">Còn hàng</div>
                                        </div>
                                        <div className="font-bold mb-1">BEAUTY BOX 199 KHÁNH HỘI</div>
                                        <div className="mb-1">Số 199 Khánh Hội, Phường Vĩnh Hội, Thành Phố Hồ Chí Minh, Phường 9, Quận 4</div>
                                        <div className="underline">18002004</div>
                                        <div className="flex items-center mt-[10px] underline gap-[10px]">
                                            <div onClick={() => setOpenShowroomDialog(true)}>Xem showroom</div>
                                            <Dialog
                                                open={openShowroomDialog}
                                                onClose={() => setOpenShowroomDialog(false)}
                                                maxWidth="xs"
                                                fullWidth
                                                slotProps={{
                                                    paper: {
                                                        sx: { borderRadius: '10px' }
                                                    }
                                                }}
                                            >
                                                <DialogContent sx={{ p: 0 }}>
                                                    <img
                                                        src="https://image.hsv-tech.io/890x0/bbx/common/6d01e6c0-e740-4c49-8c9f-67b3e9b9d752.webp"
                                                        alt="showroom"
                                                        className="w-full object-contain"
                                                    />
                                                </DialogContent>
                                            </Dialog>
                                            <div onClick={() => setOpenTimeDialog(true)}>Giờ mở cửa</div>
                                            <Dialog
                                                open={openTimeDialog}
                                                onClose={() => setOpenTimeDialog(false)}
                                                sx={{
                                                    maxHeight: '700px',
                                                    height: '700px',
                                                    borderRadius: '20px'
                                                }}
                                                maxWidth='xs'
                                                fullWidth
                                                slotProps={{
                                                    paper: {
                                                        sx: {
                                                            borderRadius: '10px',
                                                        }
                                                    }
                                                }}
                                            >
                                                <DialogTitle >
                                                    <div className="flex items-center justify-between">
                                                        <div className="text-[24px] font-semibold">Giờ mở cửa</div>
                                                        <IconButton disableRipple onClick={() => setOpenTimeDialog(false)} sx={{ transition: '300ms ease', '&:hover': { color: 'black' } }}>
                                                            <CloseIcon sx={{ fontSize: '30px', }} />
                                                        </IconButton>
                                                    </div>
                                                </DialogTitle>
                                                <DialogContent>
                                                    <div className="flex items-center justify-between text-[14px] leading-[1.5715]">
                                                        <div className="font-bold">Thứ 2 tới thứ 6</div>
                                                        <div>09:00 - 21:00</div>
                                                    </div>
                                                    <div className="flex items-center justify-between text-[14px] leading-[1.5715]">
                                                        <div className="font-bold">Thứ 7</div>
                                                        <div>09:00 - 21:00</div>
                                                    </div>
                                                    <div className="flex items-center justify-between text-[14px] leading-[1.5715]">
                                                        <div className="font-bold">Chủ nhật</div>
                                                        <div>09:00 - 21:00</div>
                                                    </div>
                                                </DialogContent>
                                            </Dialog>
                                            <div>Chi tiết</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                    <div className="flex items-center gap-[10px] mt-[30px] flex-wrap max-md:hidden">
                        <div className="flex items-center rounded-[38px] border-2 gap-6 px-[10px] py-[12px] border-[#efefef]">
                            <RemoveOutlinedIcon />
                            <div className="text-[16px] font-bold">1</div>
                            <AddOutlinedIcon />
                        </div>
                        <div className={`flex flex-1 min-w-[200px] items-center justify-center rounded-[38px] py-[12px] transition-all-ease duration-300 ${value !== "pick-up" ? 'bg-black hover:bg-[#333333] cursor-pointer' : 'bg-[#F7F7F7] border-2 border-[#D9D9D9] cursor-not-allowed'} `}>
                            <ShoppingBasketOutlinedIcon sx={{ color: 'white' }} />
                            <div className={`ml-[8px] ${value !== "pick-up" ? 'text-white' : 'text-[#D9D9D9] hover:text-white transition-all-ease duration-300'}`}>Thêm vào giỏ hàng</div>
                        </div>
                        <div className={`rounded-[38px] py-[12px] px-[23px] ${value === 'pick-up' ? 'bg-[#F7F7F7] text-[#D9D9D9] hover:text-white transition-all-ease duration-300 cursor-not-allowed' : 'text-white cursor-pointer'}`} style={value !== 'pick-up' ? { backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" } : undefined}>
                            MUA NGAY
                        </div>
                        <div className="w-fit h-[50px] flex items-center justify-center rounded-[38px] px-[14px] border-2">
                            <FavoriteBorderOutlinedIcon sx={{ fontSize: '22px' }} />
                        </div>
                    </div>
                    <AppBar
                        position="fixed"
                        sx={{
                            top: 'auto',
                            bottom: 0,
                            background: 'white',
                            display: isMD ? 'block' : 'none'
                        }}
                    >
                        <Toolbar
                            sx={{
                                gap: '10px',
                                paddingX: '10px',
                                paddingY: '15px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <div className="w-fit h-[50px] flex items-center justify-center rounded-[38px] px-[14px] border-2 border-black">
                                <FavoriteBorderOutlinedIcon sx={{ fontSize: '22px', color: 'black' }} />
                            </div>
                            <div onClick={() => dispatch(openDrawer('add-item'))} className={`flex ${isFlexing ? 'flex-none' : 'flex-1'} items-center justify-center rounded-[38px] py-[12px] px-[23px] transition-all-ease duration-300 ${value !== "pick-up" ? 'bg-black hover:bg-[#333333] cursor-pointer' : 'bg-[#F7F7F7] border-2 border-[#D9D9D9] cursor-not-allowed'} `}>
                                {isXS === false && <ShoppingBasketOutlinedIcon sx={{ color: 'white' }} />}
                                <div className={`${isXS ? '' : 'ml-[8px]'} text-[12px] ${value !== "pick-up" ? 'text-white' : 'text-[#D9D9D9] hover:text-white transition-all-ease duration-300'}`}>Thêm vào giỏ hàng</div>
                            </div>
                            <div onClick={() => dispatch(openDrawer('buy-item'))} className={`rounded-[38px] flex-1 text-[12px] text-center ${isXS ? 'py-[12px]' : 'py-[15px]'} px-[23px] ${value === 'pick-up' ? 'bg-[#F7F7F7] text-[#D9D9D9] hover:text-white transition-all-ease duration-300 cursor-not-allowed' : 'text-white cursor-pointer'}`} style={value !== 'pick-up' ? { backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" } : undefined}>
                                Mua Ngay
                            </div>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        anchor="bottom"
                        open={addItemButton.isOpen}
                        onClose={() => dispatch(closeDrawer())}
                        sx={{
                            "& .MuiDrawer-paper": {
                                maxHeight: "90vh",
                                borderTopLeftRadius: "10px",
                                borderTopRightRadius: "10px",
                            }
                        }}
                    >
                        <div className="flex items-center justify-between px-[24px] py-[8px]">
                            <div></div>
                            <div className="font-bold text-[18px]">Chọn phương thức mua hàng</div>
                            <IconButton disableRipple onClick={() => dispatch(closeDrawer())} sx={{ transition: '300ms ease', '&:hover': { color: 'black' } }}>
                                <CloseIcon sx={{ fontSize: '30px', }} />
                            </IconButton>
                        </div>
                        <Divider />
                        <Box
                            sx={{
                                width: 'auto',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '15px'
                            }}
                        >
                            <div className="rounded-[10px] px-[18px] py-[15px] border-2 border-transparent" style={{
                                background: "linear-gradient(white, white) padding-box, linear-gradient(90deg, rgb(255, 212, 0) 0%, rgb(199, 49, 48) 50.52%, rgb(102, 54, 149) 99.61%) border-box",
                            }}>
                                <div className="mb-[5px] text-[18px] font-bold">Hình thức mua hàng</div>
                                <FormControl>
                                    <RadioGroup
                                        value={value}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value="delivery" control={<ProductDetailRadio />} label={<span className="text-[15px] font-bold">Giao hàng</span>} />
                                        <div className="flex items-center flex-wrap">
                                            <FormControlLabel value="pick-up" control={<ProductDetailRadio />} label={<span className="text-[15px]"><span className="font-bold">Click & Collect</span> Mua và lấy hàng tại cửa hàng</span>} />
                                            {/* <div className="flex items-center">
                                        <div onClick={() => setOpenStoreDialog(true)} className="text-[15px] font-bold cursor-pointer">Chọn cửa hàng</div>
                                        <KeyboardArrowDownIcon />
                                    </div> */}
                                        </div>
                                        <div onClick={() => setOpenStoreDialog(true)} className="text-[14px] flex items-center ml-[28px] cursor-pointer flex-wrap">
                                            <div className="text-[#5aa000] text-[#da0000] font-semibold">Hết hàng</div>
                                            <div className="mx-2">tại</div>
                                            <div className="flex items-center">
                                                <div className="font-bold">BEAUTY BOX VÕ VĂN NGÂN</div>
                                                <KeyboardArrowDownIcon />
                                            </div>
                                            <div className="text-[#0992d0] ml-1 [@media(max-width:1199px)]:mt-1">Chọn cửa hàng khác</div>
                                        </div>
                                    </RadioGroup>
                                </FormControl>
                                <Divider sx={{ marginTop: '15px', marginBottom: '10px' }} />
                                <div className="flex items-center justify-between cursor-pointer hover:text-[#b0100f] transition-all-ease duration-400 flex-wrap">
                                    <div className="flex items-end">
                                        <StorefrontIcon sx={{ marginRight: '12px', fontSize: '22px', color: '#b0100f' }} />
                                        <div className="text-[14px]">
                                            <span className="font-bold mr-[10px]">1/25</span> chi nhánh còn mặt hàng này
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="text-[14px] font-bold leading-[20px]">Xem tất cả các cửa hàng</div>
                                        <KeyboardArrowRightIcon sx={{ fontSize: '22px' }} />
                                    </div>
                                </div>
                            </div>
                            <Dialog
                                open={openStoreDialog}
                                onClose={() => setOpenStoreDialog(false)}
                                fullScreen={isXS}
                                sx={{
                                    maxHeight: '700px',
                                    height: '700px',
                                    borderRadius: '20px'
                                }}
                                maxWidth='sm'
                                fullWidth
                                slotProps={{
                                    paper: {
                                        sx: {
                                            borderRadius: '10px',
                                        }
                                    }
                                }}
                            >
                                <DialogTitle sx={{ paddingX: '32px', paddingY: '28px' }}>
                                    <div className="flex items-center justify-between">
                                        <div className="text-[22px] font-semibold">Danh sách cửa hàng</div>
                                        <IconButton disableRipple onClick={() => setOpenStoreDialog(false)} sx={{ transition: '300ms ease', '&:hover': { color: 'black' } }}>
                                            <CloseIcon sx={{ fontSize: '30px', }} />
                                        </IconButton>
                                    </div>
                                </DialogTitle>
                                <DialogContent sx={{ paddingX: '32px', paddingY: '28px' }}>
                                    <div className="flex flex-col gap-[20px]">
                                        <div className="flex my-[24px]">
                                            <img src="https://image.hsv-tech.io/65x65/bbx/common/53dd920f-cd75-45b8-bdd5-fd311def024c.webp" alt="" className="min-w-[65px] w-[65px] h-[65px]" />
                                            <div className="text-[14px] ml-[15px]">
                                                <div className="font-semibold leading-[20px] mb-[5px]">AMUSE</div>
                                                <div className="leading-[23px] text-[16px] mb-[5px]">Son Thạch Bóng Thuần Chay Amuse Jel-Fit Tint 3.8g</div>
                                                <div>SKU: 11112241</div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <Autocomplete
                                                options={['Hà Nội', 'Hồ Chí Minh', 'Bình Dương', 'Hải Phòng']}
                                                slotProps={{
                                                    popper: {
                                                        placement: 'bottom',
                                                        modifiers: [
                                                            {
                                                                name: 'flip',
                                                                enabled: false,
                                                            }
                                                        ]
                                                    },
                                                    paper: {
                                                        sx: {
                                                            '& .MuiAutocomplete-option': {
                                                                fontSize: '14px',
                                                                transition: 'all 200ms ease-in-out',
                                                            },
                                                            '& .MuiAutocomplete-option[aria-selected="true"]': {
                                                                backgroundColor: '#EAC7C8 !important',
                                                                color: 'white',
                                                            },
                                                            '& .MuiAutocomplete-option.Mui-focused': {
                                                                backgroundColor: '#EAC7C8 !important',
                                                                color: 'white',
                                                            },
                                                        }
                                                    }
                                                }}
                                                sx={{ paddingRight: '10px' }}
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        placeholder="Tỉnh/Thành phố"
                                                        sx={{
                                                            '& .MuiOutlinedInput-root': {
                                                                padding: '11px',
                                                                borderRadius: '5px',
                                                                cursor: 'pointer',
                                                                '& fieldset': {
                                                                    border: '1px solid #d9d9d9',
                                                                    transition: 'all 200ms ease-in-out',
                                                                },
                                                                '&.Mui-focused fieldset': {
                                                                    border: '1px solid black !important',
                                                                },
                                                            },
                                                            '& .MuiAutocomplete-input': {
                                                                padding: '0 !important',
                                                                cursor: 'pointer',
                                                            },
                                                            '& input::placeholder': {
                                                                fontSize: '14px',
                                                            },
                                                        }}
                                                    />
                                                )}
                                            />
                                            <Autocomplete
                                                options={[
                                                    "Quận 1",
                                                    "Quận 2",
                                                    "Quận 3",
                                                    "Quận 4",
                                                    "Quận 5",
                                                    "Quận 6",
                                                    "Quận 7",
                                                    "Quận 8",
                                                    "Quận 9",
                                                    "Quận 10",
                                                    "Quận 11",
                                                    "Quận 12",
                                                    "Quận Bình Thạnh",
                                                    "Quận Bình Tân",
                                                    "Quận Gò Vấp",
                                                    "Quận Phú Nhuận",
                                                    "Quận Tân Bình",
                                                    "Quận Tân Phú",
                                                    "Quận Thủ Đức",
                                                    "Huyện Bình Chánh",
                                                    "Huyện Cần Giờ",
                                                    "Huyện Củ Chi",
                                                    "Huyện Hóc Môn",
                                                    "Huyện Nhà Bè",
                                                ]}
                                                slotProps={{
                                                    popper: {
                                                        placement: 'bottom',
                                                        modifiers: [
                                                            {
                                                                name: 'flip',
                                                                enabled: false,
                                                            }
                                                        ]
                                                    },
                                                    paper: {
                                                        sx: {
                                                            '& .MuiAutocomplete-option': {
                                                                fontSize: '14px',
                                                            },
                                                            '& .MuiAutocomplete-option[aria-selected="true"]': {
                                                                backgroundColor: '#EAC7C8 !important',
                                                                color: 'white',
                                                            },
                                                            '& .MuiAutocomplete-option.Mui-focused': {
                                                                backgroundColor: '#EAC7C8 !important',
                                                                color: 'white',
                                                            },
                                                        }
                                                    }
                                                }}
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        placeholder="Quận/huyện"
                                                        sx={{
                                                            '& .MuiOutlinedInput-root': {
                                                                padding: '11px',
                                                                borderRadius: '5px',
                                                                cursor: 'pointer',
                                                                '& fieldset': {
                                                                    border: '1px solid #d9d9d9',
                                                                    transition: 'all 200ms ease-in-out',
                                                                },
                                                                '&.Mui-focused fieldset': {
                                                                    border: '1px solid black !important',
                                                                },
                                                            },
                                                            '& .MuiAutocomplete-input': {
                                                                padding: '0 !important',
                                                                cursor: 'pointer',
                                                            },
                                                            '& input::placeholder': {
                                                                fontSize: '14px',
                                                            },
                                                        }}
                                                    />
                                                )}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-[10px]">
                                            <div className="p-[20px] text-[14px] leading-[1.5715] border-1 border-[#EFEFEF] rounded-[3px] cursor-pointer">
                                                <div className="flex items-center justify-between mb-1">
                                                    <div>Hồ Chí Minh</div>
                                                    <div className="rounded-[5px] bg-[#f6ffed] text-[#389e0d] px-[12px] py-[3px] text-[12px]">Còn hàng</div>
                                                </div>
                                                <div className="font-bold mb-1">BEAUTY BOX 199 KHÁNH HỘI</div>
                                                <div className="mb-1">Số 199 Khánh Hội, Phường Vĩnh Hội, Thành Phố Hồ Chí Minh, Phường 9, Quận 4</div>
                                                <div className="underline">18002004</div>
                                                <div className="flex items-center mt-[10px] underline gap-[10px]">
                                                    <div onClick={() => setOpenShowroomDialog(true)}>Xem showroom</div>
                                                    <Dialog
                                                        open={openShowroomDialog}
                                                        onClose={() => setOpenShowroomDialog(false)}
                                                        maxWidth="xs"
                                                        fullWidth
                                                        slotProps={{
                                                            paper: {
                                                                sx: { borderRadius: '10px' }
                                                            }
                                                        }}
                                                    >
                                                        <DialogContent sx={{ p: 0 }}>
                                                            <img
                                                                src="https://image.hsv-tech.io/890x0/bbx/common/6d01e6c0-e740-4c49-8c9f-67b3e9b9d752.webp"
                                                                alt="showroom"
                                                                className="w-full object-contain"
                                                            />
                                                        </DialogContent>
                                                    </Dialog>
                                                    <div onClick={() => setOpenTimeDialog(true)}>Giờ mở cửa</div>
                                                    <Dialog
                                                        open={openTimeDialog}
                                                        onClose={() => setOpenTimeDialog(false)}
                                                        sx={{
                                                            maxHeight: '700px',
                                                            height: '700px',
                                                            borderRadius: '20px'
                                                        }}
                                                        maxWidth='xs'
                                                        fullWidth
                                                        slotProps={{
                                                            paper: {
                                                                sx: {
                                                                    borderRadius: '10px',
                                                                }
                                                            }
                                                        }}
                                                    >
                                                        <DialogTitle >
                                                            <div className="flex items-center justify-between">
                                                                <div className="text-[24px] font-semibold">Giờ mở cửa</div>
                                                                <IconButton disableRipple onClick={() => setOpenTimeDialog(false)} sx={{ transition: '300ms ease', '&:hover': { color: 'black' } }}>
                                                                    <CloseIcon sx={{ fontSize: '30px', }} />
                                                                </IconButton>
                                                            </div>
                                                        </DialogTitle>
                                                        <DialogContent>
                                                            <div className="flex items-center justify-between text-[14px] leading-[1.5715]">
                                                                <div className="font-bold">Thứ 2 tới thứ 6</div>
                                                                <div>09:00 - 21:00</div>
                                                            </div>
                                                            <div className="flex items-center justify-between text-[14px] leading-[1.5715]">
                                                                <div className="font-bold">Thứ 7</div>
                                                                <div>09:00 - 21:00</div>
                                                            </div>
                                                            <div className="flex items-center justify-between text-[14px] leading-[1.5715]">
                                                                <div className="font-bold">Chủ nhật</div>
                                                                <div>09:00 - 21:00</div>
                                                            </div>
                                                        </DialogContent>
                                                    </Dialog>
                                                    <div>Chi tiết</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                            <div className="flex items-center justify-between rounded-[38px] border-2 gap-6 px-[10px] py-[12px] my-[10px] border-[#efefef]">
                                <RemoveOutlinedIcon />
                                <div className="text-[16px] font-bold">1</div>
                                <AddOutlinedIcon />
                            </div>
                            {method === 'add-item' && 
                                <div className={`flex flex-1 items-center justify-center rounded-[38px] py-[12px] px-[23px] transition-all-ease duration-300 ${value !== "pick-up" ? 'bg-black hover:bg-[#333333] cursor-pointer' : 'bg-[#F7F7F7] border-2 border-[#D9D9D9] cursor-not-allowed'} `}>
                                    <ShoppingBasketOutlinedIcon sx={{ color: 'white' }} />
                                    <div className={`ml-[8px] text-[12px] ${value !== "pick-up" ? 'text-white' : 'text-[#D9D9D9] hover:text-white transition-all-ease duration-300'}`}>Thêm vào giỏ hàng</div>
                                </div>
                            }
                            {method === 'buy-item' && 
                                <div className={`rounded-[38px] flex-1 text-[12px] text-center py-[15px] px-[23px] ${value === 'pick-up' ? 'bg-[#F7F7F7] text-[#D9D9D9] hover:text-white transition-all-ease duration-300 cursor-not-allowed' : 'text-white cursor-pointer'}`} style={value !== 'pick-up' ? { backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" } : undefined}>
                                    Mua Ngay
                                </div>
                            }
                        </Box>
                    </Drawer>
                    <ProductDetailAttribute />
                </div>
            </div>
            <Divider sx={{ marginY: '15px' }} />
            <div className="grid grid-cols-12 mb-[40px]">
                <div className="col-span-4 text-[24px] font-bold leading-[35px] [@media(max-width:1199px)]:col-span-12">
                    Giới thiệu
                </div>
                <div className="col-span-8 p-[10px] [@media(max-width:1199px)]:col-span-12">
                    <div className={` ${expanded ? 'max-h-[100000000px]' : 'max-h-[110px]'} overflow-hidden relative`}>
                        <div className="p-[10px] text-[14px] italic">
                            <p className="mt-[16px] pb-[16px]">
                                <b className="mr-1">Công dụng chính:</b> Son tint với công thức Jel-fit độc đáo vừa giúp duy trì màu sắc lâu trôi suốt 12h, đồng thời tạo hiệu ứng môi căng mướt, tươi tắn đầy sức sống.
                            </p>
                            <p><b className="mr-1">Hiệu ứng:</b> bóng</p>
                        </div>
                        <img src="https://image.hsv-tech.io/bbx/common/14d384ff-977c-4bff-a60d-9ff156068ab3.webp" alt="" />
                        <img src="https://image.hsv-tech.io/bbx/common/d585c1bd-d5c5-49aa-afee-a90183aec6eb.webp" alt="" />
                        <img src="https://image.hsv-tech.io/bbx/common/45fc73d7-62e1-4219-9bb4-975575737241.webp" alt="" className="mx-[20px]" />
                        <img src="https://image.hsv-tech.io/bbx/common/c8c01d4a-f4ff-456f-bb10-30a139d342ba.webp" alt="" />
                        <img src="https://image.hsv-tech.io/bbx/common/c8c01d4a-f4ff-456f-bb10-30a139d342ba.webp" alt="" className="mx-[20px]" />
                        <img src="https://image.hsv-tech.io/bbx/common/7ec322c8-cea5-4951-9951-2863fa23b605.webp" alt="" />
                        <img src="https://image.hsv-tech.io/bbx/common/ce8cd9fd-d6b5-4edc-b001-273d6b146159.webp" alt="" />
                        <img src="https://image.hsv-tech.io/bbx/common/e91f6da4-9af6-4bf0-844c-8845b8836712.webp" alt="" />
                        <img src="https://image.hsv-tech.io/bbx/common/4185ba7f-732f-42b6-b3b6-70f20564a9cc.webp" alt="" />
                        <img src="https://image.hsv-tech.io/bbx/common/0fc29b7f-a5cd-417c-b8c7-c18b7269b263.webp" alt="" />
                        <div className="text-[14px] p-[10px]">
                            <p className="mt-[16px] pb-[16px]">Son tint bóng Amuse Jel-fit Tint dạng thạch thuần chay, kết hợp được ưu điểm của son tint lâu trôi và son bóng cùng lớp gel dưỡng ẩm, tạo nên một sản phẩm hoàn hảo cho làn môi luôn căng mịn và tươi mới. Cơ chế Triple Glow - kết cấu gel bóng mượt và dưỡng ẩm từ bên trong, chứa dầu nhẹ và màng film khóa màu, giúp son bám chặt vào môi và tạo lớp phủ mềm mịn như thạch. Nhờ kết cấu dạng thạch đặc biệt này giúp son Jel-fit Tint giảm độ dính, tránh khô môi và giữ màu, độ bóng lẫn độ ẩm suốt 12 giờ.</p>
                            <p className="pb-[16px] mb-[16px]">Với 8 màu son lâu trôi và trong suốt, Amuse Jel-fit Tint tạo cảm giác nhẹ nhàng như thoa một lớp gel mượt mà lên môi, mang đến đôi môi căng mọng và rạng rỡ. Thiết kế mới với bao bì trong suốt và kích thước tiện lợi dễ mang theo, thể hiện rõ màu sắc thương hiệu.</p>
                        </div>
                        <div className="p-[10px] text-[14px]">
                            <h2 className="text-[30px] font-bold mt-[36px]">Điểm nổi bật của son tint thuần chay Amuse Jel-Fit Tint</h2>
                            <p className="my-[16px]">- Khả năng lên màu & duy trì màu sắc đến 12 tiếng với công nghệ Jel-fit</p>
                            <p className="my-[16px]">- Bổ sung độ ẩm với thành phần vitamin E & hyaluronic acid giúp chăm sóc đôi môi không khô, nứt nẻ, duy trì sắc môi rực rỡ cùng đôi môi khỏe khoắn</p>
                            <p className="my-[16px]">- Son tint tạo lớp dầu và màng phim mỏng bao phủ lên môi giống lớp thạch, tạo hiệu ứng môi căng mọng và đầy đặn sức sống</p>
                            <p className="my-[16px]">- Kết cấu dạng thạch bám dính độc đáo, giúp giảm độ lem, độ dính và khô, đồng thời giữ màu, độ sáng và độ ẩm trong 12 giờ. Ngoài ra, công thức dạng tint thạch giúp giảm độ chuyển màu, màu son khô nhanh và giữ màu lâu hơn.</p>
                            <p className="my-[16px]">- Sở hữu bảng màu sắc mới, tươi tắn, phù hợp với giới trẻ. Đặc biệt là thiết kế độc đáo của Muse với vỏ ngoài nhỏ nhắn, nắp trong suốt có thể nhìn rõ màu sắc bên trong của son môi</p>
                            <h2 className="text-[30px] font-bold mt-[36px]">Bảng màu son bóng Jel-Fit Tint</h2>
                            <p className="my-[16px]">01 Boksoonga Jelly: hồng </p>
                            <p className="my-[16px]">02 Healthy Salmon: hồng san hô</p>
                            <p className="my-[16px]">05 Oat Fig: hồng đấ</p>
                            <p className="my-[16px]">06 Seoul Girl: hồng ánh tím</p>
                            <p className="my-[16px]">07 Caramel: cam caramel</p>
                            <p className="my-[16px]">08 Gorgeous Mauve: tím</p>
                            <div className="p-[10px] italic">*Màu son lên môi sẽ khác nhau, tùy vào sắc độ môi của mỗi người. Đối với các dòng son Amuse, màu son thực tế sẽ có màu khác (nhạt hơn, vì kết cấu dạng tint cho sắc thái trong trẻo, tự nhiên hơn) so với màu vỏ son bên ngoài. Do đó, khách hàng cần tham khảo kỹ trước khi chọn mua </div>
                            <h2 className="text-[30px] font-bold mt-[36px]">Hướng dẫn sử dụng</h2>
                            <p className="my-[16px]">Thoa trực tiếp lên môi, theo sở thích tô lòng môi hoặc full môi.</p>
                        </div>
                        {!expanded && (
                            <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-white to-transparent pointer-events-none" />
                        )}
                    </div>
                    <div onClick={handleClickExpanded} className="text-black mt-[20px] font-bold text-[14px] inline-block cursor-pointer trasition-all duration-300 hover:underline px-[15px] py-[8px] w-full text-center">
                        {expanded ? 'ẨN BỚT NỘI DUNG' : 'XEM THÊM NỘI DUNG'}
                    </div>
                </div>
            </div>
            <Divider />
            <div className="grid grid-cols-12 mt-[50px]">
                <div className="col-span-4 w-[90%] pr-[20px] [@media(max-width:1199px)]:pr-0 [@media(max-width:1199px)]:col-span-12 [@media(max-width:1199px)]:mb-[30px]">
                    <div className="flex items-center justify-between mb-[10px]">
                        <div className="text-[24px] font-bold leading-[35px]">39 đánh giá</div>
                        <div onClick={() => setOpenRatingDialog(true)} className="underline leading-[1.5715] font-semibold text-[14px] cursor-pointer">VIẾT ĐÁNH GIÁ</div>
                    </div>
                    <Dialog
                        open={openRatingDialog}
                        onClose={() => setOpenRatingDialog(false)}
                        sx={{
                            maxHeight: '700px',
                            height: '700px',
                            borderRadius: '20px'
                        }}
                        maxWidth='md'
                        fullWidth
                        slotProps={{
                            paper: {
                                sx: {
                                    borderRadius: '10px',
                                    '@media (max-width: 768px)': {
                                        margin: 0,
                                        maxWidth: '100% !important',
                                        width: '100%',
                                        borderRadius: 0,
                                    }
                                }
                            }
                        }}
                    >
                        <DialogTitle sx={{ paddingX: '24px', paddingTop: '30px', paddingBottom: '16px' }}>
                            <div className="flex items-center justify-between">
                                <div></div>
                                <div className="text-[24px] font-semibold">Viết đánh giá</div>
                                <IconButton disableRipple onClick={() => setOpenRatingDialog(false)} sx={{ transition: '300ms ease', '&:hover': { color: 'black' } }}>
                                    <CloseIcon sx={{ fontSize: '30px', }} />
                                </IconButton>
                            </div>
                        </DialogTitle>
                        <DialogContent sx={{ paddingX: '50px' }}>
                            <div className="p-[20px] my-[24px] bg-[#EFEFEF] rounded-[10px] flex items-center">
                                <img src="https://image.hsv-tech.io/65x65/bbx/common/53dd920f-cd75-45b8-bdd5-fd311def024c.webp" alt="" className="w-[65px] h-[65px] min-h-[65px]" />
                                <div className="ml-[15px] flex-1">
                                    <div className="text-[14px] font-semibold leading-[20px]">AMUSE</div>
                                    <div className="leading-[23px]">Son Thạch Bóng Thuần Chay Amuse Jel-Fit Tint 3.8g</div>
                                </div>
                            </div>
                            <div>
                                <div className="grid grid-cols-2 max-md:grid-cols-1">
                                    <div className="mb-[10px] max-md:mb-[20px]">
                                        <div className="pb-[8px] leading-[1.5715] text-[14px]">Bạn có sẵn sàng giới thiệu sản phẩm này không?</div>
                                        <ToggleButtonGroup
                                            value={helpful}
                                            exclusive
                                            onChange={(_, newValue) => { if (newValue !== null) setHelpful(newValue) }}
                                            sx={{
                                                borderRadius: '999px',
                                                border: '1px solid #e0e0e0',
                                                overflow: 'hidden',
                                                '& .MuiToggleButton-root': {
                                                    border: 'none',
                                                    fontSize: '14px',
                                                    fontWeight: '700',
                                                    padding: '7px 15px',
                                                    textTransform: 'none',
                                                    transition: 'background-color 300ms ease, color 300ms ease, border-radius 300ms ease',
                                                },
                                                '& .MuiToggleButton-root.Mui-selected': {
                                                    backgroundColor: 'black',
                                                    color: 'white',
                                                    borderRadius: '999px',
                                                    '&:hover': {
                                                        backgroundColor: '#333',
                                                    }
                                                },
                                                '& .MuiToggleButton-root:not(.Mui-selected)': {
                                                    backgroundColor: 'white',
                                                    color: 'black',
                                                },
                                            }}
                                        >
                                            <ToggleButton value="co" disableRipple>Có</ToggleButton>
                                            <ToggleButton value="khong" disableRipple>Không</ToggleButton>
                                        </ToggleButtonGroup>
                                    </div>
                                    <div className="mb-[10px]">
                                        <div className="pb-[8px] leading-[1.5715] text-[14px]">Đánh giá chung <span className="text-red-500">*</span></div>
                                        <Rating name="half-rating-read" defaultValue={5} precision={1} sx={{ color: '#FADB14', fontSize: '32px', gap: '8px' }} />
                                    </div>
                                </div>
                                <Divider sx={{ marginY: '15px' }} />
                                <div className="grid grid-cols-2 max-md:grid-cols-1">
                                    <div className="pr-[10px] mb-[10px] max-md:mb-[20px] max-md:pr-0">
                                        <div className="pb-[8px] leading-[1.5715] text-[14px]">Biệt danh <span className="text-red-500">*</span></div>
                                        <input type="text" placeholder="v.d. Vincent" className="w-full p-[11px] text-[16px] rounded-[5px] border border-[#d9d9d9] outline-none transition-all ease-in-out duration-200 focus:border-black placeholder:text-[14px] hover:border-black cursor-pointer" />
                                    </div>
                                    <div className="pl-[10px] mb-[10px] max-md:pl-0">
                                        <div className="pb-[8px] leading-[1.5715] text-[14px]">Email <span className="text-red-500">*</span></div>
                                        <input type="text" placeholder="v.d. abc@gmail.com" className="w-full p-[11px] text-[16px] rounded-[5px] border border-[#d9d9d9] outline-none transition-all ease-in-out duration-200 focus:border-black placeholder:text-[14px] hover:border-black cursor-pointer" />
                                    </div>
                                </div>
                                <Divider sx={{ marginY: '15px' }} />
                                <div className="grid grid-cols-2 max-md:grid-cols-1">
                                    <div className="pr-[10px] mb-[10px] max-md:mb-[20px] max-md:pr-0">
                                        <div className="pb-[8px] leading-[1.5715] text-[14px]">Tóm tắt đánh giá <span className="text-red-500">*</span></div>
                                        <input type="text" placeholder="Tóm tắt đánh giá của bạn" className="w-full p-[11px] text-[16px] rounded-[5px] border border-[#d9d9d9] outline-none transition-all ease-in-out duration-200 focus:border-black placeholder:text-[14px] hover:border-black cursor-pointer" />
                                        <div className="text-[14px] leading-[22px] text-[#646464] mt-[10px] md:hidden">
                                            Tóm tắt mọi thứ trong 1 câu. Ví dụ: Tôi cực kì ưng ý
                                        </div>
                                    </div>
                                    <div className="pl-[10px] mb-[10px] max-md:pl-0">
                                        <div className="pb-[8px] leading-[1.5715] text-[14px]">Hình ảnh</div>
                                        <div className="flex items-center px-[15px] py-[8px] border-1 border-[#d9d9d9] rounded-[38px] h-[50px] w-fit cursor-pointer">
                                            <FileUploadIcon sx={{ fontSize: '18px' }} />
                                            <div className="ml-[8px] text-[14px] leading-[1.5715]">
                                                Tải ảnh lên
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-[14px] leading-[22px] text-[#646464] mb-[20px] max-md:hidden">
                                    Tóm tắt mọi thứ trong 1 câu. Ví dụ: Tôi cực kì ưng ý
                                </div>
                                <div className="grid grid-cols-1 mb-[10px] max-md:mt-[10px]">
                                    <div className="pb-[8px] leading-[1.5715] text-[14px]">Đánh giá chi tiết</div>
                                    <textarea name="" id="" placeholder="Viết đánh giá chi tiết" className="w-full h-[100px] text-[16px] p-[11px] border border-gray-300 hover:border-black rounded-[5px] focus:outline-none focus:shadow-[0_0_0_2px_rgb(234,199,200)] transition-all duration-200 ease-in-out whitespace-nowrap overflow-x-auto cursor-pointer"></textarea>
                                </div>
                                <div className="text-[14px] leading-[22px] text-[#646464] mb-[20px]" >
                                    Bạn có thể nói thêm về sản phẩm ở dưới đây, ví dụ như độ hoàn thiện, sự thoải mái
                                </div>
                                <div className="mt-[30px] flex items-center justify-center px-[40px] rounded-[38px] text-white w-fit mx-auto h-[40px] text-[14px] font-bold cursor-pointer mb-[10px]" style={{ backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" }}>GỬI CHO CHÚNG TÔI</div>
                            </div>
                        </DialogContent>
                    </Dialog>
                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly sx={{ color: 'black', fontSize: '32px', gap: '6px', marginBottom: '20px' }} />
                    <div>
                        <div className="flex items-center mb-[15px]">
                            <div className="mr-[20px] text-[18px]">5</div>
                            <LinearProgress variant="determinate" value={95} sx={{ backgroundColor: '#DFDFDF', flex: 1, '& .MuiLinearProgress-bar': { backgroundColor: 'black' } }} className="flex-1" />
                            <div className="ml-[20px] text-[16px]">(37)</div>
                        </div>
                        <div className="flex items-center mb-[15px]">
                            <div className="mr-[20px] text-[18px]">4</div>
                            <LinearProgress variant="determinate" value={5} sx={{ backgroundColor: '#DFDFDF', flex: 1, '& .MuiLinearProgress-bar': { backgroundColor: 'black' } }} className="flex-1" />
                            <div className="ml-[20px] text-[16px]">(2)</div>
                        </div>
                        <div className="flex items-center mb-[15px]">
                            <div className="mr-[20px] text-[18px]">3</div>
                            <LinearProgress variant="determinate" value={0} sx={{ backgroundColor: '#DFDFDF', flex: 1, '& .MuiLinearProgress-bar': { backgroundColor: 'black' } }} className="flex-1" />
                            <div className="ml-[20px] text-[16px]">(0)</div>
                        </div>
                        <div className="flex items-center mb-[15px]">
                            <div className="mr-[20px] text-[18px]">2</div>
                            <LinearProgress variant="determinate" value={0} sx={{ backgroundColor: '#DFDFDF', flex: 1, '& .MuiLinearProgress-bar': { backgroundColor: 'black' } }} className="flex-1" />
                            <div className="ml-[20px] text-[16px]">(0)</div>
                        </div>
                        <div className="flex items-center mb-[15px]">
                            <div className="mr-[20px] text-[18px]">1</div>
                            <LinearProgress variant="determinate" value={0} sx={{ backgroundColor: '#DFDFDF', flex: 1, '& .MuiLinearProgress-bar': { backgroundColor: 'black' } }} className="flex-1" />
                            <div className="ml-[20px] text-[16px]">(0)</div>
                        </div>
                    </div>
                </div>
                <div className="col-span-8 px-[10px] [@media(max-width:1199px)]:col-span-12">
                    <div>
                        <div className="p-0 mb-[15px]">
                            <div className="text-14px">
                                eopihanta
                            </div>
                            <div className="flex items-center gap-[20px]">
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly sx={{ color: 'black', fontSize: '14px', gap: '8px' }} />
                                <div className="text-[14px] leading-[20px] text-[#828282] ">
                                    10/03/2026 22:08
                                </div>
                            </div>
                            <div className="my-[10px] leading-[23px] text-[14px]">
                                Mau trôi lớp bóng, còn lại bao lì , màu hơi trầm
                            </div>
                            <div className="pl-[44px] mt-[20px] mb-[30px]">
                                <div className="flex items-center gap-[20px] text-[14px]">
                                    <div className="text-[#b0100f] font-semibold">Beauty Box Vietnam</div>
                                    <div>10/20/2025 04:18</div>
                                </div>
                                <div className="text-[12px] mt-[5px] mb-[15px]">
                                    Cảm ơn bạn đã đánh giá sản phẩm của AMUSE 5 sao! Chúng tôi rất vui vì bạn đã có trải nghiệm tốt với sản phẩm. Ý kiến của bạn chính là động lực giúp AMUSE tiếp tục cố gắng và phục vụ khách hàng, đem đến những sản phẩm tốt nhất. Hy vọng bạn sẽ tiếp tục yêu thích và sử dụng sản phẩm của AMUSE
                                </div>
                            </div>
                            <Divider sx={{ marginTop: '20px' }} />
                        </div>
                        <div className="p-0 mb-[15px]">
                            <div className="text-14px">
                                eopihanta
                            </div>
                            <div className="flex items-center gap-[20px]">
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly sx={{ color: 'black', fontSize: '14px', gap: '8px' }} />
                                <div className="text-[14px] leading-[20px] text-[#828282] ">
                                    10/03/2026 22:08
                                </div>
                            </div>
                            <div className="my-[10px] leading-[23px] text-[14px]">
                                Mau trôi lớp bóng, còn lại bao lì , màu hơi trầm
                            </div>
                            <div className="pl-[44px] mt-[20px] mb-[30px]">
                                <div className="flex items-center gap-[20px] text-[14px]">
                                    <div className="text-[#b0100f] font-semibold">Beauty Box Vietnam</div>
                                    <div>10/20/2025 04:18</div>
                                </div>
                                <div className="text-[12px] mt-[5px] mb-[15px]">
                                    Cảm ơn bạn đã đánh giá sản phẩm của AMUSE 5 sao! Chúng tôi rất vui vì bạn đã có trải nghiệm tốt với sản phẩm. Ý kiến của bạn chính là động lực giúp AMUSE tiếp tục cố gắng và phục vụ khách hàng, đem đến những sản phẩm tốt nhất. Hy vọng bạn sẽ tiếp tục yêu thích và sử dụng sản phẩm của AMUSE
                                </div>
                            </div>
                            <Divider sx={{ marginTop: '20px' }} />
                        </div>
                        <div className="p-0 mb-[15px]">
                            <div className="text-14px">
                                eopihanta
                            </div>
                            <div className="flex items-center gap-[20px]">
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly sx={{ color: 'black', fontSize: '14px', gap: '8px' }} />
                                <div className="text-[14px] leading-[20px] text-[#828282] ">
                                    10/03/2026 22:08
                                </div>
                            </div>
                            <div className="my-[10px] leading-[23px] text-[14px]">
                                Mau trôi lớp bóng, còn lại bao lì , màu hơi trầm
                            </div>
                            <div className="pl-[44px] mt-[20px] mb-[30px]">
                                <div className="flex items-center gap-[20px] text-[14px]">
                                    <div className="text-[#b0100f] font-semibold">Beauty Box Vietnam</div>
                                    <div>10/20/2025 04:18</div>
                                </div>
                                <div className="text-[12px] mt-[5px] mb-[15px]">
                                    Cảm ơn bạn đã đánh giá sản phẩm của AMUSE 5 sao! Chúng tôi rất vui vì bạn đã có trải nghiệm tốt với sản phẩm. Ý kiến của bạn chính là động lực giúp AMUSE tiếp tục cố gắng và phục vụ khách hàng, đem đến những sản phẩm tốt nhất. Hy vọng bạn sẽ tiếp tục yêu thích và sử dụng sản phẩm của AMUSE
                                </div>
                            </div>
                            <Divider sx={{ marginTop: '20px' }} />
                        </div>
                        <div className="p-0 mb-[15px]">
                            <div className="text-14px">
                                eopihanta
                            </div>
                            <div className="flex items-center gap-[20px]">
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly sx={{ color: 'black', fontSize: '14px', gap: '8px' }} />
                                <div className="text-[14px] leading-[20px] text-[#828282] ">
                                    10/03/2026 22:08
                                </div>
                            </div>
                            <div className="my-[10px] leading-[23px] text-[14px]">
                                Mau trôi lớp bóng, còn lại bao lì , màu hơi trầm
                            </div>
                            <div className="pl-[44px] mt-[20px] mb-[30px]">
                                <div className="flex items-center gap-[20px] text-[14px]">
                                    <div className="text-[#b0100f] font-semibold">Beauty Box Vietnam</div>
                                    <div>10/20/2025 04:18</div>
                                </div>
                                <div className="text-[12px] mt-[5px] mb-[15px]">
                                    Cảm ơn bạn đã đánh giá sản phẩm của AMUSE 5 sao! Chúng tôi rất vui vì bạn đã có trải nghiệm tốt với sản phẩm. Ý kiến của bạn chính là động lực giúp AMUSE tiếp tục cố gắng và phục vụ khách hàng, đem đến những sản phẩm tốt nhất. Hy vọng bạn sẽ tiếp tục yêu thích và sử dụng sản phẩm của AMUSE
                                </div>
                            </div>
                            <Divider sx={{ marginTop: '20px' }} />
                        </div>
                        <div className="p-0 mb-[15px]">
                            <div className="text-14px">
                                eopihanta
                            </div>
                            <div className="flex items-center gap-[20px]">
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly sx={{ color: 'black', fontSize: '14px', gap: '8px' }} />
                                <div className="text-[14px] leading-[20px] text-[#828282] ">
                                    10/03/2026 22:08
                                </div>
                            </div>
                            <div className="my-[10px] leading-[23px] text-[14px]">
                                Mau trôi lớp bóng, còn lại bao lì , màu hơi trầm
                            </div>
                            <div className="pl-[44px] mt-[20px] mb-[30px]">
                                <div className="flex items-center gap-[20px] text-[14px]">
                                    <div className="text-[#b0100f] font-semibold">Beauty Box Vietnam</div>
                                    <div>10/20/2025 04:18</div>
                                </div>
                                <div className="text-[12px] mt-[5px] mb-[15px]">
                                    Cảm ơn bạn đã đánh giá sản phẩm của AMUSE 5 sao! Chúng tôi rất vui vì bạn đã có trải nghiệm tốt với sản phẩm. Ý kiến của bạn chính là động lực giúp AMUSE tiếp tục cố gắng và phục vụ khách hàng, đem đến những sản phẩm tốt nhất. Hy vọng bạn sẽ tiếp tục yêu thích và sử dụng sản phẩm của AMUSE
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to='/products/son-nuoc-bong-thuan-chay-amuse-dew-tint-4g/reviews' >
                        <div className="underline text-[14px] leading-[1.5715] mt-[40px]">
                            Tải thêm bình luận
                        </div>
                    </Link>
                </div>
            </div>
            <Divider sx={{ marginTop: '50px' }} />
            <div className="grid grid-cols-12 my-[50px]">
                <div className="col-span-4 text-[24px] font-bold leading-[35px] [@media(max-width:1199px)]:col-span-12 [@media(max-width:1199px)]:mb-[30px]">
                    Hỏi đáp
                </div>
                <div className="col-span-8 [@media(max-width:1199px)]:col-span-12">
                    <Autocomplete
                        options={questions}
                        inputValue=""
                        onInputChange={() => { }}
                        onChange={(_, newValue) => setQuestion(newValue || '')}
                        slotProps={{
                            paper: {
                                sx: {
                                    '& .MuiAutocomplete-option': {
                                        fontSize: '14px',
                                    },
                                }
                            }
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder="Có câu hỏi? Tìm lời giải đáp nhanh chóng"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        padding: '11px',
                                        backgroundColor: '#f6f6f6',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        '& fieldset': {
                                            border: '1px solid #b7b6c2',
                                            transition: 'all 200ms ease-in-out',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#bf585b',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#bf585b',
                                            boxShadow: '0 0 0 2px rgb(234,199,200)',
                                        },
                                    },
                                    '& .MuiAutocomplete-input': {
                                        padding: '0px !important',
                                        cursor: 'pointer',
                                    },
                                    '& input::placeholder': {
                                        fontSize: '14px',
                                        color: '#858585',
                                        opacity: 1,
                                    },
                                }}
                            />
                        )}
                    />
                    <div className="flex items-center my-[10px]">
                        <textarea name="" id="" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Viết câu hỏi của bạn tại đây" className="max-w-[100%] h-auto min-h-[45px] leading-[1.5715] cursor-pointer border-1 border-[#b7b6c2] hover:border-[#bf585b] focus:outline-none focus:shadow-[0_0_0_2px_rgb(234,199,200)] transition-all ease-in-out duration-300 mr-[10px] p-[11px] text-[14px] flex-1 rounded-[5px] bg-[#f6f6f6]"></textarea>
                        <div className="py-[5px] px-[20px] rounded-[5px] text-white bg-black text-[14px] h-[30px]">Gửi đi</div>
                    </div>
                    <div className="my-[20px]">
                        <div className="flex items-center text-[14px]">
                            <div className="mr-[5px]">KH</div>
                            <div className="font-bold">Hoan Tieu</div>
                        </div>
                        <div className="my-[10px] text-[12px]">
                            Thời gian nhận hàng sau khi đặt hàng trong vòng bao lâu?
                        </div>
                        <div className="flex items-center text-[14px]">
                            <div className="mr-[10px] font-bold">TRẢ LỜI</div>
                            <div className="opacity-[0.5]">3 hours ago</div>
                        </div>
                        <div className="relative max-w-[100%] py-[30px] px-[26px] my-[20px] rounded-[5px] border-1 border-[#dfdfdf] before:content-[''] before:absolute before:w-0 before:h-0 before:bottom-full before:left-[1.5em] before:border-r-[0.75rem] before:border-r-transparent before:border-b-[0.75rem] before:border-b-white before:border-l-[0.75rem] before:border-l-transparent before:border-t-0 before:[filter:drop-shadow(rgba(0,0,0,0.1)_0px_-0.0625rem_0.0625rem)]">
                            <div className="text-[#b0100f] font-semibold text-[14px]">Beauty Box Vietnam</div>
                            <div className="text-[12px] mt-[10px] mb-[15px]">Chào bạn, BEAUTY BOX rất vui khi được hỗ trợ bạn, bạn vui lòng nhắn về fanpage chính hãng Beauty Box có dấu tick xanh để được hỗ trợ thêm nhé ạ : https://www.facebook.com/BeautyBoxOfficialVN BEAUTY BOX cảm ơn bạn đã liên hệ</div>
                            <div className="text-[14px] opacity-[0.5] ">36 minutes ago</div>
                        </div>
                    </div>
                </div>
            </div>
            <Divider sx={{ marginTop: '50px' }} />
            <div className="grid grid-cols-12 my-[60px]">
                <div className="col-span-4 [@media(max-width:1199px)]:col-span-12 [@media(max-width:1199px)]:mb-[30px]">
                    <div className="text-[24px] font-bold leading-[35px]">
                        Sản phẩm liên quan
                    </div>
                    <Link to="/">
                        <div className="underline font-bold text-[14px] cursor-pointer my-[15px]">
                            XEM TẤT CẢ CÁC SẢN PHẨM LIÊN QUAN
                        </div>
                    </Link>
                </div>
                <div className="col-span-8 [@media(max-width:1199px)]:col-span-12">
                    <div className="grid grid-cols-3 [@media(max-width:576px)]:grid-cols-2">
                        <div className="px-[5px]">
                            <ProductCard />
                        </div>
                        <div className="px-[5px]">
                            <ProductCard />
                        </div>
                        <div className="px-[5px]">
                            <ProductCard />
                        </div>
                        <div className="px-[5px]">
                            <ProductCard />
                        </div>
                        <div className="px-[5px]">
                            <ProductCard />
                        </div>
                        <div className="px-[5px]">
                            <ProductCard />
                        </div>
                        <div className="px-[5px]">
                            <ProductCard />
                        </div>
                        <div className="px-[5px]">
                            <ProductCard />
                        </div>
                        <div className="px-[5px]">
                            <ProductCard />
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
            <div className="my-[10px]">
                <div className="mb-[20px] text-[24px] font-bold text-center">BẠN ĐÃ XEM GẦN ĐÂY</div>
                <div className='relative'>
                    <Swiper
                        spaceBetween={20}
                        navigation={{
                            nextEl: '.history-next',
                            prevEl: '.history-prev',
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
                                slidesPerView: 4
                            },
                            1280: {
                                slidesPerView: 5
                            },
                        }}
                        modules={[Navigation]}
                        className="mt-5"
                        onSlideChange={handleSlideChange}
                        onInit={handleSlideChange}
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
                    <div className={`history-prev absolute w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer z-50 bg-white left-[-20px] top-[45%] shadow-[0_54px_55px_rgba(0,0,0,0.25),0_-12px_30px_rgba(0,0,0,0.12),0_4px_6px_rgba(0,0,0,0.12),0_12px_13px_rgba(0,0,0,0.17),0_-3px_5px_rgba(0,0,0,0.09)] transition-opacity duration-300 ${isBeginning ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        <ArrowBackIosNewOutlinedIcon sx={{ fontSize: 18 }} />
                    </div>
                    <div className={`history-next absolute w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer z-50 bg-white right-[-20px] top-[45%] shadow-[0_54px_55px_rgba(0,0,0,0.25),0_-12px_30px_rgba(0,0,0,0.12),0_4px_6px_rgba(0,0,0,0.12),0_12px_13px_rgba(0,0,0,0.17),0_-3px_5px_rgba(0,0,0,0.09)] transition-opacity duration-300 ${isEnd ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        <ArrowForwardIosOutlinedIcon sx={{ fontSize: 18 }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage