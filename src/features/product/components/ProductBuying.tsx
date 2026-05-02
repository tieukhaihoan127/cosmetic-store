import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import useInformation from '../hooks/useInformation';

const ProductBuying = () => {

    const { value } = useInformation();
    
    return (
        <div className="flex items-center gap-[10px] mt-[30px] flex-wrap max-md:hidden">
            <div className="flex items-center rounded-[38px] border-2 gap-6 px-[10px] py-[12px] border-[#efefef]">
                <RemoveOutlinedIcon />
                <div className="text-[16px] font-bold">1</div>
                <AddOutlinedIcon />
            </div>
            <div className={`flex flex-1 min-w-[200px] items-center justify-center rounded-[38px] py-[12px] transition-all-ease duration-300 ${value !== "pick-up" ? 'bg-black hover:bg-[#333333] cursor-pointer' : 'bg-[#F7F7F7] border-2 border-[#D9D9D9] cursor-not-allowed'} `}>
                <ShoppingBasketOutlinedIcon sx={{ color: 'white' }} />
                <div className={`ml-[8px] ${value !== "pick-up" ? 'text-white' : 'text-[#D9D9D9] hover:text-white transition-all-ease duration-300'}`}>Thêm vào giỏ hàng</div>
            </div>
            <div className={`rounded-[38px] py-[12px] px-[23px] ${value === 'pick-up' ? 'bg-[#F7F7F7] text-[#D9D9D9] hover:text-white transition-all-ease duration-300 cursor-not-allowed' : 'text-white cursor-pointer'}`} style={value !== 'pick-up' ? { backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" } : undefined}>
                MUA NGAY
            </div>
            <div className="w-fit h-[50px] flex items-center justify-center rounded-[38px] px-[14px] border-2">
                <FavoriteBorderOutlinedIcon sx={{ fontSize: '22px' }} />
            </div>
        </div>
    );
};

export default ProductBuying;