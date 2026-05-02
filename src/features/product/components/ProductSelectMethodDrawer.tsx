import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import IconButton from '@mui/material/IconButton';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import CloseIcon from '@mui/icons-material/Close';
import StoreDialog from '../../location/components/StoreDialog';
import ProductSelectMethod from './ProductSelectMethod';
import useInformation from '../hooks/useInformation';
import { ShowroomDialog, TimeDialog } from '../../location';

const ProductSelectMethodDrawer = () => {

    const { method, addItemButton, value, handleCloseMethod } = useInformation();
    
    return (
        <Drawer
            anchor="bottom"
            open={addItemButton}
            onClose={handleCloseMethod}
            sx={{
                "& .MuiDrawer-paper": {
                    maxHeight: "90vh",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                }
            }}
        >
            <div className="flex items-center justify-between px-[24px] py-[8px]">
                <div></div>
                <div className="font-bold text-[18px]">Chọn phương thức mua hàng</div>
                <IconButton disableRipple onClick={handleCloseMethod} sx={{ transition: '300ms ease', '&:hover': { color: 'black' } }}>
                    <CloseIcon sx={{ fontSize: '30px', }} />
                </IconButton>
            </div>
            <Divider />
            <Box
                sx={{
                    width: 'auto',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '15px'
                }}
            >
                <ProductSelectMethod hideOnMobile={false} />
                <StoreDialog />
                <ShowroomDialog />
                <TimeDialog />
                <div className="flex items-center justify-between rounded-[38px] border-2 gap-6 px-[10px] py-[12px] my-[10px] border-[#efefef]">
                    <RemoveOutlinedIcon />
                    <div className="text-[16px] font-bold">1</div>
                    <AddOutlinedIcon />
                </div>
                {method === 'add-item' &&
                    <div className={`flex flex-1 items-center justify-center rounded-[38px] py-[12px] px-[23px] transition-all-ease duration-300 ${value !== "pick-up" ? 'bg-black hover:bg-[#333333] cursor-pointer' : 'bg-[#F7F7F7] border-2 border-[#D9D9D9] cursor-not-allowed'} `}>
                        <ShoppingBasketOutlinedIcon sx={{ color: 'white' }} />
                        <div className={`ml-[8px] text-[12px] ${value !== "pick-up" ? 'text-white' : 'text-[#D9D9D9] hover:text-white transition-all-ease duration-300'}`}>Thêm vào giỏ hàng</div>
                    </div>
                }
                {method === 'buy-item' &&
                    <div className={`rounded-[38px] flex-1 text-[12px] text-center py-[15px] px-[23px] ${value === 'pick-up' ? 'bg-[#F7F7F7] text-[#D9D9D9] hover:text-white transition-all-ease duration-300 cursor-not-allowed' : 'text-white cursor-pointer'}`} style={value !== 'pick-up' ? { backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" } : undefined}>
                        Mua Ngay
                    </div>
                }
            </Box>
        </Drawer>
    );
};

export default ProductSelectMethodDrawer;