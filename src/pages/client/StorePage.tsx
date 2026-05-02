
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import NavigateBreadcrumb from '../../shared/components/common/Breadcrumb/NavigateBreadcrumb';
import { MapDialog, MapMobileButton, ShowroomDialog, StoreCard, StoreMap, TimeDialog } from '../../features/location';

const StorePage = () => {

    return (
        <div className='w-[90%] mx-auto'>
            <div className='grid grid-cols-12'>
                <div className='col-span-7 pr-[10px] max-md:col-span-12 max-md:pr-0'>
                    <div className='mt-[10px]'>
                       <NavigateBreadcrumb mainCategory='Trang chủ' subCategory='Sản phẩm' />
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
                        <StoreCard />
                        <StoreCard />
                        <StoreCard />
                        <StoreCard />
                        <StoreCard />
                        <StoreCard />
                        <StoreCard />
                        <StoreCard />
                        <StoreCard />
                    </div>
                    <ShowroomDialog />
                    <TimeDialog />
                </div>
                <div className='col-span-5 pl-[10px] max-md:col-span-12 max-md:pl-0 max-md:mt-[40px] [@media(max-width:576px)]:hidden'>
                    <StoreMap />
                </div>
            </div>
            <MapMobileButton />
            <MapDialog />
        </div>
    );
};

export default StorePage;