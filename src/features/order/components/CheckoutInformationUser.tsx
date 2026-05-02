import { AddAddressDialog, ChangeAddressDialog, EditAddressDialog } from '../../profile';
import useProfileDialog from '../../profile/hooks/useProfileDialog';

const CheckoutInformationUser = () => {

    const { handleOpenChange } = useProfileDialog();

    return (
        <>
            <div className='flex items-center justify-between my-[10px]'>
                <div>
                    Bạn đã đăng nhập với tài khoản honahoan127@gmail.com
                </div>
                <div className='text-[#ab2328] leading-1.5715 hover:text-black transition duration-400 ease-in-out cursor-pointer px-[15px]'>
                    Đăng xuất
                </div>
            </div>
            <div className='border-1 border-[#d9d9d9] bg-white text-[14px] leading-[1.5715] px-[15px] py-[8px] mt-[30px]'>
                <div className='flex items-center justify-between text-[#0992d0]'>
                    <div className='font-bold'>Tiêu | 84764795487 | tieukhaihoan127@gmail.com</div>
                    <div onClick={handleOpenChange} className='cursor-pointer'>Thay đổi</div>
                </div>
                <div className='mt-1'>
                    127 Lanh Binh Thang , Phường 12, Quận 11, Hồ Chí Minh
                </div>
            </div>
            <AddAddressDialog />
            <EditAddressDialog />
            <ChangeAddressDialog />
        </>
    );
};

export default CheckoutInformationUser;