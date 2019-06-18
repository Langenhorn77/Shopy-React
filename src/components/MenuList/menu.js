import search from '../../img/icon-search.svg';
import user from '../../img/icon-user.svg';
import cart from '../../img/icon-cart.svg';

export const Menu =
[
    {
        id: 0,
        href: '/',
        class_Name: 'main-menu__nav-item main-menu__nav-item--active',
        text: 'Home'
    },

    {
        id: 1,
        href: '/catalog',
        class_Name: 'main-menu__nav-item',
        text: 'Products'
    },

    {
        id: 2,
        href: '/hotdeals',
        class_Name: 'main-menu__nav-item',
        text: 'Hot Deals'
    },

    {
        id: 3,
        href: '/about',
        class_Name: 'main-menu__nav-item',
        text: 'About'
    },

    {
        id: 4,
        href: '/contact',
        class_Name: 'main-menu__nav-item',
        text: 'Contact'
    }
];

export const MenuUser =
    [
        {
            id: 0,
            href: '/',
            class_Name: 'main-menu__user-item',
            img: 'img/icon-search.svg',
            alt: 'Search'
        },

        {
            id: 1,
            href: '/',
            class_Name: 'main-menu__user-item',
            img: user,
            alt: 'User'
        },

        {
            id: 2,
            href: '/',
            class_Name: 'main-menu__user-item',
            img: cart,
            alt: 'Cart'
        },


    ];



