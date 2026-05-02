import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import useProfileDialog from '../hooks/useProfileDialog';
import Radio from '@mui/material/Radio';
import { addresses } from '../../../shared/constants/address.constant';

const ChangeAddressDialog = () => {

    const { isOpenChange, handleCloseChange, handleOpenEdit, handleOpenAdd, selected, setSelected } = useProfileDialog();

    return (
        <Dialog
            open={isOpenChange}
            onClose={handleCloseChange}
            maxWidth={false}
            fullWidth
            slotProps={{
                paper: {
                    sx: { borderRadius: '10px', width: '700px' }
                }
            }}
        >
            <DialogTitle sx={{ paddingX: '15px', paddingY: '24px' }}>
                <div className="flex items-center justify-between">
                    <div></div>
                    <div className="text-[24px] font-semibold">Chọn địa chỉ</div>
                    <IconButton disableRipple onClick={handleCloseChange} sx={{ transition: '300ms ease', '&:hover': { color: 'black' } }}>
                        <CloseIcon sx={{ fontSize: '30px', }} />
                    </IconButton>
                </div>
            </DialogTitle>
            <DialogContent sx={{ padding: '0' }}>
                <div className="flex flex-col px-[24px] gap-[8px] pb-[48px]">
                    {addresses.map((item) => (
                        <div>
                            <div
                                key={item.id}
                                className="flex items-start gap-2 py-4 cursor-pointer"
                                onClick={() => setSelected(item.id)}
                            >
                                <Radio
                                    checked={selected === item.id}
                                    disableRipple
                                    sx={{
                                        padding: 0,
                                        paddingRight: '10px',
                                        "& .MuiSvgIcon-root": { fontSize: 20, color: "#bf585b" },
                                        "&.Mui-checked .MuiSvgIcon-root": { color: "#bf585b" },
                                        "& .MuiTouchRipple-root": { display: "none" },
                                    }}
                                />
                                <div className="flex-1 min-w-0">
                                    <p className="text-[14px] text-gray-800">
                                        {item.name} | {item.phone} | {item.email}
                                    </p>
                                    <p className="text-[14px] text-gray-500 mt-2">{item.address}</p>
                                </div>
                                <button
                                    className="text-gray-400 hover:text-[#bf585b] transition-colors shrink-0 cursor-pointer"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleOpenEdit();
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                    </svg>
                                </button>
                            </div>
                            <Divider />
                        </div>
                    ))}

                </div>
                <Divider />
                <div className='px-[15px] py-[10px] flex items-center'>
                    <div onClick={handleOpenAdd} className='flex-1 cursor-pointer px-[15px] py-[8px] transition-all ease-in-out duration-300 hover:bg-[#FAFAFA]'>+ Thêm địa chỉ</div>
                    <div className='cursor-pointer px-[15px] py-[8px] bg-[#ab2328] text-white transition-all ease-in-out duration-300 hover:opacity-80'>Lưu</div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ChangeAddressDialog;