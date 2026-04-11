import { useState } from 'react';
import ProductDetailRadio from './ProductDetailRadio'
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

const paymentMethods = [
    {
        value: 'cod',
        label: 'Trả tiền mặt khi nhận hàng (COD)',
        img: '',
    },
    {
        value: 'banking',
        label: 'Zalopay & Chuyển khoản ngân hàng',
        img: 'https://image.hsv-tech.io/400x0/bbx/common/651d64f1-e5df-4a5f-8aaa-aeeec67bb5a5.webp',
    },
    {
        value: 'atm',
        label: 'Thẻ ATM/ Visa/ Master/ JCB/ QR Pay/ Ví điện tử khác qua Payoo',
        img: 'https://beautybox.com.vn/images/payments/payoo.png',
    },
    {
        value: 'momo',
        label: 'Ví MoMo',
        img: 'https://beautybox.com.vn/images/payments/momo.png',
    },
    {
        value: 'fundin',
        label: 'Fundiin - Mua trước trả sau 0% lãi suất',
        img: 'https://assets.fundiin.vn/merchant/logo_long_image_reverse.svg',
    },
    {
        value: 'momo-later',
        label: 'Ví Trả Sau - MoMo',
        img: 'https://image.hsv-tech.io/400x0/bbx/common/963b6699-58fc-449d-a506-5298800d0c2b.webp',
    },
];

const SelectMethodPaymentRadio = () => {

    const [selected, setSelected] = useState('cod')

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
                        {method.img && <img
                            src={method.img}
                            alt=""
                            className='min-w-[45px] object-contain h-[16px]'
                        />}
                    </div>
                ))}
            </RadioGroup>
        </FormControl>
    )
}

export default SelectMethodPaymentRadio