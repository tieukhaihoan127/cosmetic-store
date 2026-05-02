import Divider from '@mui/material/Divider';
import OrderStatusStepper from '../../features/order/components/OrderStatusStepper';
import NavigateBreadcrumb from '../../shared/components/common/Breadcrumb/NavigateBreadcrumb';
import { BuyAgainDialog, DeleteDialog, TrackingOrderDetailInformation, TrackingOrderPriceInformation, TrackingOrderProductCard } from '../../features/order';

const OrderTrackingDetailPage = () => {

    return (
        <div className='mt-[15px]'>
            <div className='w-[80%] mx-auto [@media(max-width:576px)]:w-[90%]'>
                <NavigateBreadcrumb mainCategory='Trang chủ' subCategory='Đơn hàng' /> 
                <TrackingOrderDetailInformation />
            </div>
            <div className='w-[85%] mx-auto [@media(max-width:576px)]:w-[90%]'>
                <OrderStatusStepper />
            </div>
            <div className='w-[80%] mx-auto [@media(max-width:576px)]:w-[90%]'>
                <div className='h-full border-1 border-[#dfdfdf] rounded-[5px] p-[20px] min-h-[140px]'>
                    <div className='text-[16px] font-bold leading-[23px] mb-[10px]'>
                        Đơn hàng
                    </div>
                    <div>
                        <TrackingOrderProductCard />
                        <TrackingOrderProductCard />
                    </div>
                    <Divider />
                    <TrackingOrderPriceInformation />
                </div>
            </div>
            <DeleteDialog />
            <BuyAgainDialog />
        </div>
    );
};

export default OrderTrackingDetailPage;