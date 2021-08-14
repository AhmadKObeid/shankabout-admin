import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import React from 'react';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import config from 'src/config';

const permissions = Permissions.values;

export default [
  {
    path: '/',
    exact: true,
    icon: <DashboardIcon />,
    label: i18n('dashboard.menu'),
    permissionRequired: null,
  },

  config.isPlanEnabled && {
    path: '/plan',
    permissionRequired: permissions.planRead,
    icon: <CreditCardOutlinedIcon />,
    label: i18n('plan.menu'),
  },

  {
    path: '/user',
    label: i18n('user.menu'),
    permissionRequired: permissions.userRead,
    icon: <PersonIcon />,
  },

  {
    path: '/audit-logs',
    icon: <HistoryIcon />,
    label: i18n('auditLog.menu'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: <SettingsIcon />,
    label: i18n('settings.menu'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/customer',
    permissionRequired: permissions.customerRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.customer.menu'),
  },

  {
    path: '/restaurant',
    permissionRequired: permissions.restaurantRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.restaurant.menu'),
  },

  {
    path: '/restaurant-owner',
    permissionRequired: permissions.restaurantOwnerRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.restaurantOwner.menu'),
  },

  {
    path: '/product',
    permissionRequired: permissions.productRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.product.menu'),
  },

  {
    path: '/driver',
    permissionRequired: permissions.driverRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.driver.menu'),
  },

  {
    path: '/orders',
    permissionRequired: permissions.ordersRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.orders.menu'),
  },

  {
    path: '/rating',
    permissionRequired: permissions.ratingRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.rating.menu'),
  },

  {
    path: '/resturent-category',
    permissionRequired: permissions.resturentCategoryRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.resturentCategory.menu'),
  },

  {
    path: '/product-category',
    permissionRequired: permissions.productCategoryRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.productCategory.menu'),
  },

  {
    path: '/cart',
    permissionRequired: permissions.cartRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.cart.menu'),
  },

  {
    path: '/offers-deals',
    permissionRequired: permissions.offersDealsRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.offersDeals.menu'),
  },

  {
    path: '/deals',
    permissionRequired: permissions.dealsRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.deals.menu'),
  },

  {
    path: '/offer-promotion',
    permissionRequired: permissions.offerPromotionRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.offerPromotion.menu'),
  },

  {
    path: '/resturant-promiton',
    permissionRequired: permissions.resturantPromitonRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.resturantPromiton.menu'),
  },

  {
    path: '/call-driver',
    permissionRequired: permissions.callDriverRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.callDriver.menu'),
  },

  {
    path: '/city',
    permissionRequired: permissions.cityRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.city.menu'),
  },

  {
    path: '/customer-adress',
    permissionRequired: permissions.customerAdressRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.customerAdress.menu'),
  },
].filter(Boolean);
