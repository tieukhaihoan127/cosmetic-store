import React, { useState } from 'react'
import ProductDetailRadio from '../../ui/Radio/ProductDetailRadio'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import RadioGroup from '@mui/material/RadioGroup'
import Divider from '@mui/material/Divider'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StorefrontIcon from '@mui/icons-material/Storefront';

const SelectMethodBanner = () => {
    const [value, setValue] = useState('pick-up');
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
        
    return (
        <div className="mt-[20px] rounded-[10px] px-[18px] py-[15px] border-2 border-transparent" style={{
            background: "linear-gradient(white, white) padding-box, linear-gradient(90deg, rgb(255, 212, 0) 0%, rgb(199, 49, 48) 50.52%, rgb(102, 54, 149) 99.61%) border-box",
        }}>
            <div className="mb-[5px] text-[18px] font-bold">Hình thức mua hàng</div>
            <FormControl>
                <RadioGroup
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel value="delivery" control={<ProductDetailRadio />} label={<span className="text-[15px] font-bold">Giao hàng</span>} />
                    <div className="flex items-center">
                        <FormControlLabel value="pick-up" control={<ProductDetailRadio />} label={<span className="text-[15px]"><span className="font-bold">Click & Collect</span> Mua và lấy hàng tại cửa hàng</span>} />
                        <div className="flex items-center">
                            <div className="text-[15px] font-bold">Chọn cửa hàng</div>
                            <KeyboardArrowDownIcon />
                        </div>
                    </div>
                </RadioGroup>
            </FormControl>
            <Divider sx={{ marginTop: '15px', marginBottom: '10px' }} />
            <div className="flex items-center justify-between cursor-pointer hover:text-[#b0100f] transition-all-ease duration-400">
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
    )
}

export default SelectMethodBanner