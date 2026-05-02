import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import useOrder from '../hooks/useOrder';
import CloseIcon from '@mui/icons-material/Close';

const BuyAgainDialog = () => {

    const { isOpenBuyAgain, handleCloseBuyAgainDialog } = useOrder();

    return (
        <Dialog
            open={isOpenBuyAgain}
            onClose={handleCloseBuyAgainDialog}
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
                    <IconButton disableRipple onClick={handleCloseBuyAgainDialog} sx={{ transition: '300ms ease', '&:hover': { color: 'black' } }}>
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
    );
};

export default BuyAgainDialog;