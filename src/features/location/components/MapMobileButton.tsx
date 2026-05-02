import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import useDialog from '../hooks/useDialog';

const MapMobileButton = () => {

    const { handleOpenMapDialog } = useDialog();

    return (
        <div className='flex justify-center sticky bottom-[20px] mt-[20px] [@media(min-width:576px)]:hidden'>
            <div onClick={handleOpenMapDialog} className='flex items-center h-[50px] px-[20px] py-[5px] rounded-[38px] bg-black cursor-pointer'>
                <MapOutlinedIcon sx={{ fontSize: '20px', color: 'white' }} />
                <div className='ml-[8px] text-[14px] text-white'>Bản đồ</div>
            </div>
        </div>
    );
};

export default MapMobileButton;