import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import ClearIcon from '@mui/icons-material/Clear';
import CheckoutProductCard from './CheckoutProductCard';
import usePreviewOrder from '../hooks/usePreviewOrder';

const PreviewOrderDrawer = () => {

    const { previewProducts, handleClosePreviewOrderDrawer, handleCheckout } = usePreviewOrder();

    return (
        <Drawer
            anchor={"bottom"}
            open={previewProducts}
            onClose={handleClosePreviewOrderDrawer}
            sx={{
                "& .MuiDrawer-paper": {
                    height: "550px",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                }
            }}
        >
            <Box
                sx={{ width: 'auto', height: '100%', display: 'flex', flexDirection: 'column' }}
                role="presentation"
            >
                <div className="flex items-center justify-between px-[24px] py-[16px]">
                    <div></div>
                    <div className="font-bold">Đơn hàng</div>
                    <div onClick={handleClosePreviewOrderDrawer} className="cursor-pointer">
                        <ClearIcon sx={{ fontSize: '20px' }} />
                    </div>
                </div>
                <Divider />
                <div className='pb-[20px]'>
                    <div className='px-[15px] max-h-[300px] overflow-y-auto custom-scrollbar'>
                        <CheckoutProductCard />
                        <CheckoutProductCard />
                        <CheckoutProductCard />
                        <CheckoutProductCard />
                    </div>
                    <Divider sx={{ marginY: '15px' }} />
                    <div className='px-[15px] flex items-center justify-between font-medium text-[14px]'>
                        <div>Tổng giá trị đơn hàng</div>
                        <div>1.471.000đ</div>
                    </div>
                    <Divider sx={{ marginY: '15px' }} />
                    <div className='px-[15px] font-medium text-[14px]'>
                        Mã giảm giá, voucher có thể thêm vào ở màn hình kế tiếp
                    </div>
                    <div className='px-[15px] mt-[20px]'>
                        <div onClick={handleCheckout} className="text-white h-[40px] px-[20px] py-[6px] rounded-[40px] flex items-center justify-center cursor-pointer font-bold" style={{ backgroundImage: "linear-gradient(90deg, #ffd400, #c73130 50.52%, #663695 99.61%)" }}>
                            TIẾP TỤC
                        </div>
                    </div>
                </div>
            </Box>
        </Drawer>
    );
};

export default PreviewOrderDrawer;