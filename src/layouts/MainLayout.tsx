import { Link, Outlet } from "react-router-dom"
import FooterClient from "../components/layout/Footer/FooterClient"
import HeaderClient from "../components/layout/Header/HeaderClient"
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Drawer from "@mui/material/Drawer";
import { closeWishlistDrawer } from "../store/slices/clickWishlistSlice";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import { closeCartDrawer } from "../store/slices/clickCartSlice";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Typography from "@mui/material/Typography";
import CartCheckbox from "../components/ui/Checkbox/CartCheckbox";
import RemoveIcon from '@mui/icons-material/Remove';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import CartItemCheckbox from "../components/ui/Checkbox/CartItemCheckbox";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useState } from "react";


const MainLayout = () => {

  const dispatch = useAppDispatch();

  const isOpenWishlist = useAppSelector((state) => state.wishlistDrawer.isOpen);

  const isOpenCart = useAppSelector((state) => state.cartDrawer.isOpen);

  const isXS = useMediaQuery('(max-width: 576px)');

  const [openStoreDialog, setOpenStoreDialog] = useState(false);
  const [openTimeDialog, setOpenTimeDialog] = useState(false);
  const [openShowroomDialog, setOpenShowroomDialog] = useState(false);

  return (
    <div>
      <HeaderClient />
      <Outlet />
      <FooterClient />
      <Drawer
        anchor="right"
        open={isOpenWishlist}
        onClose={() => dispatch(closeWishlistDrawer())}
        sx={{
          '& .MuiDrawer-paper': {
            width: isXS ? '100%' : '380px',
          }
        }}
      >
        <div className="flex items-center justify-between px-[20px] pt-[20px] py-[15px]">
          <div className="text-[18px]">Ưa thích</div>
          <div className="flex items-center">
            <div className="font-bold text-[15px] px-[10px] py-[8px] rounded-[2px] h-[40px] transition-all duration-300 hover:bg-[#fbfafa] cursor-pointer">Xóa tất cả</div>
            <IconButton disableRipple onClick={() => dispatch(closeWishlistDrawer())} sx={{ transition: '300ms ease', color: 'black', '&:hover': { color: '#BF585B' } }}>
              <CloseIcon sx={{ fontSize: '24px' }} />
            </IconButton>
          </div>
        </div>
        <Divider />
        <div className="px-[20px] pb-[40px] pt-[20px] overflow-auto custom-scrollbar">
          <div className="flex items-center my-[20px]">
            <img src="https://image.hsv-tech.io/150x0/bbx/common/ced92d99-5d0c-4ea3-a02a-4a82c9e38385.webp" alt="" className="w-[42px] h-[42px] min-w-[42px] object-cover" />
            <div className="ml-[20px]">
              <div className="font-semibold text-[14px] leading-[1.5715]">Kem Nền Cho Da Dầu Freshian Che Khuyết Điểm Thuần Chay Egg-Like Foundation Vegan SPF35 PA++ 30ml</div>
              <div className="flex items-center justify-between mt-[10px]">
                <div className="font-normal text-[14px] leading-[1.5715]">829.000đ</div>
                <div className="font-normal text-[14px] leading-[1.5715] px-[15px] py-[8px] transition-all duration-300 hover:bg-[#fbfafa] cursor-pointer">Xóa</div>
              </div>
            </div>
          </div>
          <div className="flex items-center my-[20px]">
            <img src="https://image.hsv-tech.io/150x0/bbx/common/ced92d99-5d0c-4ea3-a02a-4a82c9e38385.webp" alt="" className="w-[42px] h-[42px] min-w-[42px] object-cover" />
            <div className="ml-[20px]">
              <div className="font-semibold text-[14px] leading-[1.5715]">Kem Nền Cho Da Dầu Freshian Che Khuyết Điểm Thuần Chay Egg-Like Foundation Vegan SPF35 PA++ 30ml</div>
              <div className="flex items-center justify-between mt-[10px]">
                <div className="font-normal text-[14px] leading-[1.5715]">829.000đ</div>
                <div className="font-normal text-[14px] leading-[1.5715] px-[15px] py-[8px] transition-all duration-300 hover:bg-[#fbfafa] cursor-pointer">Xóa</div>
              </div>
            </div>
          </div>
          <div className="flex items-center my-[20px]">
            <img src="https://image.hsv-tech.io/150x0/bbx/common/ced92d99-5d0c-4ea3-a02a-4a82c9e38385.webp" alt="" className="w-[42px] h-[42px] min-w-[42px] object-cover" />
            <div className="ml-[20px]">
              <div className="font-semibold text-[14px] leading-[1.5715]">Kem Nền Cho Da Dầu Freshian Che Khuyết Điểm Thuần Chay Egg-Like Foundation Vegan SPF35 PA++ 30ml</div>
              <div className="flex items-center justify-between mt-[10px]">
                <div className="font-normal text-[14px] leading-[1.5715]">829.000đ</div>
                <div className="font-normal text-[14px] leading-[1.5715] px-[15px] py-[8px] transition-all duration-300 hover:bg-[#fbfafa] cursor-pointer">Xóa</div>
              </div>
            </div>
          </div>
          <div className="flex items-center my-[20px]">
            <img src="https://image.hsv-tech.io/150x0/bbx/common/ced92d99-5d0c-4ea3-a02a-4a82c9e38385.webp" alt="" className="w-[42px] h-[42px] min-w-[42px] object-cover" />
            <div className="ml-[20px]">
              <div className="font-semibold text-[14px] leading-[1.5715]">Kem Nền Cho Da Dầu Freshian Che Khuyết Điểm Thuần Chay Egg-Like Foundation Vegan SPF35 PA++ 30ml</div>
              <div className="flex items-center justify-between mt-[10px]">
                <div className="font-normal text-[14px] leading-[1.5715]">829.000đ</div>
                <div className="font-normal text-[14px] leading-[1.5715] px-[15px] py-[8px] transition-all duration-300 hover:bg-[#fbfafa] cursor-pointer">Xóa</div>
              </div>
            </div>
          </div>
          <div className="flex items-center my-[20px]">
            <img src="https://image.hsv-tech.io/150x0/bbx/common/ced92d99-5d0c-4ea3-a02a-4a82c9e38385.webp" alt="" className="w-[42px] h-[42px] min-w-[42px] object-cover" />
            <div className="ml-[20px]">
              <div className="font-semibold text-[14px] leading-[1.5715]">Kem Nền Cho Da Dầu Freshian Che Khuyết Điểm Thuần Chay Egg-Like Foundation Vegan SPF35 PA++ 30ml</div>
              <div className="flex items-center justify-between mt-[10px]">
                <div className="font-normal text-[14px] leading-[1.5715]">829.000đ</div>
                <div className="font-normal text-[14px] leading-[1.5715] px-[15px] py-[8px] transition-all duration-300 hover:bg-[#fbfafa] cursor-pointer">Xóa</div>
              </div>
            </div>
          </div>
          <div className="flex items-center my-[20px]">
            <img src="https://image.hsv-tech.io/150x0/bbx/common/ced92d99-5d0c-4ea3-a02a-4a82c9e38385.webp" alt="" className="w-[42px] h-[42px] min-w-[42px] object-cover" />
            <div className="ml-[20px]">
              <div className="font-semibold text-[14px] leading-[1.5715]">Kem Nền Cho Da Dầu Freshian Che Khuyết Điểm Thuần Chay Egg-Like Foundation Vegan SPF35 PA++ 30ml</div>
              <div className="flex items-center justify-between mt-[10px]">
                <div className="font-normal text-[14px] leading-[1.5715]">829.000đ</div>
                <div className="font-normal text-[14px] leading-[1.5715] px-[15px] py-[8px] transition-all duration-300 hover:bg-[#fbfafa] cursor-pointer">Xóa</div>
              </div>
            </div>
          </div>
          <div className="flex items-center my-[20px]">
            <img src="https://image.hsv-tech.io/150x0/bbx/common/ced92d99-5d0c-4ea3-a02a-4a82c9e38385.webp" alt="" className="w-[42px] h-[42px] min-w-[42px] object-cover" />
            <div className="ml-[20px]">
              <div className="font-semibold text-[14px] leading-[1.5715]">Kem Nền Cho Da Dầu Freshian Che Khuyết Điểm Thuần Chay Egg-Like Foundation Vegan SPF35 PA++ 30ml</div>
              <div className="flex items-center justify-between mt-[10px]">
                <div className="font-normal text-[14px] leading-[1.5715]">829.000đ</div>
                <div className="font-normal text-[14px] leading-[1.5715] px-[15px] py-[8px] transition-all duration-300 hover:bg-[#fbfafa] cursor-pointer">Xóa</div>
              </div>
            </div>
          </div>
          <div className="flex items-center my-[20px]">
            <img src="https://image.hsv-tech.io/150x0/bbx/common/ced92d99-5d0c-4ea3-a02a-4a82c9e38385.webp" alt="" className="w-[42px] h-[42px] min-w-[42px] object-cover" />
            <div className="ml-[20px]">
              <div className="font-semibold text-[14px] leading-[1.5715]">Kem Nền Cho Da Dầu Freshian Che Khuyết Điểm Thuần Chay Egg-Like Foundation Vegan SPF35 PA++ 30ml</div>
              <div className="flex items-center justify-between mt-[10px]">
                <div className="font-normal text-[14px] leading-[1.5715]">829.000đ</div>
                <div className="font-normal text-[14px] leading-[1.5715] px-[15px] py-[8px] transition-all duration-300 hover:bg-[#fbfafa] cursor-pointer">Xóa</div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
      <Drawer
        anchor="right"
        open={isOpenCart}
        onClose={() => dispatch(closeCartDrawer())}
        sx={{
          '& .MuiDrawer-paper': {
            width: isXS ? '100%' : '490px',
          }
        }}
      >
        <div className="flex items-center justify-between pl-[20px] pr-[12px] py-[10px]">
          <div className="text-[22px] font-bold">Giỏ hàng của tôi</div>
          <IconButton disableRipple onClick={() => dispatch(closeCartDrawer())} sx={{ transition: '300ms ease', color: 'black', '&:hover': { color: '#BF585B' } }}>
            <CloseIcon sx={{ fontSize: '22px' }} />
          </IconButton>
        </div>
        <Divider />
        <div className="overflow-auto custom-scrollbar">
          <div className="pt-[15px] pb-[20px] px-[15px]">
            <div className="flex items-center justify-center gap-[10px] mb-[25px]">
              <div className="flex-1 py-[10px] text-[14px] rounded-[75px] bg-black text-white text-center">
                Giao hàng (5)
              </div>
              <div className="flex-1 py-[10px] text-[14px] rounded-[75px] bg-[#efefef] text-center">
                Lấy tại cửa hàng (5)
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-[20px]">
                <div className="flex items-center gap-[10px]">
                  <CartCheckbox />
                  <Typography fontSize="16px">Chọn tất cả</Typography>
                </div>
                <div onClick={() => setOpenStoreDialog(true)} className="flex items-center pl-[15px] pr-[10px] py-[10px] rounded-[10px] bg-[#efefef] cursor-pointer">
                  <div className="font-bold text-[12px]">BEAUTY BOX VÕ VĂN NGÂN</div>
                  <KeyboardArrowDownIcon />
                </div>
                <Dialog
                  open={openStoreDialog}
                  onClose={() => setOpenStoreDialog(false)}
                  fullScreen={isXS}
                  sx={{
                    maxHeight: '700px',
                    height: '700px',
                    borderRadius: '20px'
                  }}
                  maxWidth='sm'
                  fullWidth
                  slotProps={{
                    paper: {
                      sx: {
                        borderRadius: '10px',
                      }
                    }
                  }}
                >
                  <DialogTitle sx={{ paddingX: '32px', paddingTop: '28px' }}>
                    <div className="flex items-center justify-between">
                      <div className="text-[22px] font-semibold">Danh sách cửa hàng</div>
                      <IconButton disableRipple onClick={() => setOpenStoreDialog(false)} sx={{ transition: '300ms ease', '&:hover': { color: 'black' }, padding: 0 }}>
                        <CloseIcon sx={{ fontSize: '30px', }} />
                      </IconButton>
                    </div>
                  </DialogTitle>
                  <DialogContent sx={{ paddingX: '32px', paddingY: '28px' }}>
                    <div className="flex flex-col gap-[20px]">
                      <div className="grid grid-cols-2">
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
                                    border: '1px solid #d9d9d9',
                                    transition: 'all 200ms ease-in-out',
                                  },
                                  '&.Mui-focused fieldset': {
                                    border: '1px solid black !important',
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
                                  '&.Mui-focused fieldset': {
                                    border: '1px solid black !important',
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
                      <div className="flex flex-col gap-[10px]">
                        <div className="p-[20px] text-[14px] leading-[1.5715] border-1 border-[#EFEFEF] rounded-[3px] cursor-pointer">
                          <div className="flex items-center justify-between mb-1">
                            <div>Hồ Chí Minh</div>
                            <div className="rounded-[5px] bg-[#f6ffed] text-[#389e0d] px-[12px] py-[3px] text-[12px]">Còn hàng</div>
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
                  </DialogContent>
                </Dialog>
              </div>
              <Divider sx={{ marginY: '10px' }} />
              <div className="mt-[20px] flex">
                <CartItemCheckbox />
                <div className="ml-[10px] flex flex-1">
                  <img src="https://image.hsv-tech.io/150x0/bbx/common/9bba6ba7-e32e-4e7e-95d6-bd5f17555937.webp" alt="" className="w-[80px] h-[85px] min-w-[80px] rounded-[5px] border-1" />
                  <div className="flex-1 ml-[10px] flex flex-col justify-between">
                    <div className="flex justify-between">
                      <Link to='/' className="text-[12px] mr-[10px] flex-1 min-w-0">
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
                        <div className="opacity-50 text-[12px] mr-[10px] line-through font-bold">399.000đ</div>
                        <div className="font-bold text-[14px]">259.000đ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[20px] flex">
                <CartItemCheckbox />
                <div className="ml-[10px] flex flex-1">
                  <img src="https://image.hsv-tech.io/150x0/bbx/common/9bba6ba7-e32e-4e7e-95d6-bd5f17555937.webp" alt="" className="w-[80px] h-[85px] min-w-[80px] rounded-[5px] border-1" />
                  <div className="flex-1 ml-[10px] flex flex-col justify-between">
                    <div className="flex justify-between">
                      <Link to='/' className="text-[12px] mr-[10px] flex-1 min-w-0">
                        Kem Lót Klavuu Nâng Tông Da White Pearlsation Ideal Actress Backstage Cream 10ml
                      </Link>
                      <div className="max-w-[22px] h-[22px] bg-[#dfdfdf] flex items-center justify-center rounded-[11px] p-[3px] cursor-pointer">
                        <RemoveIcon sx={{ fontSize: '16px' }} />
                      </div>
                    </div>
                    <div className="text-[12px] my-[3px]">
                      SKU: 11112241
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="rounded-[38px] border-1 border-[#dfdfdf] flex items-center">
                        <div className="px-[7px] flex items-center cursor-pointer">
                          <RemoveOutlinedIcon sx={{ fontSize: '12px', color: 'black' }} />
                        </div>
                        <div className="text-[12px] leading-[26px] px-[5px]">1</div>
                        <div className="px-[7px] flex items-center cursor-pointer">
                          <AddOutlinedIcon sx={{ fontSize: '12px', color: 'black' }} />
                        </div>
                      </div>
                      <div className="flex items-center ">
                        <div className="opacity-50 text-[12px] mr-[10px] line-through font-bold">399.000đ</div>
                        <div className="font-bold text-[14px]">259.000đ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[20px] flex">
                <CartItemCheckbox />
                <div className="ml-[10px] flex flex-1">
                  <img src="https://image.hsv-tech.io/150x0/bbx/common/9bba6ba7-e32e-4e7e-95d6-bd5f17555937.webp" alt="" className="w-[80px] h-[85px] min-w-[80px] rounded-[5px] border-1" />
                  <div className="flex-1 ml-[10px] flex flex-col justify-between">
                    <div className="flex justify-between">
                      <Link to='/' className="text-[12px] mr-[10px] flex-1 min-w-0">
                        Kem Lót Klavuu Nâng Tông Da White Pearlsation Ideal Actress Backstage Cream 10ml
                      </Link>
                      <div className="max-w-[22px] h-[22px] bg-[#dfdfdf] flex items-center justify-center rounded-[11px] p-[3px] cursor-pointer">
                        <RemoveIcon sx={{ fontSize: '16px' }} />
                      </div>
                    </div>
                    <div className="text-[12px] my-[3px]">
                      SKU: 11112241
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="rounded-[38px] border-1 border-[#dfdfdf] flex items-center">
                        <div className="px-[7px] flex items-center cursor-pointer">
                          <RemoveOutlinedIcon sx={{ fontSize: '12px', color: 'black' }} />
                        </div>
                        <div className="text-[12px] leading-[26px] px-[5px]">1</div>
                        <div className="px-[7px] flex items-center cursor-pointer">
                          <AddOutlinedIcon sx={{ fontSize: '12px', color: 'black' }} />
                        </div>
                      </div>
                      <div className="flex items-center ">
                        <div className="opacity-50 text-[12px] mr-[10px] line-through font-bold">399.000đ</div>
                        <div className="font-bold text-[14px]">259.000đ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[20px] flex">
                <CartItemCheckbox />
                <div className="ml-[10px] flex flex-1">
                  <img src="https://image.hsv-tech.io/150x0/bbx/common/9bba6ba7-e32e-4e7e-95d6-bd5f17555937.webp" alt="" className="w-[80px] h-[85px] min-w-[80px] rounded-[5px] border-1" />
                  <div className="flex-1 ml-[10px] flex flex-col justify-between">
                    <div className="flex justify-between">
                      <Link to='/' className="text-[12px] mr-[10px] flex-1 min-w-0">
                        Kem Lót Klavuu Nâng Tông Da White Pearlsation Ideal Actress Backstage Cream 10ml
                      </Link>
                      <div className="max-w-[22px] h-[22px] bg-[#dfdfdf] flex items-center justify-center rounded-[11px] p-[3px] cursor-pointer">
                        <RemoveIcon sx={{ fontSize: '16px' }} />
                      </div>
                    </div>
                    <div className="text-[12px] my-[3px]">
                      SKU: 11112241
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="rounded-[38px] border-1 border-[#dfdfdf] flex items-center">
                        <div className="px-[7px] flex items-center cursor-pointer">
                          <RemoveOutlinedIcon sx={{ fontSize: '12px', color: 'black' }} />
                        </div>
                        <div className="text-[12px] leading-[26px] px-[5px]">1</div>
                        <div className="px-[7px] flex items-center cursor-pointer">
                          <AddOutlinedIcon sx={{ fontSize: '12px', color: 'black' }} />
                        </div>
                      </div>
                      <div className="flex items-center ">
                        <div className="opacity-50 text-[12px] mr-[10px] line-through font-bold">399.000đ</div>
                        <div className="font-bold text-[14px]">259.000đ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <div className="pt-[15px] pb-[20px] px-[23px]">
            <div className="flex items-center justify-between mb-[5px] font-bold text-[14px]">
              <div>Giao hàng</div>
              <div>1.442.700đ</div>
            </div>
            <div className="flex items-center justify-between mb-[16px] opacity-50 text-[14px]">
              <div>Click & Collect</div>
              <div>458.000đ</div>
            </div>
            <div className="text-white h-[40px] px-[20px] py-[6px] rounded-[40px] flex items-center justify-center cursor-pointer" style={{ backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" }}>
              Tiếp tục với hình thức giao hàng
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default MainLayout 