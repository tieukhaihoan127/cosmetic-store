import { Outlet } from "react-router-dom"
import FooterClient from "../components/layout/Footer/FooterClient"
import HeaderClient from "../components/layout/Header/HeaderClient"
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Drawer from "@mui/material/Drawer";
import { closeWishlistDrawer } from "../store/slices/clickWishlistSlice";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";


const MainLayout = () => {

  const dispatch = useAppDispatch();

  const isOpen = useAppSelector((state) => state.wishlistDrawer.isOpen);

  const isXS = useMediaQuery('(max-width: 576px)');

  return (
    <div>
      <HeaderClient />
      <Outlet />
      <FooterClient />
      <Drawer
        anchor="right"
        open={isOpen}
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
            <IconButton disableRipple onClick={() => dispatch(closeWishlistDrawer())} sx={{ transition: '300ms ease', color: 'black' , '&:hover': { color: '#BF585B' } }}>
              <CloseIcon sx={{ fontSize: '24px'}} />
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
    </div>
  )
}

export default MainLayout 