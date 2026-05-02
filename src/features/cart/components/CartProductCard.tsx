import RemoveIcon from '@mui/icons-material/Remove';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Link } from 'react-router-dom';

const CartProductCard = () => {
    return (
        <div className="ml-[10px] flex flex-1">
            <img src="https://image.hsv-tech.io/150x0/bbx/common/9bba6ba7-e32e-4e7e-95d6-bd5f17555937.webp" alt="" className="w-[80px] h-[85px] min-w-[80px] rounded-[5px] border-1" />
            <div className="flex-1 ml-[10px] flex flex-col justify-between">
                <div className="flex justify-between">
                    <Link to='/' className="text-[12px] mr-[10px] flex-1 min-w-0">
                        Kem Lót Klavuu Nâng Tông Da White Pearlsation Ideal Actress Backstage Cream 10ml
                    </Link>
                    <div className="max-w-[22px] h-[22px] bg-[#dfdfdf] flex items-center justify-center rounded-[11px] p-[3px] cursor-pointer">
                        <RemoveIcon sx={{ fontSize: '16px' }} />
                    </div>
                </div>
                <div className="text-[12px] my-[3px]">
                    SKU: 11112241
                </div>
                <div className="flex items-center justify-between">
                    <div className="rounded-[38px] border-1 border-[#dfdfdf] flex items-center">
                        <div className="px-[7px] flex items-center cursor-pointer">
                            <RemoveOutlinedIcon sx={{ fontSize: '12px', color: 'black' }} />
                        </div>
                        <div className="text-[12px] leading-[26px] px-[5px]">1</div>
                        <div className="px-[7px] flex items-center cursor-pointer">
                            <AddOutlinedIcon sx={{ fontSize: '12px', color: 'black' }} />
                        </div>
                    </div>
                    <div className="flex items-center ">
                        <div className="opacity-50 text-[12px] mr-[10px] line-through font-bold">399.000đ</div>
                        <div className="font-bold text-[14px]">259.000đ</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProductCard;