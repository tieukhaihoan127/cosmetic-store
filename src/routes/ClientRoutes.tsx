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
            }
        ]
    }
];