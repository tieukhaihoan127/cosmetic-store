import { useState } from "react";
import "swiper/css";
import DeleteOrderDialog from "./DeleteOrderDialog";
import ProfileOrderStatusCard from "./ProfileOrderStatusCard";
import OrderStatusSearchBar from "./OrderStatusSearchBar";
import OrderStatusCarousel from "./OrderStatusCarousel";

const OrderTabs = () => {

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    return (
        <div className="w-full">
            <OrderStatusCarousel />
            <div className="h-[0.5px] bg-gray-200 mb-[25px]" />
            <OrderStatusSearchBar />
            <div className="">
                <ProfileOrderStatusCard date={'04/19/2026'} id={'#BW5DAAK3'} method={'Giao hàng'} quantity={2} total={'34.000đ'} address={'127 Lãnh Binh Thăng P12, Phường 12, Quận 11, Hồ Chí Minh'} status={'Đơn hàng đã đặt thành công'} setIsOpen={setOpenDeleteDialog} />
                <ProfileOrderStatusCard date={'04/19/2026'} id={'#BW5DAAK3'} method={'Giao hàng'} quantity={2} total={'34.000đ'} address={'127 Lãnh Binh Thăng P12, Phường 12, Quận 11, Hồ Chí Minh'} status={'Đơn hàng đã đặt thành công'} setIsOpen={setOpenDeleteDialog} />
            </div>
            <DeleteOrderDialog isOpen={openDeleteDialog} setIsOpen={setOpenDeleteDialog} />
        </div>
    );
};

export default OrderTabs;