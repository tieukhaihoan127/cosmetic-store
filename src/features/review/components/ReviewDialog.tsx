import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CloseIcon from '@mui/icons-material/Close';
import ToggleButtonYesNo from '../../../shared/components/ui/Button/ToggleButtonYesNo';
import useReview from '../hooks/useReview';

const ReviewDialog = () => {

    const { isOpen, helpful, setHelpful, handleOpenReviewDialog, handleCloseReviewDialog } = useReview();

    return (
        <>
            <div className="flex items-center justify-between mb-[10px]">
                <div className="text-[24px] font-bold leading-[35px]">39 đánh giá</div>
                <div onClick={handleOpenReviewDialog} className="underline leading-[1.5715] font-semibold text-[14px] cursor-pointer">VIẾT ĐÁNH GIÁ</div>
            </div>
            <Dialog
                open={isOpen}
                onClose={handleCloseReviewDialog}
                sx={{
                    maxHeight: '700px',
                    height: '700px',
                    borderRadius: '20px'
                }}
                maxWidth='md'
                fullWidth
                slotProps={{
                    paper: {
                        sx: {
                            borderRadius: '10px',
                            '@media (max-width: 768px)': {
                                margin: 0,
                                maxWidth: '100% !important',
                                width: '100%',
                                borderRadius: 0,
                            }
                        }
                    }
                }}
            >
                <DialogTitle sx={{ paddingX: '24px', paddingTop: '30px', paddingBottom: '16px' }}>
                    <div className="flex items-center justify-between">
                        <div></div>
                        <div className="text-[24px] font-semibold">Viết đánh giá</div>
                        <IconButton disableRipple onClick={handleCloseReviewDialog} sx={{ transition: '300ms ease', '&:hover': { color: 'black' } }}>
                            <CloseIcon sx={{ fontSize: '30px', }} />
                        </IconButton>
                    </div>
                </DialogTitle>
                <DialogContent sx={{ paddingX: '50px' }}>
                    <div className="p-[20px] my-[24px] bg-[#EFEFEF] rounded-[10px] flex items-center">
                        <img src="https://image.hsv-tech.io/65x65/bbx/common/53dd920f-cd75-45b8-bdd5-fd311def024c.webp" alt="" className="w-[65px] h-[65px] min-h-[65px]" />
                        <div className="ml-[15px] flex-1">
                            <div className="text-[14px] font-semibold leading-[20px]">AMUSE</div>
                            <div className="leading-[23px]">Son Thạch Bóng Thuần Chay Amuse Jel-Fit Tint 3.8g</div>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 max-md:grid-cols-1">
                            <div className="mb-[10px] max-md:mb-[20px]">
                                <div className="pb-[8px] leading-[1.5715] text-[14px]">Bạn có sẵn sàng giới thiệu sản phẩm này không?</div>
                                <ToggleButtonYesNo value={helpful} setValue={setHelpful} />
                            </div>
                            <div className="mb-[10px]">
                                <div className="pb-[8px] leading-[1.5715] text-[14px]">Đánh giá chung <span className="text-red-500">*</span></div>
                                <Rating name="half-rating-read" defaultValue={5} precision={1} sx={{ color: '#FADB14', fontSize: '32px', gap: '8px' }} />
                            </div>
                        </div>
                        <Divider sx={{ marginY: '15px' }} />
                        <div className="grid grid-cols-2 max-md:grid-cols-1">
                            <div className="pr-[10px] mb-[10px] max-md:mb-[20px] max-md:pr-0">
                                <div className="pb-[8px] leading-[1.5715] text-[14px]">Biệt danh <span className="text-red-500">*</span></div>
                                <input type="text" placeholder="v.d. Vincent" className="w-full p-[11px] text-[16px] rounded-[5px] border border-[#d9d9d9] outline-none transition-all ease-in-out duration-200 focus:border-black placeholder:text-[14px] hover:border-black cursor-pointer" />
                            </div>
                            <div className="pl-[10px] mb-[10px] max-md:pl-0">
                                <div className="pb-[8px] leading-[1.5715] text-[14px]">Email <span className="text-red-500">*</span></div>
                                <input type="text" placeholder="v.d. abc@gmail.com" className="w-full p-[11px] text-[16px] rounded-[5px] border border-[#d9d9d9] outline-none transition-all ease-in-out duration-200 focus:border-black placeholder:text-[14px] hover:border-black cursor-pointer" />
                            </div>
                        </div>
                        <Divider sx={{ marginY: '15px' }} />
                        <div className="grid grid-cols-2 max-md:grid-cols-1">
                            <div className="pr-[10px] mb-[10px] max-md:mb-[20px] max-md:pr-0">
                                <div className="pb-[8px] leading-[1.5715] text-[14px]">Tóm tắt đánh giá <span className="text-red-500">*</span></div>
                                <input type="text" placeholder="Tóm tắt đánh giá của bạn" className="w-full p-[11px] text-[16px] rounded-[5px] border border-[#d9d9d9] outline-none transition-all ease-in-out duration-200 focus:border-black placeholder:text-[14px] hover:border-black cursor-pointer" />
                                <div className="text-[14px] leading-[22px] text-[#646464] mt-[10px] md:hidden">
                                    Tóm tắt mọi thứ trong 1 câu. Ví dụ: Tôi cực kì ưng ý
                                </div>
                            </div>
                            <div className="pl-[10px] mb-[10px] max-md:pl-0">
                                <div className="pb-[8px] leading-[1.5715] text-[14px]">Hình ảnh</div>
                                <div className="flex items-center px-[15px] py-[8px] border-1 border-[#d9d9d9] rounded-[38px] h-[50px] w-fit cursor-pointer">
                                    <FileUploadIcon sx={{ fontSize: '18px' }} />
                                    <div className="ml-[8px] text-[14px] leading-[1.5715]">
                                        Tải ảnh lên
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-[14px] leading-[22px] text-[#646464] mb-[20px] max-md:hidden">
                            Tóm tắt mọi thứ trong 1 câu. Ví dụ: Tôi cực kì ưng ý
                        </div>
                        <div className="grid grid-cols-1 mb-[10px] max-md:mt-[10px]">
                            <div className="pb-[8px] leading-[1.5715] text-[14px]">Đánh giá chi tiết</div>
                            <textarea name="" id="" placeholder="Viết đánh giá chi tiết" className="w-full h-[100px] text-[16px] p-[11px] border border-gray-300 hover:border-black rounded-[5px] focus:outline-none focus:shadow-[0_0_0_2px_rgb(234,199,200)] transition-all duration-200 ease-in-out whitespace-nowrap overflow-x-auto cursor-pointer"></textarea>
                        </div>
                        <div className="text-[14px] leading-[22px] text-[#646464] mb-[20px]" >
                            Bạn có thể nói thêm về sản phẩm ở dưới đây, ví dụ như độ hoàn thiện, sự thoải mái
                        </div>
                        <div className="mt-[30px] flex items-center justify-center px-[40px] rounded-[38px] text-white w-fit mx-auto h-[40px] text-[14px] font-bold cursor-pointer mb-[10px]" style={{ backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" }}>GỬI CHO CHÚNG TÔI</div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ReviewDialog;