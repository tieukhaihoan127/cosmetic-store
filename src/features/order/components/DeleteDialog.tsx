import Autocomplete from '@mui/material/Autocomplete';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import useOrder from '../hooks/useOrder';

const DeleteDialog = () => {

    const { isOpenDelete, handleCloseDeleteDialog } = useOrder();

    return (
        <Dialog
            open={isOpenDelete}
            onClose={handleCloseDeleteDialog}
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
                    <div onClick={handleCloseDeleteDialog} className="text-white h-[40px] px-[20px] py-[6px] rounded-[40px] flex items-center justify-center cursor-pointer bg-black">
                        Hủy
                    </div>
                    <div className="text-white h-[40px] px-[20px] py-[6px] rounded-[40px] flex items-center justify-center cursor-pointer" style={{ backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" }}>
                        Gửi
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteDialog;