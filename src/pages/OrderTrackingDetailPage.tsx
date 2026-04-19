import { Link } from 'react-router-dom'
import OrderStatusStepper from '../components/ui/Stepper/OrderStatusStepper'
import Divider from '@mui/material/Divider'
import DialogContent from '@mui/material/DialogContent'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

const OrderTrackingDetailPage = () => {

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    const [openBuyAgainDialog, setOpenBuyAgainDialog] = useState(true);

    return (
        <div className='mt-[15px]'>
            <div className='w-[80%] mx-auto [@media(max-width:576px)]:w-[90%]'>
                <div className="flex items-center text-[#797979] gap-2 leading-relaxed">
                    <Link to="/" className="text-[12px]">
                        Trang chủ
                    </Link>
                    <div className="text-[14px]">{">"}</div>
                    <Link to="/" className="text-[12px]">
                        Đơn hàng
                    </Link>
                </div>
                <div className='flex items-center justify-between mt-[20px] flex-wrap'>
                    <div>
                        <div className='text-[30px] leading-[34px] font-semibold mb-[20px]'>
                            Đơn hàng #BW02ICYQ đã đặt thành công!
                        </div>
                        <div className='leading-1.5 mb-[10px] text-[14px]'>
                            Giao hàng dự kiến: 04/09/2026 - 04/12/2026
                        </div>
                        <div className='text-[#c73130] text-[12px] leading-[20px]'>
                            Tuyệt đối không chuyển khoản cho shipper trước khi nhận hàng.
                        </div>
                    </div>
                    <div className='flex items-center gap-[8px]'>
                        <div onClick={() => setOpenBuyAgainDialog(true)} className='rounded-[38px] border-black border-1 py-[8px] px-[15px] text-[14px] cursor-pointer [@media(max-width:906px)]:mt-[15px]'>
                            Mua lại
                        </div>
                        <div onClick={() => setOpenDeleteDialog(true)} className='rounded-[38px] border-black border-1 py-[8px] px-[15px] text-[14px] cursor-pointer [@media(max-width:906px)]:mt-[15px]'>
                            Hủy
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[85%] mx-auto [@media(max-width:576px)]:w-[90%]'>
                <OrderStatusStepper />
            </div>
            <div className='w-[80%] mx-auto [@media(max-width:576px)]:w-[90%]'>
                <div className='h-full border-1 border-[#dfdfdf] rounded-[5px] p-[20px] min-h-[140px]'>
                    <div className='text-[16px] font-bold leading-[23px] mb-[10px]'>
                        Đơn hàng
                    </div>
                    <div>
                        <div className='my-[24px] flex items-center justify-between'>
                            <div className='flex items-center'>
                                <img src="https://image.hsv-tech.io/65x65/bbx/common/4f4c8aba-1e4f-43ee-8acc-13ee6e192e37.webp" alt="" className='h-[80px] w-[65px] min-w-[65px]' />
                                <div className='flex-1 ml-[15px]'>
                                    <div className='text-[14px] leading-[20px] underline'>
                                        Chì Chân Mày Peripera Speedy Skinny Brow 0.05G
                                    </div>
                                    <div className='opacity-50 text-[12px] my-[3px]'>
                                        02 dark brown
                                    </div>
                                    <div className='flex items-center gap-[20px]'>
                                        <div className='text-[14px] leading-1.5715'>
                                            SKU: 26320022
                                        </div>
                                        <div className='text-[14px] leading-1.5715'>
                                            x1
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex-1 font-bold text-[14px] text-right'>
                                129.000đ
                            </div>
                        </div>
                        <div className='my-[24px] flex items-center justify-between'>
                            <div className='flex items-center'>
                                <img src="https://image.hsv-tech.io/65x65/bbx/common/4f4c8aba-1e4f-43ee-8acc-13ee6e192e37.webp" alt="" className='h-[80px] w-[65px] min-w-[65px]' />
                                <div className='flex-1 ml-[15px]'>
                                    <div className='text-[14px] leading-[20px] underline'>
                                        Chì Chân Mày Peripera Speedy Skinny Brow 0.05G
                                    </div>
                                    <div className='opacity-50 text-[12px] my-[3px]'>
                                        02 dark brown
                                    </div>
                                    <div className='flex items-center gap-[20px]'>
                                        <div className='text-[14px] leading-1.5715'>
                                            SKU: 26320022
                                        </div>
                                        <div className='text-[14px] leading-1.5715'>
                                            x1
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex-1 font-bold text-[14px] text-right'>
                                129.000đ
                            </div>
                        </div>
                    </div>
                    <Divider />
                    <div className='mt-[15px]'>
                        <div className='flex items-center justify-between mt-[5px] text-[14px]'>
                            <div>Tạm tính</div>
                            <div>0đ</div>
                        </div>
                        <div className='flex items-center justify-between mt-[5px] text-[14px]'>
                            <div>Giảm giá</div>
                            <div className='text-[#0992d0]'>0đ</div>
                        </div>
                        <div className='flex items-center justify-between mt-[5px] text-[14px]'>
                            <div>Shipping</div>
                            <div>0đ</div>
                        </div>
                        <div className='flex items-center justify-between mt-[5px] text-[14px]'>
                            <div>Tổng</div>
                            <div>106.000đ</div>
                        </div>
                    </div>
                </div>
            </div>
            <Dialog
                open={openDeleteDialog}
                onClose={() => setOpenDeleteDialog(false)}
                maxWidth={false}
                fullWidth
                sx={{
                    '@media (max-width: 576px)': {
                        '& .MuiDialog-container': {
                            alignItems: 'flex-end',
                        }
                    }
                }}
                slotProps={{
                    paper: {
                        sx: {
                            borderRadius: '10px',
                            width: '500px',
                            '@media (max-width: 576px)': {
                                width: '100%',
                                height: '60%',
                                maxHeight: '100% !important',
                                maxWidth: '100% !important',
                                margin: 0,
                                borderRadius: '10px 10px 0 0',
                            },
                        }
                    }
                }}
            >
                <DialogTitle sx={{ paddingX: '15px', paddingY: '24px' }}>
                    <div className="text-[24px] font-semibold text-center">Bạn có chắc muốn huỷ đơn này?</div>
                </DialogTitle>
                <DialogContent sx={{ p: '24px' }}>
                    <div className='flex items-center justify-between text-[14px] leading-[1.5715]'>
                        <div>Mã đơn</div>
                        <div className='font-bold'>BW5DAAK3</div>
                    </div>
                    <div className='mt-[15px] flex flex-col gap-[10px]'>
                        <label htmlFor="reason" className='text-[14px] leading-[1.5715]'>Lý do <span className='text-red-500'>*</span></label>
                        <Autocomplete
                            options={[
                                "Trùng đơn",
                                "Hủy tạo lại",
                                "Khác",
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
                                    slotProps={{
                                        htmlInput: {
                                            ...params.inputProps,
                                            id: 'reason',
                                        },
                                    }}
                                    placeholder="Lí do"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            padding: '11px',
                                            borderRadius: '5px',
                                            cursor: 'pointer',
                                            '& fieldset': {
                                                border: '1px solid #d9d9d9',
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
                    <div className='mt-[15px] flex flex-col gap-[10px]'>
                        <label htmlFor="reason" className='text-[14px] leading-[1.5715]'>Ghi chú</label>
                        <textarea
                            className='h-[70px] rounded-[5px] w-full border-1 border-[#d9d9d9] p-[11px] text-[14px] 
                                focus:outline-none focus:border-[#bf585b] focus:shadow-[0_0_0_2px_rgb(234,199,200)] 
                                hover:border-[#bf585b]
                                transition-all duration-200 resize-none placeholder:text-[14px] placeholder:text-[#858585]'
                            placeholder='Nếu bạn muốn để lại một số ghi chú'
                        />
                    </div>
                    <div className="flex items-center mt-[30px] gap-[10px] justify-center">
                        <div onClick={() => setOpenDeleteDialog(false)} className="text-white h-[40px] px-[20px] py-[6px] rounded-[40px] flex items-center justify-center cursor-pointer bg-black">
                            Hủy
                        </div>
                        <div className="text-white h-[40px] px-[20px] py-[6px] rounded-[40px] flex items-center justify-center cursor-pointer" style={{ backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" }}>
                            Gửi
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
            <Dialog
                open={openBuyAgainDialog}
                onClose={() => setOpenBuyAgainDialog(false)}
                maxWidth={false}
                fullWidth
                sx={{
                    '@media (max-width: 576px)': {
                        '& .MuiDialog-container': {
                            alignItems: 'flex-end',
                        }
                    }
                }}
                slotProps={{
                    paper: {
                        sx: {
                            borderRadius: '10px',
                            width: '500px',
                            '@media (max-width: 576px)': {
                                width: '100%',
                                height: '60%',
                                maxHeight: '100% !important',
                                maxWidth: '100% !important',
                                margin: 0,
                                borderRadius: '10px 10px 0 0',
                            },
                        }
                    }
                }}
            >
                <DialogTitle sx={{ paddingX: '15px', paddingY: '24px' }}>
                    <div className="flex items-center justify-between">
                        <div></div>
                        <div className="text-[24px] font-semibold">Thêm vào giỏ hàng</div>
                        <IconButton disableRipple onClick={() => setOpenBuyAgainDialog(false)} sx={{ transition: '300ms ease', '&:hover': { color: 'black' } }}>
                            <CloseIcon sx={{ fontSize: '30px', }} />
                        </IconButton>
                    </div>
                </DialogTitle>
                <DialogContent sx={{ p: '24px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <div className='flex-1 overflow-y-auto custom-scrollbar'>
                        <div className='my-[20px] flex items-center justify-between'>
                            <div className='flex items-center'>
                                <img src="https://image.hsv-tech.io/65x65/bbx/common/4f4c8aba-1e4f-43ee-8acc-13ee6e192e37.webp" alt="" className='h-[80px] w-[65px] min-w-[65px]' />
                                <div className='flex-1 ml-[15px]'>
                                    <div className='text-[14px] leading-[20px] underline'>
                                        Chì Chân Mày Peripera Speedy Skinny Brow 0.05G
                                    </div>
                                    <div className='opacity-50 text-[12px] my-[3px]'>
                                        02 dark brown
                                    </div>
                                    <div className='flex items-center gap-[20px]'>
                                        <div className='text-[14px] leading-1.5715'>
                                            SKU: 26320022
                                        </div>
                                        <div className='text-[14px] leading-1.5715'>
                                            x1
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex-1 font-bold text-[14px] text-right'>
                                129.000đ
                            </div>
                        </div>
                        <div className='my-[20px] flex items-center justify-between'>
                            <div className='flex items-center'>
                                <img src="https://image.hsv-tech.io/65x65/bbx/common/4f4c8aba-1e4f-43ee-8acc-13ee6e192e37.webp" alt="" className='h-[80px] w-[65px] min-w-[65px]' />
                                <div className='flex-1 ml-[15px]'>
                                    <div className='text-[14px] leading-[20px] underline'>
                                        Chì Chân Mày Peripera Speedy Skinny Brow 0.05G
                                    </div>
                                    <div className='opacity-50 text-[12px] my-[3px]'>
                                        02 dark brown
                                    </div>
                                    <div className='flex items-center gap-[20px]'>
                                        <div className='text-[14px] leading-1.5715'>
                                            SKU: 26320022
                                        </div>
                                        <div className='text-[14px] leading-1.5715'>
                                            x1
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex-1 font-bold text-[14px] text-right'>
                                129.000đ
                            </div>
                        </div>
                        <div className='my-[20px] flex items-center justify-between'>
                            <div className='flex items-center'>
                                <img src="https://image.hsv-tech.io/65x65/bbx/common/4f4c8aba-1e4f-43ee-8acc-13ee6e192e37.webp" alt="" className='h-[80px] w-[65px] min-w-[65px]' />
                                <div className='flex-1 ml-[15px]'>
                                    <div className='text-[14px] leading-[20px] underline'>
                                        Chì Chân Mày Peripera Speedy Skinny Brow 0.05G
                                    </div>
                                    <div className='opacity-50 text-[12px] my-[3px]'>
                                        02 dark brown
                                    </div>
                                    <div className='flex items-center gap-[20px]'>
                                        <div className='text-[14px] leading-1.5715'>
                                            SKU: 26320022
                                        </div>
                                        <div className='text-[14px] leading-1.5715'>
                                            x1
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex-1 font-bold text-[14px] text-right'>
                                129.000đ
                            </div>
                        </div>
                        <div className='my-[20px] flex items-center justify-between'>
                            <div className='flex items-center'>
                                <img src="https://image.hsv-tech.io/65x65/bbx/common/4f4c8aba-1e4f-43ee-8acc-13ee6e192e37.webp" alt="" className='h-[80px] w-[65px] min-w-[65px]' />
                                <div className='flex-1 ml-[15px]'>
                                    <div className='text-[14px] leading-[20px] underline'>
                                        Chì Chân Mày Peripera Speedy Skinny Brow 0.05G
                                    </div>
                                    <div className='opacity-50 text-[12px] my-[3px]'>
                                        02 dark brown
                                    </div>
                                    <div className='flex items-center gap-[20px]'>
                                        <div className='text-[14px] leading-1.5715'>
                                            SKU: 26320022
                                        </div>
                                        <div className='text-[14px] leading-1.5715'>
                                            x1
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex-1 font-bold text-[14px] text-right'>
                                129.000đ
                            </div>
                        </div>
                        <div className='my-[20px] flex items-center justify-between'>
                            <div className='flex items-center'>
                                <img src="https://image.hsv-tech.io/65x65/bbx/common/4f4c8aba-1e4f-43ee-8acc-13ee6e192e37.webp" alt="" className='h-[80px] w-[65px] min-w-[65px]' />
                                <div className='flex-1 ml-[15px]'>
                                    <div className='text-[14px] leading-[20px] underline'>
                                        Chì Chân Mày Peripera Speedy Skinny Brow 0.05G
                                    </div>
                                    <div className='opacity-50 text-[12px] my-[3px]'>
                                        02 dark brown
                                    </div>
                                    <div className='flex items-center gap-[20px]'>
                                        <div className='text-[14px] leading-1.5715'>
                                            SKU: 26320022
                                        </div>
                                        <div className='text-[14px] leading-1.5715'>
                                            x1
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex-1 font-bold text-[14px] text-right'>
                                129.000đ
                            </div>
                        </div>
                        <div className='my-[20px] flex items-center justify-between'>
                            <div className='flex items-center'>
                                <img src="https://image.hsv-tech.io/65x65/bbx/common/4f4c8aba-1e4f-43ee-8acc-13ee6e192e37.webp" alt="" className='h-[80px] w-[65px] min-w-[65px]' />
                                <div className='flex-1 ml-[15px]'>
                                    <div className='text-[14px] leading-[20px] underline'>
                                        Chì Chân Mày Peripera Speedy Skinny Brow 0.05G
                                    </div>
                                    <div className='opacity-50 text-[12px] my-[3px]'>
                                        02 dark brown
                                    </div>
                                    <div className='flex items-center gap-[20px]'>
                                        <div className='text-[14px] leading-1.5715'>
                                            SKU: 26320022
                                        </div>
                                        <div className='text-[14px] leading-1.5715'>
                                            x1
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex-1 font-bold text-[14px] text-right'>
                                129.000đ
                            </div>
                        </div>
                    </div>
                    <div className="w-[140px] mt-[20px] mx-auto text-white h-[40px] px-[20px] py-[6px] rounded-[40px] flex items-center justify-center cursor-pointer font-bold" style={{ backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" }}>
                        LƯU
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default OrderTrackingDetailPage