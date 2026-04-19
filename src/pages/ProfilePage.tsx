import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
    return (
        <div>
            <div className="flex items-center text-[#797979] gap-2 leading-relaxed [@media(max-width:792px)]:hidden">
                <Link to="/" className="text-[12px]">
                    Trang chủ
                </Link>
                <div className="text-[14px]">{">"}</div>
                <Link to="/" className="text-[12px]">
                    Tài khoản
                </Link>
            </div>
            <div className='mb-[15px] text-[24px] font-bold leading[[1.5715] mt-[15px]'>
                Tài khoản
            </div>
            <div className='grid grid-cols-2 gap-[20px] [@media(max-width:576px)]:grid-cols-1'>
                <div className='group'>
                    <label htmlFor="first-name" className='text-[14px] cursor-pointer'>Tên <span className="text-red-500">*</span></label>
                    <TextField
                        id='first-name'
                        fullWidth
                        variant="outlined"
                        placeholder="Nhập tên"
                        sx={{
                            marginTop: '10px',
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
                            '.group:hover & .MuiOutlinedInput-root fieldset': {
                                borderColor: '#bf585b',
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
                <div className='group'>
                    <label htmlFor="last-name" className='text-[14px] cursor-pointer'>Họ <span className="text-red-500">*</span></label>
                    <TextField
                        id='last-name'
                        fullWidth
                        variant="outlined"
                        placeholder="Nhập họ"
                        sx={{
                            marginTop: '10px',
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
                            '.group:hover & .MuiOutlinedInput-root fieldset': {
                                borderColor: '#bf585b',
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
                <div className='group'>
                    <label htmlFor="email" className='text-[14px] cursor-pointer'>Email <span className="text-red-500">*</span></label>
                    <TextField
                        id='email'
                        fullWidth
                        variant="outlined"
                        placeholder="Email"
                        sx={{
                            marginTop: '10px',
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
                            '.group:hover & .MuiOutlinedInput-root fieldset': {
                                borderColor: '#bf585b',
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
                <div className='group'>
                    <label htmlFor="phone" className='text-[14px] cursor-pointer'>Số điện thoại <span className="text-red-500">*</span></label>
                    <TextField
                        id='phone'
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
                            marginTop: '10px',
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
                            '.group:hover & .MuiOutlinedInput-root fieldset': {
                                borderColor: '#bf585b',
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
            <div className='flex justify-end mt-[40px]'>
                <div className="text-white h-[45px] w-[200px] px-[20px] py-[6px] rounded-[40px] flex items-center justify-center cursor-pointer" style={{ backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" }}>
                    Lưu
                </div>
            </div>
        </div>
    )
}

export default ProfilePage