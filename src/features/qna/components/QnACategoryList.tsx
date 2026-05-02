interface QnACategoryListProps {
    category: string;
    onSelect: (id: string) => void;
};

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

const QnACategoryList = ({ category, onSelect }: QnACategoryListProps) => {
    return (
        <div>
            {informations.map((info, index) => (
                <div key={`${info}_${index}`} onClick={() => onSelect(info.id)} className={`mt-[15px] cursor-pointer ${category === info.id ? 'font-bold' : 'font-normal'}`}>
                    {index > 0 && info.categories}
                </div>
            ))}
        </div>
    );
};

export default QnACategoryList;