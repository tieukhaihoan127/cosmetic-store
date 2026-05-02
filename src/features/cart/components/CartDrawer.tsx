import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Typography from '@mui/material/Typography';
import CartItemCheckbox from '../../../shared/components/ui/Checkbox/CartItemCheckbox';
import CartCheckbox from '../../../shared/components/ui/Checkbox/CartCheckbox';
import useCart from '../hooks/useCart';
import { ShowroomDialog, StoreDialog, TimeDialog } from '../../location';
import CartProductCard from './CartProductCard';
import useLocationDialog from '../../../shared/hooks/useLocationDialog';
import CartPrice from './CartPrice';

const CartDrawer = () => {

    const { isOpenCart, isXS, handleClose } = useCart();

    const { handleOpenStoreDialog } = useLocationDialog();

    return (
        <Drawer
            anchor="right"
            open={isOpenCart}
            onClose={handleClose}
            sx={{
                '& .MuiDrawer-paper': {
                    width: isXS ? '100%' : '490px',
                }
            }}
        >
            <div className="flex items-center justify-between pl-[20px] pr-[12px] py-[10px]">
                <div className="text-[22px] font-bold">Giỏ hàng của tôi</div>
                <IconButton disableRipple onClick={handleClose} sx={{ transition: '300ms ease', color: 'black', '&:hover': { color: '#BF585B' } }}>
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
                            <div onClick={handleOpenStoreDialog} className="flex items-center pl-[15px] pr-[10px] py-[10px] rounded-[10px] bg-[#efefef] cursor-pointer">
                                <div className="font-bold text-[12px]">BEAUTY BOX VÕ VĂN NGÂN</div>
                                <KeyboardArrowDownIcon />
                            </div>
                            <StoreDialog />
                            <ShowroomDialog />
                            <TimeDialog />
                        </div>
                        <Divider sx={{ marginY: '10px' }} />
                        <div className="mt-[20px] flex">
                            <CartItemCheckbox />
                            <CartProductCard />
                        </div>
                        <div className="mt-[20px] flex">
                            <CartItemCheckbox />
                            <CartProductCard />
                        </div>
                        <div className="mt-[20px] flex">
                            <CartItemCheckbox />
                            <CartProductCard />
                        </div>
                    </div>
                </div>
                <Divider />
                <CartPrice />
            </div>
        </Drawer>
    );
};

export default CartDrawer;