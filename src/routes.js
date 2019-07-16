import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ShopPage from './pages/StorePage/ShopPage';
import ServicePage from './pages/StorePage/ServicePage';
import NewsPage from './pages/NewsPage/NewsPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ShopDetailsPage from './pages/StorePage/ShopDetailsPage';
import ServiceDetailsPage from './pages/StorePage/ServiceDetailsPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

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
        path: '/stores/:slug',
        exact: false,
        main: ({match}) => <ShopDetailsPage match={match}/>
    },
    {
        path: '/services/:slug',
        exact: false,
        main: ({match}) => <ServiceDetailsPage match={match}/>
    },
    {
        path: '/contact',
        exact: false,
        main: () => <ContactPage />
    },
    {
        path: '/profile/:slug',
        exact: false,
        main: () => <ProfilePage />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
]

export default routes;