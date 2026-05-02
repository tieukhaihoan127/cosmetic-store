import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import useInformation from '../hooks/useInformation';

const ProductDetailAppBar = () => {

    const { isXS, isMD, isFlexing, value, handleOpenMethod } = useInformation();

    return (
        <AppBar
            position="fixed"
            sx={{
                top: 'auto',
                bottom: 0,
                background: 'white',
                display: isMD ? 'block' : 'none'
            }}
        >
            <Toolbar
                sx={{
                    gap: '10px',
                    paddingX: '10px',
                    paddingY: '15px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <div className="w-fit h-[50px] flex items-center justify-center rounded-[38px] px-[14px] border-2 border-black">
                    <FavoriteBorderOutlinedIcon sx={{ fontSize: '22px', color: 'black' }} />
                </div>
                <div onClick={() => handleOpenMethod('add-item')} className={`flex ${isFlexing ? 'flex-none' : 'flex-1'} items-center justify-center rounded-[38px] py-[12px] px-[23px] transition-all-ease duration-300 ${value !== "pick-up" ? 'bg-black hover:bg-[#333333] cursor-pointer' : 'bg-[#F7F7F7] border-2 border-[#D9D9D9] cursor-not-allowed'} `}>
                    {isXS === false && <ShoppingBasketOutlinedIcon sx={{ color: 'white' }} />}
                    <div className={`${isXS ? '' : 'ml-[8px]'} text-[12px] ${value !== "pick-up" ? 'text-white' : 'text-[#D9D9D9] hover:text-white transition-all-ease duration-300'}`}>Thêm vào giỏ hàng</div>
                </div>
                <div onClick={() => handleOpenMethod('buy-item')} className={`rounded-[38px] flex-1 text-[12px] text-center ${isXS ? 'py-[12px]' : 'py-[15px]'} px-[23px] ${value === 'pick-up' ? 'bg-[#F7F7F7] text-[#D9D9D9] hover:text-white transition-all-ease duration-300 cursor-not-allowed' : 'text-white cursor-pointer'}`} style={value !== 'pick-up' ? { backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" } : undefined}>
                    Mua Ngay
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default ProductDetailAppBar;