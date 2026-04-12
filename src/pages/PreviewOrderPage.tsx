import Rating from '@mui/material/Rating'
import RemoveIcon from '@mui/icons-material/Remove'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import ClearIcon from '@mui/icons-material/Clear'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PreviewProductCard from '../components/ui/Card/PreviewProductCard';
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { closePreviewOrderDrawer, openPreviewOrderDrawer } from '../store/slices/clickPreviewOrderSlice'
import Box from '@mui/material/Box'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

const PreviewOrderPage = () => {

    const [expanded, setExpanded] = useState(false);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const previewProducts = useAppSelector((state) => state.previewOrderDrawer);

    const handleCheckout = () => {
        navigate('/check-out');
    }

    return (
        <div className='max-w-[1220px] mx-auto mt-[15px] px-[5%]'>
            <div className="flex items-center text-[#797979] gap-2 leading-relaxed">
                <Link to="/" className="text-[12px]">
                    Trang chủ
                </Link>
                <div className="text-[14px]">{">"}</div>
                <Link to="/" className="text-[12px]">
                    Thanh toán
                </Link>
            </div>
            <div className='font-bold text-[24px] leading-[26px] my-[10px]'>
                Giỏ hàng giao tận nơi
            </div>
            <div className='grid grid-cols-12 gap-[20px] mt-[25px] [@media(max-width:800px)]:block'>
                <div className='col-span-8 [@media(max-width:992px)]:col-span-7'>
                    <div className='rounded-[15px] border-1 border-[#dfdfdf] py-[20px] px-[30px]'>
                        <div className='text-[16px] leading-[26px] font-bold'>
                            AHC
                        </div>
                        <div className='flex items-center mt-[20px]'>
                            <img src="https://image.hsv-tech.io/150x0/bbx/common/c336f484-4500-4598-aa8d-b2a3d6ce591a.webp" alt="" className='w-[100px] h-[100px] [@media(max-width:800px)]:w-[80px] [@media(max-width:800px)]:h-[80px] [@media(max-width:576px)]:!w-[64px] [@media(max-width:576px)]:!h-[64px] rounded-[5px] mr-[25px]' />
                            <div className='flex-1 flex flex-col gap-[2px]'>
                                <div className='text-[12px] font-bold leading-[17px]'>AHC</div>
                                <div className='text-[14px] leading-[20px] line-clamp-2'>Kem Mắt Và Mặt AHC Mờ Nám, Làm Đều Màu Da Pro Shot Gluta-Ctivation Bright 3 30ml</div>
                                <div className='flex gap-[5px]'>
                                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly sx={{ color: 'black', fontSize: '14px', gap: '6px' }} />
                                    <div className='text-[12px] underline ml-1'>(1)</div>
                                </div>
                                <div className='text-[14px] font-bold'>
                                    542.900đ
                                </div>
                            </div>
                            <div className='ml-[8px] border-1 border-black rounded-[38px] px-[20px] py-[8px] text-[14px] font-bold cursor-pointer hover:border-[#BF585B] hover:text-[#BF585B] transition-all duration-300 ease-in-out [@media(max-width:800px)]:hidden'>
                                Thêm
                            </div>
                            <div className='[@media(min-width:800px)]:hidden w-[36px] h-[36px] rounded-[10px] border-2 border-[#949494] flex items-center justify-center ml-[20px]'>
                                <AddShoppingCartOutlinedIcon sx={{ color: 'black', fontSize: '20px' }} />
                            </div>
                        </div>
                        <div className='flex items-center mt-[20px]'>
                            <img src="https://image.hsv-tech.io/150x0/bbx/common/c336f484-4500-4598-aa8d-b2a3d6ce591a.webp" alt="" className='w-[100px] h-[100px] [@media(max-width:800px)]:w-[80px] [@media(max-width:800px)]:h-[80px] [@media(max-width:576px)]:!w-[64px] [@media(max-width:576px)]:!h-[64px] rounded-[5px] mr-[25px]' />
                            <div className='flex-1 flex flex-col gap-[2px]'>
                                <div className='text-[12px] font-bold leading-[17px]'>AHC</div>
                                <div className='text-[14px] leading-[20px] line-clamp-2'>Kem Mắt Và Mặt AHC Mờ Nám, Làm Đều Màu Da Pro Shot Gluta-Ctivation Bright 3 30ml</div>
                                <div className='flex gap-[5px]'>
                                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly sx={{ color: 'black', fontSize: '14px', gap: '6px' }} />
                                    <div className='text-[12px] underline ml-1'>(1)</div>
                                </div>
                                <div className='text-[14px] font-bold'>
                                    542.900đ
                                </div>
                            </div>
                            <div className='ml-[8px] border-1 border-black rounded-[38px] px-[20px] py-[8px] text-[14px] font-bold cursor-pointer hover:border-[#BF585B] hover:text-[#BF585B] transition-all duration-300 ease-in-out [@media(max-width:800px)]:hidden'>
                                Thêm
                            </div>
                            <div className='[@media(min-width:800px)]:hidden w-[36px] h-[36px] rounded-[10px] border-2 border-[#949494] flex items-center justify-center ml-[20px]'>
                                <AddShoppingCartOutlinedIcon sx={{ color: 'black', fontSize: '20px' }} />
                            </div>
                        </div>
                        <div className='flex items-center mt-[20px]'>
                            <img src="https://image.hsv-tech.io/150x0/bbx/common/c336f484-4500-4598-aa8d-b2a3d6ce591a.webp" alt="" className='w-[100px] h-[100px] [@media(max-width:800px)]:w-[80px] [@media(max-width:800px)]:h-[80px] [@media(max-width:576px)]:!w-[64px] [@media(max-width:576px)]:!h-[64px] rounded-[5px] mr-[25px]' />
                            <div className='flex-1 flex flex-col gap-[2px]'>
                                <div className='text-[12px] font-bold leading-[17px]'>AHC</div>
                                <div className='text-[14px] leading-[20px] line-clamp-2'>Kem Mắt Và Mặt AHC Mờ Nám, Làm Đều Màu Da Pro Shot Gluta-Ctivation Bright 3 30ml</div>
                                <div className='flex gap-[5px]'>
                                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly sx={{ color: 'black', fontSize: '14px', gap: '6px' }} />
                                    <div className='text-[12px] underline ml-1'>(1)</div>
                                </div>
                                <div className='text-[14px] font-bold'>
                                    542.900đ
                                </div>
                            </div>
                            <div className='ml-[8px] border-1 border-black rounded-[38px] px-[20px] py-[8px] text-[14px] font-bold cursor-pointer hover:border-[#BF585B] hover:text-[#BF585B] transition-all duration-300 ease-in-out [@media(max-width:800px)]:hidden'>
                                Thêm
                            </div>
                            <div className='[@media(min-width:800px)]:hidden w-[36px] h-[36px] rounded-[10px] border-2 border-[#949494] flex items-center justify-center ml-[20px]'>
                                <AddShoppingCartOutlinedIcon sx={{ color: 'black', fontSize: '20px' }} />
                            </div>
                        </div>
                        <div onClick={() => setExpanded(prev => !prev)} className='mt-[20px] text-center hover:underline text-[14px] font-bold cursor-pointer'>
                            {expanded ? 'THU LẠI' : 'XEM TẤT CẢ'}
                        </div>
                    </div>
                    <div className='rounded-[15px] border-1 border-[#dfdfdf] py-[20px] px-[30px] mt-[16px]'>
                        <div className='text-[16px] leading-[26px] font-bold mb-[20px]'>
                            CLUB CLIO
                        </div>
                        <div className='grid grid-cols-3 [@media(max-width:992px)]:grid-cols-2 gap-[10px]'>
                            <PreviewProductCard />
                            <PreviewProductCard />
                            <PreviewProductCard />
                            <PreviewProductCard />
                            <PreviewProductCard />
                            <PreviewProductCard />
                        </div>
                    </div>
                </div>
                <div className='col-span-4 [@media(max-width:992px)]:col-span-5 [@media(max-width:800px)]:hidden'>
                    <div className='pt-[15px] pb-[20px] rounded-[5px] border-1 border-[#dfdfdf] shadow-[0px_0px_10px_rgba(57,105,179,0.25)] sticky top-[23%]'>
                        <div className='text-[14px] font-bold px-[15px]'>
                            Đơn hàng
                        </div>
                        <div className='px-[15px] max-h-[260px] overflow-y-auto custom-scrollbar'>
                            <div className="flex mt-[15px]">
                                <img src="https://image.hsv-tech.io/150x0/bbx/common/9bba6ba7-e32e-4e7e-95d6-bd5f17555937.webp" alt="" className="w-[80px] h-[85px] min-w-[80px] rounded-[5px] border-1" />
                                <div className="flex-1 ml-[10px] flex flex-col justify-between">
                                    <div className="flex justify-between">
                                        <Link to='/' className="text-[12px] mr-[10px] flex-1 min-w-0 line-clamp-2">
                                            Son Thạch Bóng Thuần Chay Amuse Jel-Fit Tint 3.8g
                                        </Link>
                                        <div className="max-w-[22px] h-[22px] bg-[#dfdfdf] flex items-center justify-center rounded-[11px] p-[3px] cursor-pointer">
                                            <RemoveIcon sx={{ fontSize: '16px' }} />
                                        </div>
                                    </div>
                                    <div className="text-[12px] my-[3px]">
                                        SKU: 11112241
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="rounded-[38px] border-1 border-[#dfdfdf] flex items-center py-0">
                                            <div className="px-[7px] flex items-center cursor-pointer">
                                                <RemoveOutlinedIcon sx={{ fontSize: '12px', color: 'black' }} />
                                            </div>
                                            <div className="text-[12px] leading-[26px] px-[5px]">1</div>
                                            <div className="px-[7px] flex items-center cursor-pointer">
                                                <AddOutlinedIcon sx={{ fontSize: '12px', color: 'black' }} />
                                            </div>
                                        </div>
                                        <div className="flex items-center ">
                                            <div className="font-bold text-[14px]">259.000đ</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mt-[15px]">
                                <img src="https://image.hsv-tech.io/150x0/bbx/common/9bba6ba7-e32e-4e7e-95d6-bd5f17555937.webp" alt="" className="w-[80px] h-[85px] min-w-[80px] rounded-[5px] border-1" />
                                <div className="flex-1 ml-[10px] flex flex-col justify-between">
                                    <div className="flex justify-between">
                                        <Link to='/' className="text-[12px] mr-[10px] flex-1 min-w-0 line-clamp-2">
                                            Son Thạch Bóng Thuần Chay Amuse Jel-Fit Tint 3.8g
                                        </Link>
                                        <div className="max-w-[22px] h-[22px] bg-[#dfdfdf] flex items-center justify-center rounded-[11px] p-[3px] cursor-pointer">
                                            <RemoveIcon sx={{ fontSize: '16px' }} />
                                        </div>
                                    </div>
                                    <div className="text-[12px] my-[3px]">
                                        SKU: 11112241
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="rounded-[38px] border-1 border-[#dfdfdf] flex items-center py-0">
                                            <div className="px-[7px] flex items-center cursor-pointer">
                                                <RemoveOutlinedIcon sx={{ fontSize: '12px', color: 'black' }} />
                                            </div>
                                            <div className="text-[12px] leading-[26px] px-[5px]">1</div>
                                            <div className="px-[7px] flex items-center cursor-pointer">
                                                <AddOutlinedIcon sx={{ fontSize: '12px', color: 'black' }} />
                                            </div>
                                        </div>
                                        <div className="flex items-center ">
                                            <div className="font-bold text-[14px]">259.000đ</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mt-[15px]">
                                <img src="https://image.hsv-tech.io/150x0/bbx/common/9bba6ba7-e32e-4e7e-95d6-bd5f17555937.webp" alt="" className="w-[80px] h-[85px] min-w-[80px] rounded-[5px] border-1" />
                                <div className="flex-1 ml-[10px] flex flex-col justify-between">
                                    <div className="flex justify-between">
                                        <Link to='/' className="text-[12px] mr-[10px] flex-1 min-w-0 line-clamp-2">
                                            Son Thạch Bóng Thuần Chay Amuse Jel-Fit Tint 3.8g
                                        </Link>
                                        <div className="max-w-[22px] h-[22px] bg-[#dfdfdf] flex items-center justify-center rounded-[11px] p-[3px] cursor-pointer">
                                            <RemoveIcon sx={{ fontSize: '16px' }} />
                                        </div>
                                    </div>
                                    <div className="text-[12px] my-[3px]">
                                        SKU: 11112241
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="rounded-[38px] border-1 border-[#dfdfdf] flex items-center py-0">
                                            <div className="px-[7px] flex items-center cursor-pointer">
                                                <RemoveOutlinedIcon sx={{ fontSize: '12px', color: 'black' }} />
                                            </div>
                                            <div className="text-[12px] leading-[26px] px-[5px]">1</div>
                                            <div className="px-[7px] flex items-center cursor-pointer">
                                                <AddOutlinedIcon sx={{ fontSize: '12px', color: 'black' }} />
                                            </div>
                                        </div>
                                        <div className="flex items-center ">
                                            <div className="font-bold text-[14px]">259.000đ</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mt-[15px]">
                                <img src="https://image.hsv-tech.io/150x0/bbx/common/9bba6ba7-e32e-4e7e-95d6-bd5f17555937.webp" alt="" className="w-[80px] h-[85px] min-w-[80px] rounded-[5px] border-1" />
                                <div className="flex-1 ml-[10px] flex flex-col justify-between">
                                    <div className="flex justify-between">
                                        <Link to='/' className="text-[12px] mr-[10px] flex-1 min-w-0 line-clamp-2">
                                            Son Thạch Bóng Thuần Chay Amuse Jel-Fit Tint 3.8g
                                        </Link>
                                        <div className="max-w-[22px] h-[22px] bg-[#dfdfdf] flex items-center justify-center rounded-[11px] p-[3px] cursor-pointer">
                                            <RemoveIcon sx={{ fontSize: '16px' }} />
                                        </div>
                                    </div>
                                    <div className="text-[12px] my-[3px]">
                                        SKU: 11112241
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="rounded-[38px] border-1 border-[#dfdfdf] flex items-center py-0">
                                            <div className="px-[7px] flex items-center cursor-pointer">
                                                <RemoveOutlinedIcon sx={{ fontSize: '12px', color: 'black' }} />
                                            </div>
                                            <div className="text-[12px] leading-[26px] px-[5px]">1</div>
                                            <div className="px-[7px] flex items-center cursor-pointer">
                                                <AddOutlinedIcon sx={{ fontSize: '12px', color: 'black' }} />
                                            </div>
                                        </div>
                                        <div className="flex items-center ">
                                            <div className="font-bold text-[14px]">259.000đ</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Divider sx={{ marginY: '15px' }} />
                        <div className='px-[15px] flex items-center justify-between font-medium text-[14px]'>
                            <div>Tổng giá trị đơn hàng</div>
                            <div>1.471.000đ</div>
                        </div>
                        <Divider sx={{ marginY: '15px' }} />
                        <div className='px-[15px] font-medium text-[14px]'>
                            Mã giảm giá, voucher có thể thêm vào ở màn hình kế tiếp
                        </div>
                        <div className='px-[15px] mt-[20px]'>
                            <div onClick={handleCheckout} className="text-white h-[40px] px-[20px] py-[6px] rounded-[40px] flex items-center justify-center cursor-pointer font-bold" style={{ backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" }}>
                                TIẾP TỤC
                            </div>
                        </div>
                    </div>
                </div>
                <div className='[@media(min-width:800px)]:hidden fixed bottom-0 left-0 right-0 bg-white pt-[15px] pb-[20px] shadow-[0px_0px_10px_rgba(57,105,179,0.25)]'>
                    <div className='absolute -top-[16px] left-1/2 -translate-x-1/2'>
                        <div onClick={() => dispatch(openPreviewOrderDrawer())} className='w-[40px] h-[40px] bg-white rounded-full shadow-[0_-2px_8px_rgba(0,0,0,0.15)] flex items-center justify-center cursor-pointer'>
                            <KeyboardArrowUpIcon sx={{ fontSize: '24px' }} />
                        </div>
                    </div>
                    <div className='flex items-center justify-between font-medium text-[14px] px-[23px]'>
                        <div>Tổng giá trị đơn hàng</div>
                        <div>1.471.000đ</div>
                    </div>
                    <Divider sx={{ marginY: '15px' }} />
                    <div className='font-medium text-[14px] px-[23px]'>
                        Mã giảm giá, voucher có thể thêm vào ở màn hình kế tiếp
                    </div>
                    <div className='mt-[20px] px-[23px]'>
                        <div onClick={handleCheckout} className="text-white h-[40px] px-[20px] py-[6px] rounded-[40px] flex items-center justify-center cursor-pointer font-bold" style={{ backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" }}>
                            TIẾP TỤC
                        </div>
                    </div>
                </div>
            </div>
            <Drawer
                anchor={"bottom"}
                open={previewProducts.isOpen}
                onClose={() => dispatch(closePreviewOrderDrawer())}
                sx={{
                    "& .MuiDrawer-paper": {
                        height: "550px",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                    }
                }}
            >
                <Box
                    sx={{ width: 'auto', height: '100%', display: 'flex', flexDirection: 'column' }}
                    role="presentation"
                >
                    <div className="flex items-center justify-between px-[24px] py-[16px]">
                        <div></div>
                        <div className="font-bold">Đơn hàng</div>
                        <div onClick={() => dispatch(closePreviewOrderDrawer())} className="cursor-pointer">
                            <ClearIcon sx={{ fontSize: '20px' }} />
                        </div>
                    </div>
                    <Divider />
                    <div className='pb-[20px]'>
                        <div className='px-[15px] max-h-[300px] overflow-y-auto custom-scrollbar'>
                            <div className="flex mt-[15px]">
                                <img src="https://image.hsv-tech.io/150x0/bbx/common/9bba6ba7-e32e-4e7e-95d6-bd5f17555937.webp" alt="" className="w-[80px] h-[85px] min-w-[80px] rounded-[5px] border-1" />
                                <div className="flex-1 ml-[10px] flex flex-col justify-between">
                                    <div className="flex justify-between">
                                        <Link to='/' className="text-[12px] mr-[10px] flex-1 min-w-0 line-clamp-2">
                                            Son Thạch Bóng Thuần Chay Amuse Jel-Fit Tint 3.8g
                                        </Link>
                                        <div className="max-w-[22px] h-[22px] bg-[#dfdfdf] flex items-center justify-center rounded-[11px] p-[3px] cursor-pointer">
                                            <RemoveIcon sx={{ fontSize: '16px' }} />
                                        </div>
                                    </div>
                                    <div className="text-[12px] my-[3px]">
                                        SKU: 11112241
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="rounded-[38px] border-1 border-[#dfdfdf] flex items-center py-0">
                                            <div className="px-[7px] flex items-center cursor-pointer">
                                                <RemoveOutlinedIcon sx={{ fontSize: '12px', color: 'black' }} />
                                            </div>
                                            <div className="text-[12px] leading-[26px] px-[5px]">1</div>
                                            <div className="px-[7px] flex items-center cursor-pointer">
                                                <AddOutlinedIcon sx={{ fontSize: '12px', color: 'black' }} />
                                            </div>
                                        </div>
                                        <div className="flex items-center ">
                                            <div className="font-bold text-[14px]">259.000đ</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mt-[15px]">
                                <img src="https://image.hsv-tech.io/150x0/bbx/common/9bba6ba7-e32e-4e7e-95d6-bd5f17555937.webp" alt="" className="w-[80px] h-[85px] min-w-[80px] rounded-[5px] border-1" />
                                <div className="flex-1 ml-[10px] flex flex-col justify-between">
                                    <div className="flex justify-between">
                                        <Link to='/' className="text-[12px] mr-[10px] flex-1 min-w-0 line-clamp-2">
                                            Son Thạch Bóng Thuần Chay Amuse Jel-Fit Tint 3.8g
                                        </Link>
                                        <div className="max-w-[22px] h-[22px] bg-[#dfdfdf] flex items-center justify-center rounded-[11px] p-[3px] cursor-pointer">
                                            <RemoveIcon sx={{ fontSize: '16px' }} />
                                        </div>
                                    </div>
                                    <div className="text-[12px] my-[3px]">
                                        SKU: 11112241
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="rounded-[38px] border-1 border-[#dfdfdf] flex items-center py-0">
                                            <div className="px-[7px] flex items-center cursor-pointer">
                                                <RemoveOutlinedIcon sx={{ fontSize: '12px', color: 'black' }} />
                                            </div>
                                            <div className="text-[12px] leading-[26px] px-[5px]">1</div>
                                            <div className="px-[7px] flex items-center cursor-pointer">
                                                <AddOutlinedIcon sx={{ fontSize: '12px', color: 'black' }} />
                                            </div>
                                        </div>
                                        <div className="flex items-center ">
                                            <div className="font-bold text-[14px]">259.000đ</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mt-[15px]">
                                <img src="https://image.hsv-tech.io/150x0/bbx/common/9bba6ba7-e32e-4e7e-95d6-bd5f17555937.webp" alt="" className="w-[80px] h-[85px] min-w-[80px] rounded-[5px] border-1" />
                                <div className="flex-1 ml-[10px] flex flex-col justify-between">
                                    <div className="flex justify-between">
                                        <Link to='/' className="text-[12px] mr-[10px] flex-1 min-w-0 line-clamp-2">
                                            Son Thạch Bóng Thuần Chay Amuse Jel-Fit Tint 3.8g
                                        </Link>
                                        <div className="max-w-[22px] h-[22px] bg-[#dfdfdf] flex items-center justify-center rounded-[11px] p-[3px] cursor-pointer">
                                            <RemoveIcon sx={{ fontSize: '16px' }} />
                                        </div>
                                    </div>
                                    <div className="text-[12px] my-[3px]">
                                        SKU: 11112241
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="rounded-[38px] border-1 border-[#dfdfdf] flex items-center py-0">
                                            <div className="px-[7px] flex items-center cursor-pointer">
                                                <RemoveOutlinedIcon sx={{ fontSize: '12px', color: 'black' }} />
                                            </div>
                                            <div className="text-[12px] leading-[26px] px-[5px]">1</div>
                                            <div className="px-[7px] flex items-center cursor-pointer">
                                                <AddOutlinedIcon sx={{ fontSize: '12px', color: 'black' }} />
                                            </div>
                                        </div>
                                        <div className="flex items-center ">
                                            <div className="font-bold text-[14px]">259.000đ</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mt-[15px]">
                                <img src="https://image.hsv-tech.io/150x0/bbx/common/9bba6ba7-e32e-4e7e-95d6-bd5f17555937.webp" alt="" className="w-[80px] h-[85px] min-w-[80px] rounded-[5px] border-1" />
                                <div className="flex-1 ml-[10px] flex flex-col justify-between">
                                    <div className="flex justify-between">
                                        <Link to='/' className="text-[12px] mr-[10px] flex-1 min-w-0 line-clamp-2">
                                            Son Thạch Bóng Thuần Chay Amuse Jel-Fit Tint 3.8g
                                        </Link>
                                        <div className="max-w-[22px] h-[22px] bg-[#dfdfdf] flex items-center justify-center rounded-[11px] p-[3px] cursor-pointer">
                                            <RemoveIcon sx={{ fontSize: '16px' }} />
                                        </div>
                                    </div>
                                    <div className="text-[12px] my-[3px]">
                                        SKU: 11112241
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="rounded-[38px] border-1 border-[#dfdfdf] flex items-center py-0">
                                            <div className="px-[7px] flex items-center cursor-pointer">
                                                <RemoveOutlinedIcon sx={{ fontSize: '12px', color: 'black' }} />
                                            </div>
                                            <div className="text-[12px] leading-[26px] px-[5px]">1</div>
                                            <div className="px-[7px] flex items-center cursor-pointer">
                                                <AddOutlinedIcon sx={{ fontSize: '12px', color: 'black' }} />
                                            </div>
                                        </div>
                                        <div className="flex items-center ">
                                            <div className="font-bold text-[14px]">259.000đ</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Divider sx={{ marginY: '15px' }} />
                        <div className='px-[15px] flex items-center justify-between font-medium text-[14px]'>
                            <div>Tổng giá trị đơn hàng</div>
                            <div>1.471.000đ</div>
                        </div>
                        <Divider sx={{ marginY: '15px' }} />
                        <div className='px-[15px] font-medium text-[14px]'>
                            Mã giảm giá, voucher có thể thêm vào ở màn hình kế tiếp
                        </div>
                        <div className='px-[15px] mt-[20px]'>
                            <div onClick={handleCheckout} className="text-white h-[40px] px-[20px] py-[6px] rounded-[40px] flex items-center justify-center cursor-pointer font-bold" style={{ backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" }}>
                                TIẾP TỤC
                            </div>
                        </div>
                    </div>
                </Box>
            </Drawer>
        </div>
    )
}

export default PreviewOrderPage