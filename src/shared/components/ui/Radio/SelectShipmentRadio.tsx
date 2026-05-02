import { useState } from 'react';
import ProductDetailRadio from './ProductDetailRadio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

const paymentMethods = [
    {
        value: 'standard',
        label: 'Giao hàng tiêu chuẩn (3 - 6 ngày) (Giao giờ hành chính)',
    },
    {
        value: '24h',
        label: 'Giao hàng nhanh 24h',
    },
];

const SelectShipmentRadio = () => {

    const [selected, setSelected] = useState('cod');

    return (
        <FormControl sx={{ width: '100%' }}>
            <RadioGroup
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
                {paymentMethods.map((method) => (
                    <div
                        key={method.value}
                        onClick={() => setSelected(method.value)}
                        className={`border-1 rounded-[5px] pr-[15px] pl-[6px] py-[4px] flex items-center justify-between cursor-pointer transition-all duration-200 ${selected === method.value ? 'border-black' : 'border-[#dfdfdf]'
                            }`}
                    >
                        <FormControlLabel
                            value={method.value}
                            control={
                                <ProductDetailRadio />
                            }
                            label={
                                <span style={{ fontSize: '14px' }}>{method.label}</span>
                            }
                            sx={{ margin: 0, padding: 0 }}
                        />
                    </div>
                ))}
            </RadioGroup>
        </FormControl>
    );
};

export default SelectShipmentRadio;