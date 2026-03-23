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
import SelectMethodBanner from "../components/common/Banner/SelectMethodBanner";
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
    const [openStoreDialog, setOpenStoreDialog] = useState(true);

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
            <div className="grid grid-cols-12 mt-[20px]">
                <div className="col-span-1 flex flex-col items-center px-[5px] w-[100px] self-start sticky top-[10px]">
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
                                <ImageCard imageUrl={src} />
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
                    <SelectMethodBanner />
                    <Dialog
                        open={openStoreDialog}
                        onClose={() => setOpenStoreDialog(false)}
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
                                    <CloseIcon sx={{ fontSize: '30px',  }}/>
                                </IconButton>
                            </div>
                        </DialogTitle>
                        <DialogContent sx={{ paddingX: '32px', paddingY: '28px' }}>
                            <div className="flex flex-col gap-[20px]">
                                <div className="flex my-[24px]">
                                    <img src="https://image.hsv-tech.io/65x65/bbx/common/53dd920f-cd75-45b8-bdd5-fd311def024c.webp" alt="" className="min-w-[65px] w-[65px] h-[65px]"/>
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
                                            <div>Xem showroom</div>
                                            <div>Giờ mở cửa</div>
                                            <div>Chi tiết</div>
                                        </div>
                                    </div>
                                    <div className="p-[20px] text-[14px] leading-[1.5715] border-1 border-[#EFEFEF] rounded-[3px] cursor-pointer">
                                        <div className="flex items-center justify-between mb-1">
                                            <div>Hồ Chí Minh</div>
                                            <div className="rounded-[5px] bg-[#f6ffed] text-[#389e0d] px-[12px] py-[3px] text-[12px]">Còn hàng</div>
                                        </div>
                                        <div className="font-bold mb-1">BEAUTY BOX 199 KHÁNH HỘI</div>
                                        <div className="mb-1">Số 199 Khánh Hội, Phường Vĩnh Hội, Thành Phố Hồ Chí Minh, Phường 9, Quận 4</div>
                                        <div className="underline">18002004</div>
                                        <div className="flex items-center mt-[10px] underline gap-[10px]">
                                            <div>Xem showroom</div>
                                            <div>Giờ mở cửa</div>
                                            <div>Chi tiết</div>
                                        </div>
                                    </div>
                                    <div className="p-[20px] text-[14px] leading-[1.5715] border-1 border-[#EFEFEF] rounded-[3px] cursor-pointer">
                                        <div className="flex items-center justify-between mb-1">
                                            <div>Hồ Chí Minh</div>
                                            <div className="rounded-[5px] bg-[#f6ffed] text-[#389e0d] px-[12px] py-[3px] text-[12px]">Còn hàng</div>
                                        </div>
                                        <div className="font-bold mb-1">BEAUTY BOX 199 KHÁNH HỘI</div>
                                        <div className="mb-1">Số 199 Khánh Hội, Phường Vĩnh Hội, Thành Phố Hồ Chí Minh, Phường 9, Quận 4</div>
                                        <div className="underline">18002004</div>
                                        <div className="flex items-center mt-[10px] underline gap-[10px]">
                                            <div>Xem showroom</div>
                                            <div>Giờ mở cửa</div>
                                            <div>Chi tiết</div>
                                        </div>
                                    </div>
                                    <div className="p-[20px] text-[14px] leading-[1.5715] border-1 border-[#EFEFEF] rounded-[3px] cursor-pointer">
                                        <div className="flex items-center justify-between mb-1">
                                            <div>Hồ Chí Minh</div>
                                            <div className="rounded-[5px] bg-[#f6ffed] text-[#389e0d] px-[12px] py-[3px] text-[12px]">Còn hàng</div>
                                        </div>
                                        <div className="font-bold mb-1">BEAUTY BOX 199 KHÁNH HỘI</div>
                                        <div className="mb-1">Số 199 Khánh Hội, Phường Vĩnh Hội, Thành Phố Hồ Chí Minh, Phường 9, Quận 4</div>
                                        <div className="underline">18002004</div>
                                        <div className="flex items-center mt-[10px] underline gap-[10px]">
                                            <div>Xem showroom</div>
                                            <div>Giờ mở cửa</div>
                                            <div>Chi tiết</div>
                                        </div>
                                    </div>
                                    <div className="p-[20px] text-[14px] leading-[1.5715] border-1 border-[#EFEFEF] rounded-[3px] cursor-pointer">
                                        <div className="flex items-center justify-between mb-1">
                                            <div>Hồ Chí Minh</div>
                                            <div className="rounded-[5px] bg-[#f6ffed] text-[#389e0d] px-[12px] py-[3px] text-[12px]">Còn hàng</div>
                                        </div>
                                        <div className="font-bold mb-1">BEAUTY BOX 199 KHÁNH HỘI</div>
                                        <div className="mb-1">Số 199 Khánh Hội, Phường Vĩnh Hội, Thành Phố Hồ Chí Minh, Phường 9, Quận 4</div>
                                        <div className="underline">18002004</div>
                                        <div className="flex items-center mt-[10px] underline gap-[10px]">
                                            <div>Xem showroom</div>
                                            <div>Giờ mở cửa</div>
                                            <div>Chi tiết</div>
                                        </div>
                                    </div>
                                    <div className="p-[20px] text-[14px] leading-[1.5715] border-1 border-[#EFEFEF] rounded-[3px] cursor-pointer">
                                        <div className="flex items-center justify-between mb-1">
                                            <div>Hồ Chí Minh</div>
                                            <div className="rounded-[5px] bg-[#f6ffed] text-[#389e0d] px-[12px] py-[3px] text-[12px]">Còn hàng</div>
                                        </div>
                                        <div className="font-bold mb-1">BEAUTY BOX 199 KHÁNH HỘI</div>
                                        <div className="mb-1">Số 199 Khánh Hội, Phường Vĩnh Hội, Thành Phố Hồ Chí Minh, Phường 9, Quận 4</div>
                                        <div className="underline">18002004</div>
                                        <div className="flex items-center mt-[10px] underline gap-[10px]">
                                            <div>Xem showroom</div>
                                            <div>Giờ mở cửa</div>
                                            <div>Chi tiết</div>
                                        </div>
                                    </div>
                                    <div className="p-[20px] text-[14px] leading-[1.5715] border-1 border-[#EFEFEF] rounded-[3px] cursor-pointer">
                                        <div className="flex items-center justify-between mb-1">
                                            <div>Hồ Chí Minh</div>
                                            <div className="rounded-[5px] bg-[#f6ffed] text-[#389e0d] px-[12px] py-[3px] text-[12px]">Còn hàng</div>
                                        </div>
                                        <div className="font-bold mb-1">BEAUTY BOX 199 KHÁNH HỘI</div>
                                        <div className="mb-1">Số 199 Khánh Hội, Phường Vĩnh Hội, Thành Phố Hồ Chí Minh, Phường 9, Quận 4</div>
                                        <div className="underline">18002004</div>
                                        <div className="flex items-center mt-[10px] underline gap-[10px]">
                                            <div>Xem showroom</div>
                                            <div>Giờ mở cửa</div>
                                            <div>Chi tiết</div>
                                        </div>
                                    </div>
                                    <div className="p-[20px] text-[14px] leading-[1.5715] border-1 border-[#EFEFEF] rounded-[3px] cursor-pointer">
                                        <div className="flex items-center justify-between mb-1">
                                            <div>Hồ Chí Minh</div>
                                            <div className="rounded-[5px] bg-[#f6ffed] text-[#389e0d] px-[12px] py-[3px] text-[12px]">Còn hàng</div>
                                        </div>
                                        <div className="font-bold mb-1">BEAUTY BOX 199 KHÁNH HỘI</div>
                                        <div className="mb-1">Số 199 Khánh Hội, Phường Vĩnh Hội, Thành Phố Hồ Chí Minh, Phường 9, Quận 4</div>
                                        <div className="underline">18002004</div>
                                        <div className="flex items-center mt-[10px] underline gap-[10px]">
                                            <div>Xem showroom</div>
                                            <div>Giờ mở cửa</div>
                                            <div>Chi tiết</div>
                                        </div>
                                    </div>
                                    <div className="p-[20px] text-[14px] leading-[1.5715] border-1 border-[#EFEFEF] rounded-[3px] cursor-pointer">
                                        <div className="flex items-center justify-between mb-1">
                                            <div>Hồ Chí Minh</div>
                                            <div className="rounded-[5px] bg-[#f6ffed] text-[#389e0d] px-[12px] py-[3px] text-[12px]">Còn hàng</div>
                                        </div>
                                        <div className="font-bold mb-1">BEAUTY BOX 199 KHÁNH HỘI</div>
                                        <div className="mb-1">Số 199 Khánh Hội, Phường Vĩnh Hội, Thành Phố Hồ Chí Minh, Phường 9, Quận 4</div>
                                        <div className="underline">18002004</div>
                                        <div className="flex items-center mt-[10px] underline gap-[10px]">
                                            <div>Xem showroom</div>
                                            <div>Giờ mở cửa</div>
                                            <div>Chi tiết</div>
                                        </div>
                                    </div>
                                    <div className="p-[20px] text-[14px] leading-[1.5715] border-1 border-[#EFEFEF] rounded-[3px] cursor-pointer">
                                        <div className="flex items-center justify-between mb-1">
                                            <div>Hồ Chí Minh</div>
                                            <div className="rounded-[5px] bg-[#f6ffed] text-[#389e0d] px-[12px] py-[3px] text-[12px]">Còn hàng</div>
                                        </div>
                                        <div className="font-bold mb-1">BEAUTY BOX 199 KHÁNH HỘI</div>
                                        <div className="mb-1">Số 199 Khánh Hội, Phường Vĩnh Hội, Thành Phố Hồ Chí Minh, Phường 9, Quận 4</div>
                                        <div className="underline">18002004</div>
                                        <div className="flex items-center mt-[10px] underline gap-[10px]">
                                            <div>Xem showroom</div>
                                            <div>Giờ mở cửa</div>
                                            <div>Chi tiết</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                    <div className="flex items-center gap-[10px] mt-[30px]">
                        <div className="flex items-center rounded-[38px] border-2 gap-6 px-[10px] py-[12px] border-[#efefef]">
                            <RemoveOutlinedIcon />
                            <div className="text-[16px] font-bold">1</div>
                            <AddOutlinedIcon />
                        </div>
                        <div className={`flex flex-1 items-center justify-center rounded-[38px] py-[12px] transition-all-ease duration-300 ${value !== "pick-up" ? 'bg-black hover:bg-[#333333] cursor-pointer' : 'bg-[#F7F7F7] border-2 border-[#D9D9D9] cursor-not-allowed'} `}>
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
                    <ProductDetailAttribute />
                </div>
            </div>
            <Divider sx={{ marginY: '15px' }} />
            <div className="grid grid-cols-12 mb-[40px]">
                <div className="col-span-4 text-[24px] font-bold leading-[35px]">
                    Giới thiệu
                </div>
                <div className="col-span-8 p-[10px]">
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
                <div className="col-span-4 w-[90%]">
                    <div className="flex items-center justify-between mb-[10px]">
                        <div className="text-[24px] font-bold leading-[35px]">39 đánh giá</div>
                        <div className="underline leading-[1.5715] font-semibold text-[14px] cursor-pointer">VIẾT ĐÁNH GIÁ</div>
                    </div>
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
                <div className="col-span-8 px-[10px]">
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
                    <Link to='/' >
                        <div className="underline text-[14px] leading-[1.5715] mt-[40px]">
                            Tải thêm bình luận
                        </div>
                    </Link>
                </div>
            </div>
            <Divider sx={{ marginTop: '50px' }} />
            <div className="grid grid-cols-12 my-[50px]">
                <div className="col-span-4 text-[24px] font-bold leading-[35px]">
                    Hỏi đáp
                </div>
                <div className="col-span-8">
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
                <div className="col-span-4">
                    <div className="text-[24px] font-bold leading-[35px]">
                        Sản phẩm liên quan
                    </div>
                    <Link to="/">
                        <div className="underline font-bold text-[14px] cursor-pointer my-[15px]">
                            XEM TẤT CẢ CÁC SẢN PHẨM LIÊN QUAN
                        </div>
                    </Link>
                </div>
                <div className="col-span-8">
                        <div className="grid grid-cols-3">
                            <div className="px-[5px]">
                                <ProductCard/>
                            </div>
                            <div className="px-[5px]">
                                <ProductCard/>
                            </div>
                            <div className="px-[5px]">
                                <ProductCard/>
                            </div>
                            <div className="px-[5px]">
                                <ProductCard/>
                            </div>
                            <div className="px-[5px]">
                                <ProductCard/>
                            </div>
                            <div className="px-[5px]">
                                <ProductCard/>
                            </div>
                            <div className="px-[5px]">
                                <ProductCard/>
                            </div>
                            <div className="px-[5px]">
                                <ProductCard/>
                            </div>
                            <div className="px-[5px]">
                                <ProductCard/>
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
                        nextEl: '.banner-next',
                        prevEl: '.banner-prev',
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
                    className="mt-5 w-[91%]"
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
                <div className={`banner-prev absolute w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer z-50 bg-white left-[50px] top-[45%] [@media(max-width:1120px)]:left-[30px]  [@media(max-width:1020px)]:left-[25px] [@media(max-width:950px)]:left-[20px] [@media(max-width:768px)]:left-[15px] [@media(max-width:576px)]:left-0 shadow-[0_54px_55px_rgba(0,0,0,0.25),0_-12px_30px_rgba(0,0,0,0.12),0_4px_6px_rgba(0,0,0,0.12),0_12px_13px_rgba(0,0,0,0.17),0_-3px_5px_rgba(0,0,0,0.09)] transition-opacity duration-300 ${isBeginning ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <ArrowBackIosNewOutlinedIcon sx={{ fontSize: 18 }} />
                </div>
                <div className={`banner-next absolute w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer z-50 bg-white right-[50px] top-[45%] [@media(max-width:1120px)]:right-[30px]  [@media(max-width:1020px)]:right-[25px] [@media(max-width:950px)]:right-[20px] [@media(max-width:768px)]:right-[15px] [@media(max-width:576px)]:right-0 shadow-[0_54px_55px_rgba(0,0,0,0.25),0_-12px_30px_rgba(0,0,0,0.12),0_4px_6px_rgba(0,0,0,0.12),0_12px_13px_rgba(0,0,0,0.17),0_-3px_5px_rgba(0,0,0,0.09)] transition-opacity duration-300 ${isEnd ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <ArrowForwardIosOutlinedIcon sx={{ fontSize: 18 }} />
                </div>
            </div>
            </div>
        </div>
    )
}

export default ProductDetailPage