
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { Link } from 'react-router-dom'
import StoreMap from '../components/common/Map/StoreMap'
import DialogContent from '@mui/material/DialogContent'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

import { useState } from 'react'

const StorePage = () => {

    const [openTimeDialog, setOpenTimeDialog] = useState(false);
    const [openShowroomDialog, setOpenShowroomDialog] = useState(false);
    const [openMapDialog, setOpenMapDialog] = useState(false);

    return (
        <div className='w-[90%] mx-auto'>
            <div className='grid grid-cols-12'>
                <div className='col-span-7 pr-[10px] max-md:col-span-12 max-md:pr-0'>
                    <div className='mt-[10px]'>
                        <div className="flex items-center text-[#797979] gap-2 leading-relaxed">
                            <Link to="/" className="text-[12px]">
                                Trang chủ
                            </Link>
                            <div className="text-[14px]">{">"}</div>
                            <Link to="/" className="text-[12px]">
                                Sản phẩm
                            </Link>
                        </div>
                        <div className='text-[24px] leading-[25px] uppercase mt-[20px] mb-[15px] font-bold'>
                            Tìm Cửa Hàng
                        </div>
                        <div className='text-[16px]'>
                            25 cửa hàng
                        </div>
                    </div>
                    <div className='items-center rounded-[8px] border-1 border-[#dfdfdf] grid grid-cols-12 my-[25px]'>
                        <Autocomplete
                            options={['Hà Nội', 'Hồ Chí Minh', 'Bình Dương', 'Hải Phòng']}
                            className='col-span-3 [@media(max-width:1336px)]:col-span-4 [@media(max-width:992px)]:col-span-6 px-[10px]'
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
                                                border: 'none',
                                            },
                                            '&.Mui-focused fieldset': {
                                                border: 'none',
                                            },
                                        },
                                        '& .MuiAutocomplete-input': {
                                            padding: '0 !important',
                                            cursor: 'pointer',
                                            fontSize: '14px',
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
                            className='col-span-3 [@media(max-width:1336px)]:col-span-4 [@media(max-width:992px)]:col-span-6 px-[10px]'
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
                                                border: 'none',
                                            },
                                            '&.Mui-focused fieldset': {
                                                border: 'none',
                                            },
                                        },
                                        '& .MuiAutocomplete-input': {
                                            padding: '0 !important',
                                            cursor: 'pointer',
                                            fontSize: '14px',
                                        },
                                        '& input::placeholder': {
                                            fontSize: '14px',
                                        },
                                    }}
                                />
                            )}
                        />
                    </div>
                    <div className='grid grid-cols-2 gap-[20px] [@media(max-width:992px)]:grid-cols-1'>
                        <div className="p-[20px] text-[14px] leading-[1.5715] border-1 border-[#EFEFEF] rounded-[3px] cursor-pointer">
                            <div className="flex items-center justify-between mb-1">
                                <div>Hồ Chí Minh</div>
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
                        <div className="p-[20px] text-[14px] leading-[1.5715] border-1 border-[#EFEFEF] rounded-[3px] cursor-pointer">
                            <div className="flex items-center justify-between mb-1">
                                <div>Hồ Chí Minh</div>
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
                        <div className="p-[20px] text-[14px] leading-[1.5715] border-1 border-[#EFEFEF] rounded-[3px] cursor-pointer">
                            <div className="flex items-center justify-between mb-1">
                                <div>Hồ Chí Minh</div>
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
                        <div className="p-[20px] text-[14px] leading-[1.5715] border-1 border-[#EFEFEF] rounded-[3px] cursor-pointer">
                            <div className="flex items-center justify-between mb-1">
                                <div>Hồ Chí Minh</div>
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
                        <div className="p-[20px] text-[14px] leading-[1.5715] border-1 border-[#EFEFEF] rounded-[3px] cursor-pointer">
                            <div className="flex items-center justify-between mb-1">
                                <div>Hồ Chí Minh</div>
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
                        <div className="p-[20px] text-[14px] leading-[1.5715] border-1 border-[#EFEFEF] rounded-[3px] cursor-pointer">
                            <div className="flex items-center justify-between mb-1">
                                <div>Hồ Chí Minh</div>
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
                        <div className="p-[20px] text-[14px] leading-[1.5715] border-1 border-[#EFEFEF] rounded-[3px] cursor-pointer">
                            <div className="flex items-center justify-between mb-1">
                                <div>Hồ Chí Minh</div>
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
                        <div className="p-[20px] text-[14px] leading-[1.5715] border-1 border-[#EFEFEF] rounded-[3px] cursor-pointer">
                            <div className="flex items-center justify-between mb-1">
                                <div>Hồ Chí Minh</div>
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
                        <div className="p-[20px] text-[14px] leading-[1.5715] border-1 border-[#EFEFEF] rounded-[3px] cursor-pointer">
                            <div className="flex items-center justify-between mb-1">
                                <div>Hồ Chí Minh</div>                            </div>
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
                        <div className="p-[20px] text-[14px] leading-[1.5715] border-1 border-[#EFEFEF] rounded-[3px] cursor-pointer">
                            <div className="flex items-center justify-between mb-1">
                                <div>Hồ Chí Minh</div>
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
                <div className='col-span-5 pl-[10px] max-md:col-span-12 max-md:pl-0 max-md:mt-[40px] [@media(max-width:576px)]:hidden'>
                    <StoreMap />
                </div>
            </div>
            <div className='flex justify-center sticky bottom-[20px] mt-[20px] [@media(min-width:576px)]:hidden'>
                <div onClick={() => setOpenMapDialog(true)} className='flex items-center h-[50px] px-[20px] py-[5px] rounded-[38px] bg-black cursor-pointer'>
                    <MapOutlinedIcon sx={{ fontSize: '20px', color: 'white' }} />
                    <div className='ml-[8px] text-[14px] text-white'>Bản đồ</div>
                </div>
            </div>
            <Dialog
                open={openMapDialog}
                onClose={() => setOpenMapDialog(false)}
                maxWidth="md"
                fullWidth
                slotProps={{
                    paper: {
                        sx: { borderRadius: '10px', overflow: 'hidden' }
                    }
                }}
            >
                <div className="flex items-center justify-between px-[20px] py-[15px]">
                    <div className="font-bold text-[18px]">Bản đồ cửa hàng</div>
                    <IconButton onClick={() => setOpenMapDialog(false)}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <DialogContent sx={{ p: 0 }}>
                    <StoreMap />
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default StorePage