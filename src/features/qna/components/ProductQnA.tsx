import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { useState } from 'react';
import FeedbackUser from './FeedbackUser';

const questions = [
    "Thời gian nhận hàng sau khi đặt hàng trong vòng bao lâu?",
    "Kiểm tra thông tin đơn hàng đã đặt tại đâu?",
    "Làm sao có thể đặt hàng tại website?",
    "Có được đồng kiểm sản phẩm trước khi nhận không?",
    "Làm sao để có thể hủy đơn hàng đã đặt?",
    "Sản phẩm có phải là hàng chính hãng không?",
    "Phương thức mua hàng trả góp như thế nào?",
    "Muốn hỗ trợ đổi trả sản phẩm có được không?",
    "Thời gian nhận hàng sau khi đặt hàng trong vòng bao lâu?",
    "Kiểm tra thông tin đơn hàng đã đặt tại đâu?",
    "Làm sao có thể đặt hàng tại website?",
    "Có được đồng kiểm sản phẩm trước khi nhận không?",
    "Làm sao để có thể hủy đơn hàng đã đặt?",
    "Sản phẩm có phải là hàng chính hãng không?",
    "Phương thức mua hàng trả góp như thế nào?",
    "Muốn hỗ trợ đổi trả sản phẩm có được không?",
];

const ProductQnA = () => {

    const [question, setQuestion] = useState('');

    return (
        <div className="grid grid-cols-12 my-[50px]">
            <div className="col-span-4 text-[24px] font-bold leading-[35px] [@media(max-width:1199px)]:col-span-12 [@media(max-width:1199px)]:mb-[30px]">
                Hỏi đáp
            </div>
            <div className="col-span-8 [@media(max-width:1199px)]:col-span-12">
                <Autocomplete
                    options={questions}
                    inputValue=""
                    onInputChange={() => { }}
                    onChange={(_, newValue) => setQuestion(newValue || '')}
                    slotProps={{
                        paper: {
                            sx: {
                                '& .MuiAutocomplete-option': {
                                    fontSize: '14px',
                                },
                            }
                        }
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            placeholder="Có câu hỏi? Tìm lời giải đáp nhanh chóng"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    padding: '11px',
                                    backgroundColor: '#f6f6f6',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    '& fieldset': {
                                        border: '1px solid #b7b6c2',
                                        transition: 'all 200ms ease-in-out',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#bf585b',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#bf585b',
                                        boxShadow: '0 0 0 2px rgb(234,199,200)',
                                    },
                                },
                                '& .MuiAutocomplete-input': {
                                    padding: '0px !important',
                                    cursor: 'pointer',
                                },
                                '& input::placeholder': {
                                    fontSize: '14px',
                                    color: '#858585',
                                    opacity: 1,
                                },
                            }}
                        />
                    )}
                />
                <div className="flex items-center my-[10px]">
                    <textarea name="" id="" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Viết câu hỏi của bạn tại đây" className="max-w-[100%] h-auto min-h-[45px] leading-[1.5715] cursor-pointer border-1 border-[#b7b6c2] hover:border-[#bf585b] focus:outline-none focus:shadow-[0_0_0_2px_rgb(234,199,200)] transition-all ease-in-out duration-300 mr-[10px] p-[11px] text-[14px] flex-1 rounded-[5px] bg-[#f6f6f6]"></textarea>
                    <div className="py-[5px] px-[20px] rounded-[5px] text-white bg-black text-[14px] h-[30px]">Gửi đi</div>
                </div>
                <FeedbackUser />
            </div>
        </div>
    )
}

export default ProductQnA