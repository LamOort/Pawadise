import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ShopPage from './pages/StorePage/ShopPage';
import ServicePage from './pages/StorePage/ServicePage';
import NewsPage from './pages/NewsPage/NewsPage';
import EventsPage from './pages/EventsPage/EventsPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import ContactPage from './pages/ContactPage/ContactPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/shop',
        exact: false,
        main: () => <ShopPage />
    },
    {
        path: '/service',
        exact: false,
        main: () => <ServicePage />
    },
    {
        path: '/news',
        exact: false,
        main: () => <NewsPage />
    },
    {
        path: '/events',
        exact: false,
        main: () => <EventsPage />
    },
    {
        path: '/gallery',
        exact: false,
        main: () => <GalleryPage />
    },
    {
        path: '/contact',
        exact: false,
        main: () => <ContactPage />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
]

export default routes;