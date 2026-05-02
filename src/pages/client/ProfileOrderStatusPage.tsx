import { OrderTabs, ProfileNavigateBreadcrumb } from "../../features/profile";

const ProfileOrderStatusPage = () => {
    return (
        <div>
            <ProfileNavigateBreadcrumb mainCategory='Trang chủ' subCategory='Đơn hàng' />
            <div className='mb-[15px] text-[24px] font-bold leading[[1.5715] mt-[15px]'>
                Đơn hàng
            </div>
            <div className="mt-[10px]">
                <OrderTabs />
            </div>
        </div>
    );
};

export default ProfileOrderStatusPage;