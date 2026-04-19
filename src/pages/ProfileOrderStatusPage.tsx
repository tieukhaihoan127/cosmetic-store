import { Link } from "react-router-dom"
import OrderTabs from "../components/ui/Carousel/OrderTabs"

const ProfileOrderStatusPage = () => {
    return (
        <div>
            <div className="flex items-center text-[#797979] gap-2 leading-relaxed [@media(max-width:792px)]:hidden">
                <Link to="/" className="text-[12px]">
                    Trang chủ
                </Link>
                <div className="text-[14px]">{">"}</div>
                <Link to="/" className="text-[12px]">
                    Đơn hàng 
                </Link>
            </div>
            <div className='mb-[15px] text-[24px] font-bold leading[[1.5715] mt-[15px]'>
                Đơn hàng
            </div>
            <div className="mt-[10px]">
                <OrderTabs />
            </div>
        </div>
    )
}

export default ProfileOrderStatusPage