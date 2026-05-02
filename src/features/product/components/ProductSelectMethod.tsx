import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ProductDetailRadio from '../../../shared/components/ui/Radio/ProductDetailRadio';
import StorefrontIcon from '@mui/icons-material/Storefront';
import useInformation from '../hooks/useInformation';

interface ProductSelectMethodProps {
    hideOnMobile: boolean;
};

const ProductSelectMethod = ({ hideOnMobile = true } : ProductSelectMethodProps) => {

    const { value, handleChangeVaLue, handleOpenStoreDialog } = useInformation();
    
    return (
        <div className={`rounded-[10px] px-[18px] py-[15px] border-2 border-transparent ${hideOnMobile ? 'max-md:hidden' : ''}`} style={{
            background: "linear-gradient(white, white) padding-box, linear-gradient(90deg, rgb(255, 212, 0) 0%, rgb(199, 49, 48) 50.52%, rgb(102, 54, 149) 99.61%) border-box",
        }}>
            <div className="mb-[5px] text-[18px] font-bold">Hình thức mua hàng</div>
            <FormControl>
                <RadioGroup
                    value={value}
                    onChange={() => handleChangeVaLue}
                >
                    <FormControlLabel value="delivery" control={<ProductDetailRadio />} label={<span className="text-[15px] font-bold">Giao hàng</span>} />
                    <div className="flex items-center flex-wrap">
                        <FormControlLabel value="pick-up" control={<ProductDetailRadio />} label={<span className="text-[15px]"><span className="font-bold">Click & Collect</span> Mua và lấy hàng tại cửa hàng</span>} />
                        {/* <div className="flex items-center">
                                        <div onClick={() => setOpenStoreDialog(true)} className="text-[15px] font-bold cursor-pointer">Chọn cửa hàng</div>
                                        <KeyboardArrowDownIcon />
                                    </div> */}
                    </div>
                    <div onClick={handleOpenStoreDialog} className="text-[14px] flex items-center ml-[28px] cursor-pointer flex-wrap">
                        <div className="text-[#5aa000] text-[#da0000] font-semibold">Hết hàng</div>
                        <div className="mx-2">tại</div>
                        <div className="flex items-center">
                            <div className="font-bold">BEAUTY BOX VÕ VĂN NGÂN</div>
                            <KeyboardArrowDownIcon />
                        </div>
                        <div className="text-[#0992d0] ml-1 [@media(max-width:1199px)]:mt-1">Chọn cửa hàng khác</div>
                    </div>
                </RadioGroup>
            </FormControl>
            <Divider sx={{ marginTop: '15px', marginBottom: '10px' }} />
            <div className="flex items-center justify-between cursor-pointer hover:text-[#b0100f] transition-all-ease duration-400 flex-wrap">
                <div className="flex items-end">
                    <StorefrontIcon sx={{ marginRight: '12px', fontSize: '22px', color: '#b0100f' }} />
                    <div className="text-[14px]">
                        <span className="font-bold mr-[10px]">1/25</span> chi nhánh còn mặt hàng này
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="text-[14px] font-bold leading-[20px]">Xem tất cả các cửa hàng</div>
                    <KeyboardArrowRightIcon sx={{ fontSize: '22px' }} />
                </div>
            </div>
        </div>
    );
};

export default ProductSelectMethod;