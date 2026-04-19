import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
import Divider from "@mui/material/Divider";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";


const TABS = [
    "Tất cả",
    "Chờ xác nhận",
    "Đang chuẩn bị đơn hàng",
    "Đang giao",
    "Đã giao",
    "Đã hủy",
    "Giao hàng không thành công",
];

export default function OrderTabs() {
    const [activeTab, setActiveTab] = useState(0);

    const swiperRef = useRef<SwiperType | null>(null);

    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    useEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            if (swiperRef.current) {
                swiperRef.current.translateTo(
                    swiperRef.current.translate - e.deltaY * 1.5,
                    200
                );
            }
        };

        el.addEventListener("wheel", handleWheel, { passive: false });
        return () => el.removeEventListener("wheel", handleWheel);
    }, []);

    const isDragging = useRef(false);
    const startX = useRef(0);
    const startTranslate = useRef(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        isDragging.current = true;
        startX.current = e.clientX;
        startTranslate.current = swiperRef.current?.translate ?? 0;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current || !swiperRef.current) return;
        const diff = e.clientX - startX.current;
        swiperRef.current.translateTo(startTranslate.current + diff, 0);
    };

    const stopDrag = () => {
        if (!isDragging.current) return;
        isDragging.current = false;
        swiperRef.current?.updateProgress();
    };

    return (
        <div className="w-full">
            <div
                ref={wrapperRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={stopDrag}
                onMouseLeave={stopDrag}
                className="cursor-grab active:cursor-grabbing select-none"
            >
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    slidesPerView="auto"
                    freeMode={true}
                    simulateTouch={false}
                    modules={[FreeMode]}
                    className="w-full"
                >
                    {TABS.map((tab, index) => (
                        <SwiperSlide key={index} className="!w-auto">
                            <button
                                onClick={() => setActiveTab(index)}
                                className={[
                                    "px-4 py-2 text-sm whitespace-nowrap border-b-2 transition-colors cursor-pointer",
                                    activeTab === index
                                        ? "text-black font-medium border-black"
                                        : "text-gray-500 border-transparent hover:text-black",
                                ].join(" ")}
                            >
                                {tab}
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="h-[0.5px] bg-gray-200 mb-[25px]" />
            <TextField
                fullWidth
                variant="outlined"
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: '#888', fontSize: '28px' }} />
                            </InputAdornment>
                        )
                    },
                }}
                placeholder="Tìm kiếm"
                sx={{
                    width: '100%',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '999px',
                        backgroundColor: '#F6F6F6',
                        '& fieldset': {
                            border: '1px solid transparent',
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
                    '& .MuiInputBase-input': {
                        py: '10.5px',
                        fontSize: '14px',
                    },
                }}
            />
            <div className="">
                <div className="border-1 border-[#efefef] rounded-[5px] px-[20px] py-[15px] text-[14px] leading-[1.5715] mt-[20px]">
                    <div className="flex items-center gap-[20px]">
                        <div>04/19/2026</div>
                        <div className="text-[10px]">|</div>
                        <div className="flex items-center gap-[10px]">
                            <div>Mã đơn hàng:</div>
                            <div>#BW5DAAK3</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-[20px] text-[14px] leading-[1.5715] mt-[5px]">
                        <div className="flex items-center font-bold gap-[10px]">
                            <div>Hình thức:</div>
                            <div>Giao hàng</div>
                        </div>
                        <div>
                            2 Sản phẩm (34.000đ)
                        </div>
                    </div>
                    <div className="flex items-center mt-[10px] gap-[10px] text-[14px] leading-[1.5715]">
                        <div>Giao đến:</div>
                        <div>127 Lãnh Binh Thăng P12, Phường 12, Quận 11, Hồ Chí Minh</div>
                    </div>
                    <Divider sx={{ marginY: '15px' }} />
                    <div className="flex items-center justify-between flex-wrap gap-y-3">
                        <div className="flex items-center gap-[10px] font-bold text-[14px] leading-[1.5715]">
                            <div>Tình trạng:</div>
                            <div>Đơn hàng đã đặt thành công</div>
                        </div>
                        <div className='flex items-center gap-[8px] ml-auto'>
                            <div onClick={() => setOpenDeleteDialog(true)} className='rounded-[38px] font-bold border-black border-1 py-[8px] px-[15px] text-[14px] cursor-pointer [@media(max-width:906px)]:mt-[15px]'>
                                Hủy
                            </div>
                            <div className='rounded-[38px] font-bold border-black border-1 py-[8px] px-[15px] text-[14px] cursor-pointer [@media(max-width:906px)]:mt-[15px]'>
                                Xem chi tiết
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-1 border-[#efefef] rounded-[5px] px-[20px] py-[15px] text-[14px] leading-[1.5715] mt-[20px]">
                    <div className="flex items-center gap-[20px]">
                        <div>04/19/2026</div>
                        <div className="text-[10px]">|</div>
                        <div className="flex items-center gap-[10px]">
                            <div>Mã đơn hàng:</div>
                            <div>#BW5DAAK3</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-[20px] text-[14px] leading-[1.5715] mt-[5px]">
                        <div className="flex items-center font-bold gap-[10px]">
                            <div>Hình thức:</div>
                            <div>Giao hàng</div>
                        </div>
                        <div>
                            2 Sản phẩm (34.000đ)
                        </div>
                    </div>
                    <div className="flex items-center mt-[10px] gap-[10px] text-[14px] leading-[1.5715]">
                        <div>Giao đến:</div>
                        <div>127 Lãnh Binh Thăng P12, Phường 12, Quận 11, Hồ Chí Minh</div>
                    </div>
                    <Divider sx={{ marginY: '15px' }} />
                    <div className="flex items-center justify-between flex-wrap gap-y-3">
                        <div className="flex items-center gap-[10px] font-bold text-[14px] leading-[1.5715]">
                            <div>Tình trạng:</div>
                            <div>Đơn hàng đã đặt thành công</div>
                        </div>
                        <div className='flex items-center gap-[8px] ml-auto'>
                            <div onClick={() => setOpenDeleteDialog(true)} className='rounded-[38px] font-bold border-black border-1 py-[8px] px-[15px] text-[14px] cursor-pointer [@media(max-width:906px)]:mt-[15px]'>
                                Hủy
                            </div>
                            <div className='rounded-[38px] font-bold border-black border-1 py-[8px] px-[15px] text-[14px] cursor-pointer [@media(max-width:906px)]:mt-[15px]'>
                                Xem chi tiết
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Dialog
                open={openDeleteDialog}
                onClose={() => setOpenDeleteDialog(false)}
                maxWidth={false}
                fullWidth
                slotProps={{
                    paper: {
                        sx: { borderRadius: '10px', width: '380px' }
                    }
                }}
            >
                <DialogTitle sx={{ paddingX: '15px', paddingY: '24px' }}>
                    <div className="flex items-center justify-center">
                        <div className="text-[24px] font-semibold">Xác nhận</div>
                    </div>
                </DialogTitle>
                <DialogContent sx={{ p: '24px' }}>
                    <div className="text-center text-[14px] leading-[1.5715]">
                        Bạn có chắc chắn muốn hủy đơn hàng này?
                    </div>
                    <div className="flex items-center mt-[30px] gap-[10px] justify-center">
                        <div onClick={() => setOpenDeleteDialog(false)} className="text-white h-[40px] px-[20px] py-[6px] rounded-[40px] flex items-center justify-center cursor-pointer bg-black">
                            Trở về
                        </div>
                        <div className="text-white h-[40px] px-[20px] py-[6px] rounded-[40px] flex items-center justify-center cursor-pointer" style={{ backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" }}>
                            Hủy
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}