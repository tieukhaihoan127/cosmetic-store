import { useState } from 'react';
import { ProductPagination } from '../../features/product';
import { AddAddressDialog, DeleteAddressPopover, EditProfileAddressDialog, ProfileAddressCard, ProfileNavigateBreadcrumb } from '../../features/profile';
import useProfileDialog from '../../features/profile/hooks/useProfileDialog';

const ProfileAddressPage = () => {

    const [anchorEl, setAnchorEl] = useState<SVGSVGElement | null>(null);

    const { handleOpenAdd } = useProfileDialog();

    return (
        <div>
            <ProfileNavigateBreadcrumb mainCategory='Trang chủ' subCategory='Địa chỉ giao nhận' />
            <div className='flex items-center justify-between'>
                <div className='mb-[15px] text-[24px] font-bold leading[[1.5715] mt-[15px]'>
                    Địa chỉ giao nhận
                </div>
                <div onClick={handleOpenAdd} className='px-[15px] py-[8px] rounded-[38px] text-white bg-black text-[14px] cursor-pointer'>
                    + Thêm địa chỉ
                </div>
            </div>
            <div className='grid grid-cols-2 gap-[10px] [@media(max-width:792px)]:grid-cols-1'>
                <ProfileAddressCard setAnchorEl={setAnchorEl} />
                <ProfileAddressCard setAnchorEl={setAnchorEl} />
            </div>
            <div className='mt-[20px]'>
                <ProductPagination />
            </div>
            <AddAddressDialog />
            <EditProfileAddressDialog />
            <DeleteAddressPopover anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
        </div>
    );
};

export default ProfileAddressPage;