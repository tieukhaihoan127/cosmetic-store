import { Link } from 'react-router-dom';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import LinearProgress from '@mui/material/LinearProgress';
import DialogContent from '@mui/material/DialogContent';
import Rating from '@mui/material/Rating';
import Dialog from '@mui/material/Dialog';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Divider from '@mui/material/Divider';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const ReviewPage = () => {

  const [helpful, setHelpful] = useState('co');
  
  const [openRatingDialog, setOpenRatingDialog] = useState(false);

  return (
    <div className='w-[90%] mx-auto mt-[15px]'>
      <div className='flex items-center'>
        <div className='flex text-[12px] mr-[20px] items-center cursor-pointer'>
          <ArrowBackIosNewOutlinedIcon sx={{ fontSize: '14px' }} />
          <div className='ml-[10px]'>
            Trở về
          </div>
        </div>
        <div className="flex items-center text-[#797979] gap-2 leading-relaxed">
          <Link to="/" className="text-[12px]">
            Trang chủ
          </Link>
          <div className="text-[14px]">{">"}</div>
          <Link to="/" className="text-[12px]">
            Sản phẩm
          </Link>
        </div>
      </div>
      <div className='uppercase text-[36px] leading-[36px] my-[15px] font-medium'>
        Tất cả đánh giá
      </div>
      <div className="p-[20px] my-[24px] bg-[#EFEFEF] rounded-[10px] flex items-center">
        <img src="https://image.hsv-tech.io/65x65/bbx/common/53dd920f-cd75-45b8-bdd5-fd311def024c.webp" alt="" className="w-[65px] h-[65px] min-h-[65px]" />
        <div className="ml-[15px] flex-1">
          <div className="text-[14px] font-semibold leading-[20px]">AMUSE</div>
          <div className="leading-[23px]">Son Thạch Bóng Thuần Chay Amuse Jel-Fit Tint 3.8g</div>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-[50px]">
        <div className="col-span-4 w-[90%] pr-[20px] [@media(max-width:1199px)]:pr-0 [@media(max-width:1199px)]:col-span-12 [@media(max-width:1199px)]:mb-[30px]">
          <div className="flex items-center justify-between mb-[10px]">
            <div className="text-[24px] font-bold leading-[35px]">39 đánh giá</div>
            <div onClick={() => setOpenRatingDialog(true)} className="underline leading-[1.5715] font-semibold text-[14px] cursor-pointer">VIẾT ĐÁNH GIÁ</div>
          </div>
          <Dialog
            open={openRatingDialog}
            onClose={() => setOpenRatingDialog(false)}
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
                <IconButton disableRipple onClick={() => setOpenRatingDialog(false)} sx={{ transition: '300ms ease', '&:hover': { color: 'black' } }}>
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
                    <ToggleButtonGroup
                      value={helpful}
                      exclusive
                      onChange={(_, newValue) => { if (newValue !== null) setHelpful(newValue) }}
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
                      <ToggleButton value="co" disableRipple>Có</ToggleButton>
                      <ToggleButton value="khong" disableRipple>Không</ToggleButton>
                    </ToggleButtonGroup>
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
          <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly sx={{ color: 'black', fontSize: '32px', gap: '6px', marginBottom: '20px' }} />
          <div>
            <div className="flex items-center mb-[15px]">
              <div className="mr-[20px] text-[18px]">5</div>
              <LinearProgress variant="determinate" value={95} sx={{ backgroundColor: '#DFDFDF', flex: 1, '& .MuiLinearProgress-bar': { backgroundColor: 'black' } }} className="flex-1" />
              <div className="ml-[20px] text-[16px]">(37)</div>
            </div>
            <div className="flex items-center mb-[15px]">
              <div className="mr-[20px] text-[18px]">4</div>
              <LinearProgress variant="determinate" value={5} sx={{ backgroundColor: '#DFDFDF', flex: 1, '& .MuiLinearProgress-bar': { backgroundColor: 'black' } }} className="flex-1" />
              <div className="ml-[20px] text-[16px]">(2)</div>
            </div>
            <div className="flex items-center mb-[15px]">
              <div className="mr-[20px] text-[18px]">3</div>
              <LinearProgress variant="determinate" value={0} sx={{ backgroundColor: '#DFDFDF', flex: 1, '& .MuiLinearProgress-bar': { backgroundColor: 'black' } }} className="flex-1" />
              <div className="ml-[20px] text-[16px]">(0)</div>
            </div>
            <div className="flex items-center mb-[15px]">
              <div className="mr-[20px] text-[18px]">2</div>
              <LinearProgress variant="determinate" value={0} sx={{ backgroundColor: '#DFDFDF', flex: 1, '& .MuiLinearProgress-bar': { backgroundColor: 'black' } }} className="flex-1" />
              <div className="ml-[20px] text-[16px]">(0)</div>
            </div>
            <div className="flex items-center mb-[15px]">
              <div className="mr-[20px] text-[18px]">1</div>
              <LinearProgress variant="determinate" value={0} sx={{ backgroundColor: '#DFDFDF', flex: 1, '& .MuiLinearProgress-bar': { backgroundColor: 'black' } }} className="flex-1" />
              <div className="ml-[20px] text-[16px]">(0)</div>
            </div>
          </div>
        </div>
        <div className="col-span-8 px-[10px] [@media(max-width:1199px)]:col-span-12">
          <div>
            <div className="p-0 mb-[15px]">
              <div className="text-14px">
                eopihanta
              </div>
              <div className="flex items-center gap-[20px]">
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly sx={{ color: 'black', fontSize: '14px', gap: '8px' }} />
                <div className="text-[14px] leading-[20px] text-[#828282] ">
                  10/03/2026 22:08
                </div>
              </div>
              <div className="my-[10px] leading-[23px] text-[14px]">
                Mau trôi lớp bóng, còn lại bao lì , màu hơi trầm
              </div>
              <div className="pl-[44px] mt-[20px] mb-[30px]">
                <div className="flex items-center gap-[20px] text-[14px]">
                  <div className="text-[#b0100f] font-semibold">Beauty Box Vietnam</div>
                  <div>10/20/2025 04:18</div>
                </div>
                <div className="text-[12px] mt-[5px] mb-[15px]">
                  Cảm ơn bạn đã đánh giá sản phẩm của AMUSE 5 sao! Chúng tôi rất vui vì bạn đã có trải nghiệm tốt với sản phẩm. Ý kiến của bạn chính là động lực giúp AMUSE tiếp tục cố gắng và phục vụ khách hàng, đem đến những sản phẩm tốt nhất. Hy vọng bạn sẽ tiếp tục yêu thích và sử dụng sản phẩm của AMUSE
                </div>
              </div>
              <Divider sx={{ marginTop: '20px' }} />
            </div>
            <div className="p-0 mb-[15px]">
              <div className="text-14px">
                eopihanta
              </div>
              <div className="flex items-center gap-[20px]">
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly sx={{ color: 'black', fontSize: '14px', gap: '8px' }} />
                <div className="text-[14px] leading-[20px] text-[#828282] ">
                  10/03/2026 22:08
                </div>
              </div>
              <div className="my-[10px] leading-[23px] text-[14px]">
                Mau trôi lớp bóng, còn lại bao lì , màu hơi trầm
              </div>
              <div className="pl-[44px] mt-[20px] mb-[30px]">
                <div className="flex items-center gap-[20px] text-[14px]">
                  <div className="text-[#b0100f] font-semibold">Beauty Box Vietnam</div>
                  <div>10/20/2025 04:18</div>
                </div>
                <div className="text-[12px] mt-[5px] mb-[15px]">
                  Cảm ơn bạn đã đánh giá sản phẩm của AMUSE 5 sao! Chúng tôi rất vui vì bạn đã có trải nghiệm tốt với sản phẩm. Ý kiến của bạn chính là động lực giúp AMUSE tiếp tục cố gắng và phục vụ khách hàng, đem đến những sản phẩm tốt nhất. Hy vọng bạn sẽ tiếp tục yêu thích và sử dụng sản phẩm của AMUSE
                </div>
              </div>
              <Divider sx={{ marginTop: '20px' }} />
            </div>
            <div className="p-0 mb-[15px]">
              <div className="text-14px">
                eopihanta
              </div>
              <div className="flex items-center gap-[20px]">
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly sx={{ color: 'black', fontSize: '14px', gap: '8px' }} />
                <div className="text-[14px] leading-[20px] text-[#828282] ">
                  10/03/2026 22:08
                </div>
              </div>
              <div className="my-[10px] leading-[23px] text-[14px]">
                Mau trôi lớp bóng, còn lại bao lì , màu hơi trầm
              </div>
              <div className="pl-[44px] mt-[20px] mb-[30px]">
                <div className="flex items-center gap-[20px] text-[14px]">
                  <div className="text-[#b0100f] font-semibold">Beauty Box Vietnam</div>
                  <div>10/20/2025 04:18</div>
                </div>
                <div className="text-[12px] mt-[5px] mb-[15px]">
                  Cảm ơn bạn đã đánh giá sản phẩm của AMUSE 5 sao! Chúng tôi rất vui vì bạn đã có trải nghiệm tốt với sản phẩm. Ý kiến của bạn chính là động lực giúp AMUSE tiếp tục cố gắng và phục vụ khách hàng, đem đến những sản phẩm tốt nhất. Hy vọng bạn sẽ tiếp tục yêu thích và sử dụng sản phẩm của AMUSE
                </div>
              </div>
              <Divider sx={{ marginTop: '20px' }} />
            </div>
            <div className="p-0 mb-[15px]">
              <div className="text-14px">
                eopihanta
              </div>
              <div className="flex items-center gap-[20px]">
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly sx={{ color: 'black', fontSize: '14px', gap: '8px' }} />
                <div className="text-[14px] leading-[20px] text-[#828282] ">
                  10/03/2026 22:08
                </div>
              </div>
              <div className="my-[10px] leading-[23px] text-[14px]">
                Mau trôi lớp bóng, còn lại bao lì , màu hơi trầm
              </div>
              <div className="pl-[44px] mt-[20px] mb-[30px]">
                <div className="flex items-center gap-[20px] text-[14px]">
                  <div className="text-[#b0100f] font-semibold">Beauty Box Vietnam</div>
                  <div>10/20/2025 04:18</div>
                </div>
                <div className="text-[12px] mt-[5px] mb-[15px]">
                  Cảm ơn bạn đã đánh giá sản phẩm của AMUSE 5 sao! Chúng tôi rất vui vì bạn đã có trải nghiệm tốt với sản phẩm. Ý kiến của bạn chính là động lực giúp AMUSE tiếp tục cố gắng và phục vụ khách hàng, đem đến những sản phẩm tốt nhất. Hy vọng bạn sẽ tiếp tục yêu thích và sử dụng sản phẩm của AMUSE
                </div>
              </div>
              <Divider sx={{ marginTop: '20px' }} />
            </div>
            <div className="p-0 mb-[15px]">
              <div className="text-14px">
                eopihanta
              </div>
              <div className="flex items-center gap-[20px]">
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly sx={{ color: 'black', fontSize: '14px', gap: '8px' }} />
                <div className="text-[14px] leading-[20px] text-[#828282] ">
                  10/03/2026 22:08
                </div>
              </div>
              <div className="my-[10px] leading-[23px] text-[14px]">
                Mau trôi lớp bóng, còn lại bao lì , màu hơi trầm
              </div>
              <div className="pl-[44px] mt-[20px] mb-[30px]">
                <div className="flex items-center gap-[20px] text-[14px]">
                  <div className="text-[#b0100f] font-semibold">Beauty Box Vietnam</div>
                  <div>10/20/2025 04:18</div>
                </div>
                <div className="text-[12px] mt-[5px] mb-[15px]">
                  Cảm ơn bạn đã đánh giá sản phẩm của AMUSE 5 sao! Chúng tôi rất vui vì bạn đã có trải nghiệm tốt với sản phẩm. Ý kiến của bạn chính là động lực giúp AMUSE tiếp tục cố gắng và phục vụ khách hàng, đem đến những sản phẩm tốt nhất. Hy vọng bạn sẽ tiếp tục yêu thích và sử dụng sản phẩm của AMUSE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewPage