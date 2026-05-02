import usePreviewOrder from '../hooks/usePreviewOrder';

const PreviewOrderExpandedButton = () => {

    const { expanded, handleChangeExpanded } = usePreviewOrder();

    return (
        <div onClick={handleChangeExpanded} className='mt-[20px] text-center hover:underline text-[14px] font-bold cursor-pointer'>
            {expanded ? 'THU LẠI' : 'XEM TẤT CẢ'}
        </div>
    );
};

export default PreviewOrderExpandedButton;