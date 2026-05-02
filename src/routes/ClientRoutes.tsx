import type { RouteObject } from 'react-router-dom'
import HomePage from '../pages/client/HomePage';
import MainLayout from '../layouts/MainLayout'
import BrandPage from '../pages/client/BrandPage';
import ProductPage from '../pages/client/ProductPage';
import CollectionPage from '../pages/client/CollectionPage';
import ProductDetailPage from '../pages/client/ProductDetailPage';
import ReviewPage from '../pages/client/ReviewPage';
import StorePage from '../pages/client/StorePage';
import StoreDetailPage from '../pages/client/StoreDetailPage';
import HelpCenterPage from '../pages/client/HelpCenterPage';
import QuestionPage from '../pages/client/QuestionPage';
import OrderTrackingPage from '../pages/client/OrderTrackingPage';
import OrderTrackingDetailPage from '../pages/client/OrderTrackingDetailPage';
import PreviewOrderPage from '../pages/client/PreviewOrderPage';
import CheckoutPage from '../pages/client/CheckoutPage';
import ProfileLayout from '../layouts/ProfileLayout';
import ProfilePage from '../pages/client/ProfilePage';
import ProfileCouponPage from '../pages/client/ProfileCouponPage';
import ProfileQuestionPage from '../pages/client/ProfileQuestionPage';
import ProfileQuestionDetailPage from '../pages/client/ProfileQuestionDetailPage';
import ProfileOrderStatusPage from '../pages/client/ProfileOrderStatusPage';
import ProfileAddressPage from '../pages/client/ProfileAddressPage';


export const ClientRoutes : RouteObject[] = [
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/brands",
                element: <BrandPage />
            },
            {
                path: "/categories/:category",
                element: <ProductPage />
            },
            {
                path: "/collections/:collection",
                element: <CollectionPage />
            },
            {
                path: "/products/:product",
                element: <ProductDetailPage />
            },
            {
                path: "/products/:product/reviews",
                element: <ReviewPage />
            },
            {
                path: '/stores',
                element: <StorePage />
            },
            {
                path: '/stores/:id',
                element: <StoreDetailPage />
            },
            {
                path: '/help-center',
                element: <HelpCenterPage />
            },
            {
                path: '/help-center/questions',
                element: <QuestionPage />
            },
            {
                path: '/order-tracking',
                element: <OrderTrackingPage />
            },
            {
                path: '/track-orders/:id',
                element: <OrderTrackingDetailPage />
            },
            {
                path: '/preview-order',
                element: <PreviewOrderPage />
            },
            {
                path: '/check-out',
                element: <CheckoutPage />
            },
            {
                path: '/profile',
                element: <ProfileLayout />,
                children: [
                    {
                        index: true,
                        element: <ProfilePage />
                    },
                    {
                        path: 'coupon',
                        element: <ProfileCouponPage />
                    },
                    {
                        path: 'question',
                        element: <ProfileQuestionPage />
                    },
                    {
                        path: 'question/:id',
                        element: <ProfileQuestionDetailPage />
                    },
                    {
                        path: 'address',
                        element: <ProfileAddressPage />
                    },
                    {
                        path: 'order',
                        element: <ProfileOrderStatusPage />
                    }
                ]
            }
        ]
    }
];