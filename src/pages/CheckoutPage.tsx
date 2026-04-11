import Rating from '@mui/material/Rating'
import RemoveIcon from '@mui/icons-material/Remove'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import ClearIcon from '@mui/icons-material/Clear'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import PreviewProductCard from '../components/ui/Card/PreviewProductCard';
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { closePreviewOrderDrawer, openPreviewOrderDrawer } from '../store/slices/clickPreviewOrderSlice'
import Box from '@mui/material/Box'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import CartCheckbox from '../components/ui/Checkbox/CartCheckbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import SelectMethodPaymentRadio from '../components/ui/Radio/SelectMethodPaymentRadio'
import SelectShipmentRadio from '../components/ui/Radio/SelectShipmentRadio'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'
import InputAdornment from '@mui/material/InputAdornment'

const CheckoutOrderPage = () => {

    const [expanded, setExpanded] = useState(false);

    const dispatch = useAppDispatch();

    const [note, setNote] = useState('false');

    const [exported, setExported] = useState('false');

    const previewProducts = useAppSelector((state) => state.previewOrderDrawer);

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
                Thông tin thanh toán
            </div>
            <div className='grid grid-cols-12 gap-[20px] mt-[25px] [@media(max-width:800px)]:block'>
                <div className='col-span-8 [@media(max-width:992px)]:col-span-7'>
                    <div>
                        <div className='flex items-center justify-between pb-[10px]'>
                            <div className='leading-[26px] text-[18px] font-bold'>Thông tin người mua hàng</div>
                            <div className='text-[#ab2328] text-[14px] leading-1.5715 hover:text-black transition duration-400 ease-in-out cursor-pointer px-[15px]'>Đăng nhập nhanh</div>
                        </div>
                        <div className='grid grid-cols-2 gap-[15px]'>
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
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Số điện thoại"
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
                        <div className='leading-[26px] text-[18px] font-bold mb-[10px] mt-[25px]'>
                            Thông tin nhận hàng
                        </div>
                        <div className='grid grid-cols-12 gap-[15px]'>
                            <div className='col-span-12'>
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
                            <div className='col-span-12'>
                                <FormControlLabel
                                    sx={{ margin: 0 }}
                                    control={<CartCheckbox />}
                                    label={
                                        <span style={{ fontSize: '14px', color: '#000000', paddingLeft: '8px', paddingRight: '8px' }}>
                                            Tạo tài khoản với thông tin này
                                        </span>
                                    }
                                />
                            </div>
                        </div>
                        <div className='leading-[26px] text-[18px] font-bold mb-[10px] mt-[25px]'>
                            Phương thức thanh toán
                        </div>
                        <SelectMethodPaymentRadio />
                        <div className='leading-[26px] text-[18px] font-bold mb-[10px] mt-[30px]'>
                            Phương thức vận chuyển
                        </div>
                        <SelectShipmentRadio />
                        <div className='leading-[26px] text-[18px] font-bold mb-[10px] mt-[30px]'>
                            HSV Loyalty Point
                        </div>
                        <div className='p-[15px] text-[14px] leading-1.5715 border-1 border-[#dfdfdf] rounded-[5px]'>
                            <span className='underline semibold pr-[3px] cursor-pointer'>Đăng nhập</span> để dùng điểm tích lũy của bạn
                        </div>
                        <div className='mt-[20px] flex items-center justify-between'>
                            <div className='leading-[26px] text-[18px] font-bold'>Ghi chú</div>
                            <ToggleButtonGroup
                                value={note}
                                exclusive
                                onChange={(_, newValue) => { if (newValue !== null) setNote(newValue) }}
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
                                <ToggleButton value="true" disableRipple>Có</ToggleButton>
                                <ToggleButton value="false" disableRipple>Không</ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                        {note == 'true' &&
                            <textarea
                                className='mt-[15px] h-[50px] rounded-[5px] w-full border-1 border-[#d9d9d9] p-[11px] text-[14px] 
                                focus:outline-none focus:border-[#bf585b] focus:shadow-[0_0_0_2px_rgb(234,199,200)] 
                                hover:border-[#bf585b]
                                transition-all duration-200 resize-none placeholder:text-[14px] placeholder:text-[#858585]'
                                placeholder='Nếu bạn muốn để lại một số ghi chú'
                            />
                        }
                        <div className='mt-[25px] flex items-center justify-between'>
                            <div className='leading-[26px] text-[18px] font-bold'>Thông tin xuất hoá đơn</div>
                            <ToggleButtonGroup
                                value={exported}
                                exclusive
                                onChange={(_, newValue) => { if (newValue !== null) setExported(newValue) }}
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
                                <ToggleButton value="true" disableRipple>Có</ToggleButton>
                                <ToggleButton value="false" disableRipple>Không</ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                        {exported == 'true' &&
                            <div className='mt-[15px] grid grid-cols-12 gap-[20px] p-[15px] border-1 border-[#dfdfdf] rounded-[2px]'>
                                <div className='col-span-12'>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        placeholder="Tên doanh nghiệp"
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
                                        placeholder="Mã số thuế"
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
                                        placeholder="Địa chỉ"
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
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        placeholder="Email nhận hóa đơn"
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
                            </div>
                        }
                    </div>
                </div>
                <div className='col-span-4 [@media(max-width:992px)]:col-span-5 [@media(max-width:800px)]:hidden'>
                    <div className='sticky top-[23%]'>
                        <div className='pt-[15px] pb-[20px] rounded-[5px] border-1 border-[#dfdfdf] shadow-[0px_0px_10px_rgba(57,105,179,0.25)]'>
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
                            <div className='px-[15px] flex items-center justify-between font-medium text-[14px] my-[10px]'>
                                <div>Giảm giá</div>
                                <div className='text-[#0992d0]'>0đ</div>
                            </div>
                            <div className='px-[15px] flex items-center justify-between font-medium text-[14px]'>
                                <div>Phí vận chuyển</div>
                                <div>0đ</div>
                            </div>
                            <div className='px-[15px]'>
                                <Divider sx={{ marginY: '15px' }} />
                            </div>
                            <div className='px-[15px] flex items-center justify-between font-medium text-[14px]'>
                                <div>Tổng (đã bao gồm VAT)</div>
                                <div>1.471.000đ</div>
                            </div>
                            <div className='px-[15px] mt-[20px]'>
                                <div className="text-white h-[40px] px-[20px] py-[6px] rounded-[40px] flex items-center justify-center cursor-pointer font-bold" style={{ backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" }}>
                                    TIẾP TỤC
                                </div>
                                <div className='text-[12px] font-semibold text-center mt-[15px]'>
                                    *Vui lòng không hủy đơn hàng khi đã thanh toán*
                                </div>
                            </div>
                        </div>
                        <div className='px-[18px] py-[16px] border-1 border-[#dfdfdf] rounded-[2px] mt-[20px]'>
                            <div className='mb-[10px] text-[14px]'>
                                Coupon & Voucher
                            </div>
                            <div className='flex items-center'>
                                <TextField
                                    variant="outlined"
                                    placeholder="NHẬP MÃ GIẢM GIÁ"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            padding: '11px',
                                            borderTopLeftRadius: '5px',
                                            borderBottomLeftRadius: '5px',
                                            borderTopRightRadius: '0px',
                                            borderBottomRightRadius: '0px',
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
                                <div className='whitespace-nowrap bg-black text-[14px] px-[15px] py-[12px] rounded-r-[5px] cursor-pointer text-white transition-all ease-in-out duration-300 hover:bg-[#333333]'>
                                    Áp dụng
                                </div>
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
                    <div className='mt-[20px] px-[23px]'>
                        <div className="text-white h-[40px] px-[20px] py-[6px] rounded-[40px] flex items-center justify-center cursor-pointer font-bold" style={{ backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" }}>
                            ĐẶT HÀNG
                        </div>
                        <div className='text-[12px] font-semibold text-center mt-[15px]'>
                            *Vui lòng không hủy đơn hàng khi đã thanh toán*
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
                        height: "575px",
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
                        <div className='px-[15px] max-h-[210px] overflow-y-auto custom-scrollbar'>
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
                        <div className='px-[15px] flex items-center justify-between font-medium text-[14px] my-[10px]'>
                            <div>Giảm giá</div>
                            <div className='text-[#0992d0]'>0đ</div>
                        </div>
                        <div className='px-[15px] flex items-center justify-between font-medium text-[14px]'>
                            <div>Phí vận chuyển</div>
                            <div>0đ</div>
                        </div>
                        <div className='px-[15px]'>
                            <Divider sx={{ marginY: '15px' }} />
                        </div>
                        <div className='px-[15px] flex items-center justify-between font-medium text-[14px]'>
                            <div>Tổng (đã bao gồm VAT)</div>
                            <div>1.471.000đ</div>
                        </div>
                        <Divider sx={{ marginY: '15px' }} />
                        <div className='px-[15px] font-medium text-[14px]'>
                            Mã giảm giá, voucher có thể thêm vào ở màn hình kế tiếp
                        </div>
                        <div className='px-[15px] mt-[20px]'>
                            <div className="text-white h-[40px] px-[20px] py-[6px] rounded-[40px] flex items-center justify-center cursor-pointer font-bold" style={{ backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" }}>
                                ĐẶT HÀNG
                            </div>
                        </div>
                    </div>
                </Box>
            </Drawer>
        </div>
    )
}

export default CheckoutOrderPage