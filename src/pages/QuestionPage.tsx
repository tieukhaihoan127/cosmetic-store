import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type QuestionProps = {
    id: number;
    question: string;
}

const informations = [
    {
        id: 'all',
        categories: 'Danh mục',
        questions: [
            {
                id: 1,
                question: 'Về Chúng Tôi'
            },
            {
                id: 2,
                question: 'Câu Chuyện Thương Hiệu'
            },
            {
                id: 3,
                question: 'Quyền Lợi Thành Viên'
            },
            {
                id: 4,
                question: 'Hướng Dẫn Mua Hàng Online'
            },
            {
                id: 5,
                question: 'Hướng Dẫn Mua Hàng Online Tại Cửa Hàng'
            },
            {
                id: 6,
                question: 'Hướng Dẫn Thanh Toán Mua Trả Sau'
            },
            {
                id: 7,
                question: 'Hình Thức Trả Góp 0% Lãi Suất'
            },
            {
                id: 8,
                question: 'Hướng Dẫn Mua Trước Trả Sau Qua Fundin'
            },
            {
                id: 9,
                question: 'Chính Sách Giao Nhận Và Thanh Toán'
            },
            {
                id: 10,
                question: 'Liên Hệ'
            },
            {
                id: 11,
                question: 'Điều Kiện Sử Dụng'
            }
        ]
    },
    {
        id: 'instruction',
        categories: 'Hướng Dẫn Sử Dụng Website',
        questions: [
            {
                id: 4,
                question: 'Hướng Dẫn Mua Hàng Online'
            },
            {
                id: 5,
                question: 'Hướng Dẫn Mua Hàng Online Tại Cửa Hàng'
            },
            {
                id: 6,
                question: 'Hướng Dẫn Thanh Toán Mua Trả Sau'
            },
            {
                id: 7,
                question: 'Hình Thức Trả Góp 0% Lãi Suất'
            },
            {
                id: 8,
                question: 'Hướng Dẫn Mua Trước Trả Sau Qua Fundin'
            },
            {
                id: 11,
                question: 'Điều Kiện Sử Dụng'
            }
        ]
    },
    {
        id: 'contact',
        categories: 'Liên Hệ',
        questions: [
            {
                id: 10,
                question: 'Liên Hệ'
            }
        ]
    },
    {
        id: 'story',
        categories: 'Về Beauty Box',
        questions: [
            {
                id: 1,
                question: 'Về Chúng Tôi'
            },
            {
                id: 2,
                question: 'Câu Chuyện Thương Hiệu'
            }
        ]
    },
    {
        id: 'membership',
        categories: 'Tài Khoản Thành Viên',
        questions: [
            {
                id: 3,
                question: 'Quyền Lợi Thành Viên'
            }
        ]
    },
    {
        id: 'policy',
        categories: 'Đơn Hàng & Thanh Toán',
        questions: [
            {
                id: 9,
                question: 'Chính Sách Giao Nhận Và Thanh Toán'
            }
        ]
    }
];

const QuestionPage = () => {

    const imageUrl = "https://beautybox.com.vn/images/helpCenter.webp";

    const [currentQuestions, setCurrentQuestions] = useState<QuestionProps[]>(informations[0].questions);
    const [category, setCategory] = useState<string>('all');
    const [cateogryName, setCategoryName] = useState<string>('');
    const [expanded, setExpanded] = useState(false);

    const handleClickExpanded = () => {
        setExpanded(prev => !prev);
    };

    useEffect(() => {

        const selectedQuestion = informations.find(info => info.id === category);

        if (selectedQuestion) {
            setCurrentQuestions(selectedQuestion.questions);
            setCategoryName(selectedQuestion.categories);
        }


    }, [category]);

    return (
        <div className='w-[90%] mx-auto'>
            <div className="mt-[15px] relative h-[300px] [@media(max-width:780px)]:h-[250px] bg-cover rounded-[10px] flex justify-center" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className='flex flex-col items-center justify-center w-[80%]'>
                    <div className="text-[30px] leading-[43px] text-white font-bold mb-[20px] text-center [@media(max-width:780px)]:text-[22px]">
                        Xin chào, chúng tôi có thể giúp gì cho bạn?
                    </div>
                    <div className="rounded-full min-w-[650px] [@media(max-width:919px)]:min-w-[570px] [@media(max-width:780px)]:!min-w-[95%]">
                        <TextField
                            fullWidth
                            variant="outlined"
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon sx={{ color: '#888', fontSize: '28px' }} />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Button
                                                onClick={() => console.log('submit')}
                                                sx={{
                                                    borderRadius: '999px',
                                                    backgroundColor: 'white',
                                                    textTransform: 'none',
                                                    color: 'black',
                                                    border: '0',
                                                    px: 0,
                                                    fontSize: '14px',
                                                    fontWeight: 700
                                                }}
                                            >
                                                Tìm kiếm
                                            </Button>
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            sx={{
                                width: '100%',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '999px',
                                    backgroundColor: '#fff',
                                    px: '25px',
                                    '& fieldset': { border: 'none' },
                                    '&:hover fieldset': { border: 'none' },
                                    '&.Mui-focused fieldset': { border: 'none' },
                                },
                                '& .MuiInputBase-input': {
                                    py: '10.5px',
                                    fontSize: '0.9rem',
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className='mt-[30px] grid grid-cols-12 gap-[25px]'>
                <div className='col-span-3 [@media(max-width:576px)]:col-span-12'>
                    <div className='font-bold text-[24px]'>
                        Danh mục
                    </div>
                    <div>
                        {informations.map((info, index) => (
                            <div key={`${info}_${index}`} onClick={() => setCategory(info.id)} className={`mt-[15px] cursor-pointer ${category === info.id ? 'font-bold' : 'font-normal'}`}>
                                {index > 0 && info.categories}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='col-span-9 [@media(max-width:576px)]:col-span-12'>
                    <div className='mb-[15px] font-bold text-[24px]'>
                        Câu hỏi thường gặp {cateogryName !== '' && `trong danh mục ${cateogryName}`}
                    </div>
                    <div className={`mt-[26px] relative ${expanded ? 'max-h-[2000px]' : 'max-h-[300px]'} overflow-hidden`}>
                        {currentQuestions.map(question => (
                            <div key={question.id}>
                                <Link to={`/help-center/question/${question.id}`}>
                                    <div className='cursor-pointer py-[12px]'>
                                        {question.question}
                                    </div>
                                </Link>
                                <Divider />
                            </div>
                        ))}
                        {(!expanded && category === 'all') && (
                            <div className="absolute bottom-5 left-0 right-0 h-[40px] bg-gradient-to-t from-white to-transparent pointer-events-none" />
                        )}
                    </div>
                    {category === 'all' && (
                        <div onClick={handleClickExpanded} className="text-black mt-[20px] font-bold text-[14px] inline-block cursor-pointer trasition-all duration-300 hover:underline px-[15px] py-[8px] w-full text-center">
                            {expanded ? 'ẨN BỚT' : 'TẢI THÊM'}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default QuestionPage