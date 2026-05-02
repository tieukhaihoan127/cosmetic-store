import { useState } from 'react';
import { ProfileCouponCard, ProfileCouponDetail, ProfileNavigateBreadcrumb } from '../../features/profile';


const ProfileCouponPage = () => {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <ProfileNavigateBreadcrumb mainCategory='Trang chủ' subCategory='Ưu đãi của tôi' />
            <div className='mb-[15px] text-[24px] font-bold leading[[1.5715] mt-[15px]'>
                Ưu đãi của tôi
            </div>
            <div className='grid grid-cols-2 gap-[20px] [@media(max-width:576px)]:grid-cols-1'>
                <ProfileCouponCard id={'26APR40'} setIsOpen={setOpen} />
                <ProfileCouponCard id={'26APR40'} setIsOpen={setOpen} />
            </div>
            <ProfileCouponDetail isOpen={open} setIsOpen={setOpen} />
        </div>
    );
};

export default ProfileCouponPage;