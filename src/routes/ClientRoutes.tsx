import type { RouteObject } from 'react-router-dom'
import BrandPage from '../pages/BrandPage'
import HomePage from '../pages/HomePage'
import MainLayout from '../layouts/MainLayout'
import ProductPage from '../pages/ProductPage'

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
            }
        ]
    }
];