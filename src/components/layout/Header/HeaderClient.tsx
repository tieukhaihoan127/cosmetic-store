import logo1 from "../../../assets/images/logo1.webp";
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";
import HeaderTextCarousel from "../../ui/Carousel/HeaderTextCarousel";
import HeaderSidebar from "../../ui/Sidebar/HeaderSidebar";
import SearchProduct from "../../ui/SearchBar/SearchProduct";
import HeaderActionItem from "../../ui/Menu/HeaderActionItem";
import HeaderMenu from "../../ui/Menu/HeaderMenu";
import HeaderCategoryCarousel from "../../ui/Carousel/HeaderCategoryCarousel";
import HeaderMenuHover from "../../ui/Menu/HeaderMenuHover";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { clearHoveredCategory, setHoveredCategory } from "../../../store/slices/hoveredMenuSlice";

export default function HeaderClient() {

    const theme = useTheme();

    const dispatch = useAppDispatch();

    const hoveredCategory = useAppSelector((state) => state.hoveredMenu.hoveredCategory);

    const handleHoverCategory = (category : string) => {
        dispatch(setHoveredCategory(category));
    }

    const handleLeaveCategory = () => {
        dispatch(clearHoveredCategory());
    }

    return(
        <header className="sticky top-0 z-50">
            <div className="bg-[var(--pink-pearl)] py-[4px] px-0 flex [@media(max-width:844px)]:hidden">
                <div className="m-auto flex text-black-500 items-center text-white text-[12px] space-x-4 gap-[20px]">
                    <div>Freeship 15k mọi đơn hàng</div>
                    <div>.</div>
                    <div>Quà Tặng Cho Đơn Từ 499K</div>
                    <div>.</div>
                    <div>Giao Hàng Nhanh 24H</div>
                    <div>.</div>
                    <div>Mua online nhận tại cửa hàng gần nhất</div>
                </div>
            </div>
            <div className="bg-[var(--pink-pearl)] py-[4px] px-0 [@media(min-width:844px)]:hidden">
                <HeaderTextCarousel/>
            </div>
            <div className="flex h-[80px] max-md:h-[65px] bg-white">
                <div className="w-[90%] max-w-[90%] mx-auto flex item-center justify-between">
                    <div className="min-md:hidden flex items-center">
                        <HeaderSidebar/>
                    </div>
                    <Link to={"/"} className="flex items-center max-md:pl-5">
                        <img src={logo1} alt="Logo Image" className="object-contain w-[180px] h-[40px] [@media(max-width:576px)]:w-[150px]"/>
                    </Link>
                    <div className="flex flex-1 items-center justify-end max-md:flex-none">
                        <SearchProduct/>
                        <div className="flex items-center xl:pl-[40px] lg:pl-[20px] md:pl-[20px] gap-6 [@media(max-width:1144px)]:gap-2.5 ">
                            <HeaderActionItem icon={<StoreOutlinedIcon sx={{ fontSize: {sm:25, md: 28, lg:30} }}/>} label="Hệ thống cửa hàng" to="/store"/>
                            <HeaderActionItem icon={<EventNoteOutlinedIcon sx={{ fontSize: {sm:25, md: 28, lg:30} }}/>} label="Tạp chí làm đẹp" to="/blog"/>                        
                        </div>
                        <HeaderMenu/>
                        <Divider
                            orientation="vertical"
                            variant="middle"
                            flexItem
                            sx={{
                                mx: "10px",
                                height: "27px",
                                alignSelf: "center",
                                display: "block",
                                [theme.breakpoints.down(768)]: {
                                    display: "none",
                                },
                            }}
                        />
                        <div className="flex items-center gap-3 max-md:gap-4 max-sm:gap-3">
                            <HeaderActionItem icon={<AccountCircleOutlinedIcon sx={{ fontSize: {sm:25, md: 28, lg:30} }}/>} label="Đăng nhập" to="/login"/>
                            <FavoriteBorderOutlinedIcon sx={{ fontSize: {sm:25, md: 28, lg:30}, textAlign: 'right' }}/>
                            <ShoppingCartOutlinedIcon sx={{ fontSize: {sm:25, md: 28, lg:30} }}/>
                        </div>  
                    </div>
                </div>
            </div>
            <div className="bg-white pb-[10px] md:hidden">
                <div className="max-w-[90%] mx-auto">
                    <SearchProduct isMobile={true}/>
                </div>
            </div>
            <div className="mx-auto md:block sm:hidden max-sm:hidden bg-white pb-[10px]">
                <HeaderCategoryCarousel onHoverCategory={handleHoverCategory} onLeaveCategory={handleLeaveCategory}/>
            </div>
            {hoveredCategory === "Thương hiệu" && <HeaderMenuHover />}
        </header>
    ); 
}