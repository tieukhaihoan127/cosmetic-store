import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Link } from 'react-router-dom'
import Divider from '@mui/material/Divider';
import ProductPagination from '../components/common/Pagination/ProductPagination';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';
import CartCheckbox from '../components/ui/Checkbox/CartCheckbox';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from "@mui/icons-material/Delete";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const ProfileAddressPage = () => {

    const [openAddAddressDialog, setOpenAddAddressDialog] = useState(false);

    const [openEditAddressDialog, setOpenEditAddressDialog] = useState(false);

    const [anchorEl, setAnchorEl] = useState<SVGSVGElement | null>(null);

    return (
        <div>
            <div className="flex items-center text-[#797979] gap-2 leading-relaxed">
                <Link to="/" className="text-[12px]">
                    Trang chủ
                </Link>
                <div className="text-[14px]">{">"}</div>
                <Link to="/" className="text-[12px]">
                    Địa chỉ giao nhận
                </Link>
            </div>
            <div className='flex items-center justify-between'>
                <div className='mb-[15px] text-[24px] font-bold leading[[1.5715] mt-[15px]'>
                    Địa chỉ giao nhận
                </div>
                <div onClick={() => setOpenAddAddressDialog(true)} className='px-[15px] py-[8px] rounded-[38px] text-white bg-black text-[14px] cursor-pointer'>
                    + Thêm địa chỉ
                </div>
            </div>
            <div className='grid grid-cols-2 gap-[10px]'>
                <div className='rounded-[10px] border-1 border-[#f0f0f0]'>
                    <div className='flex items-center justify-between p-[15px]'>
                        <div className='text-[14px] leading-[1.5715] font-medium'>127 Lãnh Binh Thăng P12</div>
                        <div className='flex items-center'>
                            <EditOutlinedIcon onClick={() => setOpenEditAddressDialog(true)} sx={{ fontSize: '20px', width: '40px', cursor: 'pointer' }} />
                            <DeleteOutlinedIcon onClick={(e) => setAnchorEl(e.currentTarget)} sx={{ fontSize: '20px', width: '40px', cursor: 'pointer' }} />
                        </div>
                    </div>
                    <Divider />
                    <div className='p-[15px] text-[14px] lading-[1.5715] flex flex-col gap-[2px]'>
                        <div className='font-bold'>
                            Tiêu Hoàn
                        </div>
                        <div className='font-medium'>
                            84764795487
                        </div>
                        <div className='font-medium break-after-all'>
                            tieukhaihoan127@gmail.com
                        </div>
                        <div>
                            adasd, Xã Cao Kỳ, Huyện Chợ Mới, Bắc Kạn
                        </div>
                    </div>
                </div>
                <div className='rounded-[10px] border-1 border-[#f0f0f0]'>
                    <div className='flex items-center justify-between p-[15px]'>
                        <div className='text-[14px] leading-[1.5715] font-medium'>127 Lãnh Binh Thăng P12</div>
                        <div className='flex items-center'>
                            <EditOutlinedIcon onClick={() => setOpenEditAddressDialog(true)} sx={{ fontSize: '20px', width: '40px', cursor: 'pointer' }} />
                            <DeleteOutlinedIcon onClick={(e) => setAnchorEl(e.currentTarget)} sx={{ fontSize: '20px', width: '40px', cursor: 'pointer' }} />
                        </div>
                    </div>
                    <Divider />
                    <div className='p-[15px] text-[14px] lading-[1.5715] flex flex-col gap-[2px]'>
                        <div className='font-bold'>
                            Tiêu Hoàn
                        </div>
                        <div className='font-medium'>
                            84764795487
                        </div>
                        <div className='font-medium break-after-all'>
                            tieukhaihoan127@gmail.com
                        </div>
                        <div>
                            adasd, Xã Cao Kỳ, Huyện Chợ Mới, Bắc Kạn
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[20px]'>
                <ProductPagination />
            </div>
            <Dialog
                open={openAddAddressDialog}
                onClose={() => setOpenAddAddressDialog(false)}
                maxWidth={false}
                fullWidth
                slotProps={{
                    paper: {
                        sx: { borderRadius: '10px', width: '470px' }
                    }
                }}
            >
                <DialogTitle sx={{ paddingX: '15px', paddingY: '24px' }}>
                    <div className="flex items-center justify-between">
                        <div></div>
                        <div className="text-[24px] font-semibold">Thêm địa chỉ</div>
                        <IconButton disableRipple onClick={() => setOpenAddAddressDialog(false)} sx={{ transition: '300ms ease', '&:hover': { color: 'black' } }}>
                            <CloseIcon sx={{ fontSize: '30px', }} />
                        </IconButton>
                    </div>
                </DialogTitle>
                <DialogContent sx={{ p: '24px' }}>
                    <div className='grid grid-cols-12 gap-[15px]'>
                        <div className='col-span-12'>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Tên địa chỉ(vd: Văn phòng, Nhà, ...)"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        padding: '11px',
                                        borderRadius: '5px',
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
                                    '& .MuiInputBase-input': {
                                        padding: '0px !important',
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
                        </div>
                        <div className='col-span-6'>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Họ"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        padding: '11px',
                                        borderRadius: '5px',
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
                                    '& .MuiInputBase-input': {
                                        padding: '0px !important',
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
                        </div>
                        <div className='col-span-6'>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Tên"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        padding: '11px',
                                        borderRadius: '5px',
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
                                    '& .MuiInputBase-input': {
                                        padding: '0px !important',
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
                        </div>
                        <div className='col-span-12'>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Email"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        padding: '11px',
                                        borderRadius: '5px',
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
                                    '& .MuiInputBase-input': {
                                        padding: '0px !important',
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
                        </div>
                        <div className='col-span-12'>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="84"
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <span>+</span>
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        padding: '11px',
                                        borderRadius: '5px',
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
                                    '& .MuiInputBase-input': {
                                        padding: '0px !important',
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
                        </div>
                        <div className='col-span-6'>
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
                        <div className='col-span-6'>
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
                                        placeholder="Phường/xã"
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
                        <div className='col-span-12'>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Tòa nhà, số nhà, tên đường"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        padding: '11px',
                                        borderRadius: '5px',
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
                                    '& .MuiInputBase-input': {
                                        padding: '0px !important',
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
                        </div>
                        <div className='col-span-12 my-[5px]'>
                            <FormControlLabel
                                sx={{ margin: 0 }}
                                control={<CartCheckbox />}
                                label={
                                    <span style={{ fontSize: '14px', color: '#000000', paddingLeft: '8px', paddingRight: '8px' }}>
                                        Đặt làm địa chỉ mặc định
                                    </span>
                                }
                            />
                        </div>
                        <div className='col-span-12'>
                            <div className="text-white h-[40px] px-[20px] py-[6px] rounded-[40px] flex items-center justify-center cursor-pointer font-bold" style={{ backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" }}>
                                LƯU
                            </div>
                        </div>
                    </div>

                </DialogContent>
            </Dialog>
            <Dialog
                open={openEditAddressDialog}
                onClose={() => setOpenEditAddressDialog(false)}
                maxWidth={false}
                fullWidth
                slotProps={{
                    paper: {
                        sx: { borderRadius: '10px', width: '750px' }
                    }
                }}
            >
                <DialogTitle sx={{ paddingX: '15px', paddingY: '24px' }}>
                    <div className="flex items-center justify-between">
                        <div></div>
                        <div className="text-[24px] font-semibold">Chỉnh sửa địa chỉ</div>
                        <IconButton disableRipple onClick={() => setOpenEditAddressDialog(false)} sx={{ transition: '300ms ease', '&:hover': { color: 'black' } }}>
                            <CloseIcon sx={{ fontSize: '30px', }} />
                        </IconButton>
                    </div>
                </DialogTitle>
                <DialogContent sx={{ p: '24px' }}>
                    <div className='grid grid-cols-12 gap-[15px]'>
                        <div className='col-span-12'>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Tên địa chỉ(vd: Văn phòng, Nhà, ...)"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        padding: '11px',
                                        borderRadius: '5px',
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
                                    '& .MuiInputBase-input': {
                                        padding: '0px !important',
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
                        </div>
                        <div className='col-span-6'>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Họ"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        padding: '11px',
                                        borderRadius: '5px',
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
                                    '& .MuiInputBase-input': {
                                        padding: '0px !important',
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
                        </div>
                        <div className='col-span-6'>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Tên"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        padding: '11px',
                                        borderRadius: '5px',
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
                                    '& .MuiInputBase-input': {
                                        padding: '0px !important',
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
                        </div>
                        <div className='col-span-12'>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Email"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        padding: '11px',
                                        borderRadius: '5px',
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
                                    '& .MuiInputBase-input': {
                                        padding: '0px !important',
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
                        </div>
                        <div className='col-span-12'>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="84"
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <span>+</span>
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        padding: '11px',
                                        borderRadius: '5px',
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
                                    '& .MuiInputBase-input': {
                                        padding: '0px !important',
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
                        </div>
                        <div className='col-span-6'>
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
                        <div className='col-span-6'>
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
                                        placeholder="Phường/xã"
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
                        <div className='col-span-12'>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Tòa nhà, số nhà, tên đường"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        padding: '11px',
                                        borderRadius: '5px',
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
                                    '& .MuiInputBase-input': {
                                        padding: '0px !important',
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
                        </div>
                        <div className='col-span-12 my-[5px]'>
                            <FormControlLabel
                                sx={{ margin: 0 }}
                                control={<CartCheckbox />}
                                label={
                                    <span style={{ fontSize: '14px', color: '#000000', paddingLeft: '8px', paddingRight: '8px' }}>
                                        Đặt làm địa chỉ mặc định
                                    </span>
                                }
                            />
                        </div>
                        <div className='col-span-12'>
                            <div className="mx-auto w-[140px] h-[50px] py-[8px] px-[15px] bg-black text-white flex items-center justify-center">
                                LƯU
                            </div>
                        </div>
                    </div>

                </DialogContent>
            </Dialog>
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                transformOrigin={{ vertical: "bottom", horizontal: "center" }}
                slotProps={{
                    paper: {
                        sx: {
                            px: '16px',
                            py: '12px',
                            borderRadius: '10px',
                            overflow: 'visible',
                            mt: '-24px',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: '-8px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: 0,
                                height: 0,
                                borderLeft: '8px solid transparent',
                                borderRight: '8px solid transparent',
                                borderTop: '8px solid white',
                            },
                        }
                    }
                }}
            >
                <div className='flex items-center gap-[8px] pb-[15px]'>
                    <WarningAmberIcon sx={{ fontSize: '18px', color: '#E6A508' }} />
                    <div className='text-[14px]'>
                        Bạn có chắc muốn xoá địa chỉ này?
                    </div>
                </div>
                <div className='flex items-center gap-[8px] justify-end'>
                    <div className='py-[4px] px-[8px] cursor-pointer text-[14px] rounded-[2px] border-1 border-[#d9d9d9] hover:text-[#bf585b] hover:border-[#bf585b] transition-all ease-in-out duration-300'>
                        Hủy
                    </div>
                    <div className='py-[4px] px-[8px] cursor-pointer text-[14px] rounded-[2px] bg-[#ab2328] text-white hover:opacity-50 transition-all ease-in-out duration-300'>
                        Xóa
                    </div>
                </div>
            </Popover>
        </div>
    )
}

export default ProfileAddressPage