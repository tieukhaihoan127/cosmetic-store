import type { RouteObject } from 'react-router-dom'
import BrandPage from '../pages/BrandPage'
import HomePage from '../pages/HomePage'
import MainLayout from '../layouts/MainLayout'
import ProductPage from '../pages/ProductPage'
import CollectionPage from '../pages/CollectionPage'
import ProductDetailPage from '../pages/ProductDetailPage'
import ReviewPage from '../pages/ReviewPage'
import StorePage from '../pages/StorePage'

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
            }
        ]
    }
];