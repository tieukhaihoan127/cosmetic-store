import type { RouteObject } from 'react-router-dom'
import BrandPage from '../pages/BrandPage'
import HomePage from '../pages/HomePage'
import MainLayout from '../layouts/MainLayout'
import ProductPage from '../pages/ProductPage'
import CollectionPage from '../pages/CollectionPage'
import ProductDetailPage from '../pages/ProductDetailPage'
import ReviewPage from '../pages/ReviewPage'
import StorePage from '../pages/StorePage'
import HelpCenterPage from '../pages/HelpCenterPage'
import QuestionPage from '../pages/QuestionPage'
import OrderTrackingPage from '../pages/OrderTrackingPage'
import OrderTrackingDetailPage from '../pages/OrderTrackingDetailPage'
import PreviewOrderPage from '../pages/PreviewOrderPage'
import CheckoutPage from '../pages/CheckoutPage'
import ProfilePage from '../pages/ProfilePage'
import ProfileLayout from '../layouts/ProfileLayout'
import ProfileCouponPage from '../pages/ProfileCouponPage'
import ProfileQuestionPage from '../pages/ProfileQuestionPage'
import ProfileQuestionDetailPage from '../pages/ProfileQuestionDetailPage'
import ProfileAddressPage from '../pages/ProfileAddressPage'
import ProfileOrderStatusPage from '../pages/ProfileOrderStatusPage'
import StoreDetailPage from '../pages/StoreDetailPage'

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