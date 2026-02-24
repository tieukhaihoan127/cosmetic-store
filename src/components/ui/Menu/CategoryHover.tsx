import { Link } from 'react-router-dom';

const CategoryHover = () => {

    const categories = [
        {
            mainCategory: 'TRANG ĐIỂM MẶT',
            subCategories: [
                'Cushion',
                'Phấn Nền',
                'Phấn Phủ',
                'Che Khuyết Điểm',
                'Kem Lót',
                'Phấn Má Hồng',
                'Tạo Khối'
            ]
        },
        {
            mainCategory: 'TRANG ĐIỂM MÔI',
            subCategories: [
                'Son Thỏi',
                'Son Kem - Tint',
                'Son Dưỡng Môi - Đặc Trị',
                'Son Bóng'
            ]
        },
        {
            mainCategory: 'TRANG ĐIỂM MẮT',
            subCategories: [
                'Phấn Mắt',
                'Mascara',
                'Kẻ Chân Mày',
                'Kẻ Mắt'
            ]
        },
        {
            mainCategory: 'PHỤ KIỆN TRANG ĐIỂM',
            subCategories: [
                'Cọ Trang Điểm',
                'Bông Mút Trang Điểm',
                'Phụ Kiện Trang Điểm Khác'
            ]
        },
        {
            mainCategory: 'TRANG ĐIỂM THUẦN CHAY',
            subCategories: []
        }
    ];

  return (
    <div className="w-full h-[290%] bg-white shadow-lg absolute left-0 top-37 z-[9999] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <div className='flex max-w-[92%] mx-auto [@media(max-width:991px)]:flex-col'>
            {/* Left */}
            <div className='w-2/3 pt-6 grid grid-cols-3 [@media(max-width:991px)]:w-full'>
                {categories.map((category, index) => (
                    <ul key={index} className='mb-8 px-[10px]'>
                        <Link to={'/'}>
                            <li className='font-bold mb-5'>{category.mainCategory}</li>
                        </Link>
                        {category.subCategories.length > 0 && (
                            <>
                                {category.subCategories.map((subCategory, subIndex) => (
                                    <Link to={'/'} key={subIndex}> 
                                        <li className='mb-4 text-[15px]'>{subCategory}</li>
                                    </Link>
                                ))}
                            </>
                        )}
                    </ul>
                ))}
            </div>
            {/* Right */}
            <div className='flex w-1/3 pt-6 justify-center [@media(max-width:991px)]:w-full mb-10'>
                <Link to="/" className='block overflow-hidden rounded-sm w-[300px] h-[300px]'>
                    <img
                        src="https://image.hsv-tech.io/400x0/bbx/common/961d3e49-e6ce-4aff-b631-ea223464f471.webp"
                        className='w-full object-cover '
                    />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default CategoryHover