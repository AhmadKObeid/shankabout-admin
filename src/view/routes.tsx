import Permissions from 'src/security/permissions';
import config from 'src/config';
const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () =>
      import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/password-change',
    loader: () =>
      import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant',
    loader: () =>
      import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/new',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/:id/edit',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/plan',
    loader: () => import('src/view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  {
    path: '/user',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    loader: () =>
      import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },
  {
    path: '/user/:id/edit',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('src/view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    loader: () => import('src/view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    loader: () =>
      import('src/view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },
  
  {
    path: '/customer',
    loader: () =>
      import('src/view/customer/list/CustomerListPage'),
    permissionRequired: permissions.customerRead,
    exact: true,
  },
  {
    path: '/customer/new',
    loader: () =>
      import('src/view/customer/form/CustomerFormPage'),
    permissionRequired: permissions.customerCreate,
    exact: true,
  },
  {
    path: '/customer/importer',
    loader: () =>
      import(
        'src/view/customer/importer/CustomerImporterPage'
      ),
    permissionRequired: permissions.customerImport,
    exact: true,
  },
  {
    path: '/customer/:id/edit',
    loader: () =>
      import('src/view/customer/form/CustomerFormPage'),
    permissionRequired: permissions.customerEdit,
    exact: true,
  },
  {
    path: '/customer/:id',
    loader: () =>
      import('src/view/customer/view/CustomerViewPage'),
    permissionRequired: permissions.customerRead,
    exact: true,
  },

  {
    path: '/restaurant',
    loader: () =>
      import('src/view/restaurant/list/RestaurantListPage'),
    permissionRequired: permissions.restaurantRead,
    exact: true,
  },
  {
    path: '/restaurant/new',
    loader: () =>
      import('src/view/restaurant/form/RestaurantFormPage'),
    permissionRequired: permissions.restaurantCreate,
    exact: true,
  },
  {
    path: '/restaurant/importer',
    loader: () =>
      import(
        'src/view/restaurant/importer/RestaurantImporterPage'
      ),
    permissionRequired: permissions.restaurantImport,
    exact: true,
  },
  {
    path: '/restaurant/:id/edit',
    loader: () =>
      import('src/view/restaurant/form/RestaurantFormPage'),
    permissionRequired: permissions.restaurantEdit,
    exact: true,
  },
  {
    path: '/restaurant/:id',
    loader: () =>
      import('src/view/restaurant/view/RestaurantViewPage'),
    permissionRequired: permissions.restaurantRead,
    exact: true,
  },

  {
    path: '/restaurant-owner',
    loader: () =>
      import('src/view/restaurantOwner/list/RestaurantOwnerListPage'),
    permissionRequired: permissions.restaurantOwnerRead,
    exact: true,
  },
  {
    path: '/restaurant-owner/new',
    loader: () =>
      import('src/view/restaurantOwner/form/RestaurantOwnerFormPage'),
    permissionRequired: permissions.restaurantOwnerCreate,
    exact: true,
  },
  {
    path: '/restaurant-owner/importer',
    loader: () =>
      import(
        'src/view/restaurantOwner/importer/RestaurantOwnerImporterPage'
      ),
    permissionRequired: permissions.restaurantOwnerImport,
    exact: true,
  },
  {
    path: '/restaurant-owner/:id/edit',
    loader: () =>
      import('src/view/restaurantOwner/form/RestaurantOwnerFormPage'),
    permissionRequired: permissions.restaurantOwnerEdit,
    exact: true,
  },
  {
    path: '/restaurant-owner/:id',
    loader: () =>
      import('src/view/restaurantOwner/view/RestaurantOwnerViewPage'),
    permissionRequired: permissions.restaurantOwnerRead,
    exact: true,
  },

  {
    path: '/product',
    loader: () =>
      import('src/view/product/list/ProductListPage'),
    permissionRequired: permissions.productRead,
    exact: true,
  },
  {
    path: '/product/new',
    loader: () =>
      import('src/view/product/form/ProductFormPage'),
    permissionRequired: permissions.productCreate,
    exact: true,
  },
  {
    path: '/product/importer',
    loader: () =>
      import(
        'src/view/product/importer/ProductImporterPage'
      ),
    permissionRequired: permissions.productImport,
    exact: true,
  },
  {
    path: '/product/:id/edit',
    loader: () =>
      import('src/view/product/form/ProductFormPage'),
    permissionRequired: permissions.productEdit,
    exact: true,
  },
  {
    path: '/product/:id',
    loader: () =>
      import('src/view/product/view/ProductViewPage'),
    permissionRequired: permissions.productRead,
    exact: true,
  },

  {
    path: '/driver',
    loader: () =>
      import('src/view/driver/list/DriverListPage'),
    permissionRequired: permissions.driverRead,
    exact: true,
  },
  {
    path: '/driver/new',
    loader: () =>
      import('src/view/driver/form/DriverFormPage'),
    permissionRequired: permissions.driverCreate,
    exact: true,
  },
  {
    path: '/driver/importer',
    loader: () =>
      import(
        'src/view/driver/importer/DriverImporterPage'
      ),
    permissionRequired: permissions.driverImport,
    exact: true,
  },
  {
    path: '/driver/:id/edit',
    loader: () =>
      import('src/view/driver/form/DriverFormPage'),
    permissionRequired: permissions.driverEdit,
    exact: true,
  },
  {
    path: '/driver/:id',
    loader: () =>
      import('src/view/driver/view/DriverViewPage'),
    permissionRequired: permissions.driverRead,
    exact: true,
  },

  {
    path: '/orders',
    loader: () =>
      import('src/view/orders/list/OrdersListPage'),
    permissionRequired: permissions.ordersRead,
    exact: true,
  },
  {
    path: '/orders/new',
    loader: () =>
      import('src/view/orders/form/OrdersFormPage'),
    permissionRequired: permissions.ordersCreate,
    exact: true,
  },
  {
    path: '/orders/importer',
    loader: () =>
      import(
        'src/view/orders/importer/OrdersImporterPage'
      ),
    permissionRequired: permissions.ordersImport,
    exact: true,
  },
  {
    path: '/orders/:id/edit',
    loader: () =>
      import('src/view/orders/form/OrdersFormPage'),
    permissionRequired: permissions.ordersEdit,
    exact: true,
  },
  {
    path: '/orders/:id',
    loader: () =>
      import('src/view/orders/view/OrdersViewPage'),
    permissionRequired: permissions.ordersRead,
    exact: true,
  },

  {
    path: '/rating',
    loader: () =>
      import('src/view/rating/list/RatingListPage'),
    permissionRequired: permissions.ratingRead,
    exact: true,
  },
  {
    path: '/rating/new',
    loader: () =>
      import('src/view/rating/form/RatingFormPage'),
    permissionRequired: permissions.ratingCreate,
    exact: true,
  },
  {
    path: '/rating/importer',
    loader: () =>
      import(
        'src/view/rating/importer/RatingImporterPage'
      ),
    permissionRequired: permissions.ratingImport,
    exact: true,
  },
  {
    path: '/rating/:id/edit',
    loader: () =>
      import('src/view/rating/form/RatingFormPage'),
    permissionRequired: permissions.ratingEdit,
    exact: true,
  },
  {
    path: '/rating/:id',
    loader: () =>
      import('src/view/rating/view/RatingViewPage'),
    permissionRequired: permissions.ratingRead,
    exact: true,
  },

  {
    path: '/resturent-category',
    loader: () =>
      import('src/view/resturentCategory/list/ResturentCategoryListPage'),
    permissionRequired: permissions.resturentCategoryRead,
    exact: true,
  },
  {
    path: '/resturent-category/new',
    loader: () =>
      import('src/view/resturentCategory/form/ResturentCategoryFormPage'),
    permissionRequired: permissions.resturentCategoryCreate,
    exact: true,
  },
  {
    path: '/resturent-category/importer',
    loader: () =>
      import(
        'src/view/resturentCategory/importer/ResturentCategoryImporterPage'
      ),
    permissionRequired: permissions.resturentCategoryImport,
    exact: true,
  },
  {
    path: '/resturent-category/:id/edit',
    loader: () =>
      import('src/view/resturentCategory/form/ResturentCategoryFormPage'),
    permissionRequired: permissions.resturentCategoryEdit,
    exact: true,
  },
  {
    path: '/resturent-category/:id',
    loader: () =>
      import('src/view/resturentCategory/view/ResturentCategoryViewPage'),
    permissionRequired: permissions.resturentCategoryRead,
    exact: true,
  },

  {
    path: '/product-category',
    loader: () =>
      import('src/view/productCategory/list/ProductCategoryListPage'),
    permissionRequired: permissions.productCategoryRead,
    exact: true,
  },
  {
    path: '/product-category/new',
    loader: () =>
      import('src/view/productCategory/form/ProductCategoryFormPage'),
    permissionRequired: permissions.productCategoryCreate,
    exact: true,
  },
  {
    path: '/product-category/importer',
    loader: () =>
      import(
        'src/view/productCategory/importer/ProductCategoryImporterPage'
      ),
    permissionRequired: permissions.productCategoryImport,
    exact: true,
  },
  {
    path: '/product-category/:id/edit',
    loader: () =>
      import('src/view/productCategory/form/ProductCategoryFormPage'),
    permissionRequired: permissions.productCategoryEdit,
    exact: true,
  },
  {
    path: '/product-category/:id',
    loader: () =>
      import('src/view/productCategory/view/ProductCategoryViewPage'),
    permissionRequired: permissions.productCategoryRead,
    exact: true,
  },

  {
    path: '/cart',
    loader: () =>
      import('src/view/cart/list/CartListPage'),
    permissionRequired: permissions.cartRead,
    exact: true,
  },
  {
    path: '/cart/new',
    loader: () =>
      import('src/view/cart/form/CartFormPage'),
    permissionRequired: permissions.cartCreate,
    exact: true,
  },
  {
    path: '/cart/importer',
    loader: () =>
      import(
        'src/view/cart/importer/CartImporterPage'
      ),
    permissionRequired: permissions.cartImport,
    exact: true,
  },
  {
    path: '/cart/:id/edit',
    loader: () =>
      import('src/view/cart/form/CartFormPage'),
    permissionRequired: permissions.cartEdit,
    exact: true,
  },
  {
    path: '/cart/:id',
    loader: () =>
      import('src/view/cart/view/CartViewPage'),
    permissionRequired: permissions.cartRead,
    exact: true,
  },

  {
    path: '/offers-deals',
    loader: () =>
      import('src/view/offersDeals/list/OffersDealsListPage'),
    permissionRequired: permissions.offersDealsRead,
    exact: true,
  },
  {
    path: '/offers-deals/new',
    loader: () =>
      import('src/view/offersDeals/form/OffersDealsFormPage'),
    permissionRequired: permissions.offersDealsCreate,
    exact: true,
  },
  {
    path: '/offers-deals/importer',
    loader: () =>
      import(
        'src/view/offersDeals/importer/OffersDealsImporterPage'
      ),
    permissionRequired: permissions.offersDealsImport,
    exact: true,
  },
  {
    path: '/offers-deals/:id/edit',
    loader: () =>
      import('src/view/offersDeals/form/OffersDealsFormPage'),
    permissionRequired: permissions.offersDealsEdit,
    exact: true,
  },
  {
    path: '/offers-deals/:id',
    loader: () =>
      import('src/view/offersDeals/view/OffersDealsViewPage'),
    permissionRequired: permissions.offersDealsRead,
    exact: true,
  },

  {
    path: '/deals',
    loader: () =>
      import('src/view/deals/list/DealsListPage'),
    permissionRequired: permissions.dealsRead,
    exact: true,
  },
  {
    path: '/deals/new',
    loader: () =>
      import('src/view/deals/form/DealsFormPage'),
    permissionRequired: permissions.dealsCreate,
    exact: true,
  },
  {
    path: '/deals/importer',
    loader: () =>
      import(
        'src/view/deals/importer/DealsImporterPage'
      ),
    permissionRequired: permissions.dealsImport,
    exact: true,
  },
  {
    path: '/deals/:id/edit',
    loader: () =>
      import('src/view/deals/form/DealsFormPage'),
    permissionRequired: permissions.dealsEdit,
    exact: true,
  },
  {
    path: '/deals/:id',
    loader: () =>
      import('src/view/deals/view/DealsViewPage'),
    permissionRequired: permissions.dealsRead,
    exact: true,
  },

  {
    path: '/offer-promotion',
    loader: () =>
      import('src/view/offerPromotion/list/OfferPromotionListPage'),
    permissionRequired: permissions.offerPromotionRead,
    exact: true,
  },
  {
    path: '/offer-promotion/new',
    loader: () =>
      import('src/view/offerPromotion/form/OfferPromotionFormPage'),
    permissionRequired: permissions.offerPromotionCreate,
    exact: true,
  },
  {
    path: '/offer-promotion/importer',
    loader: () =>
      import(
        'src/view/offerPromotion/importer/OfferPromotionImporterPage'
      ),
    permissionRequired: permissions.offerPromotionImport,
    exact: true,
  },
  {
    path: '/offer-promotion/:id/edit',
    loader: () =>
      import('src/view/offerPromotion/form/OfferPromotionFormPage'),
    permissionRequired: permissions.offerPromotionEdit,
    exact: true,
  },
  {
    path: '/offer-promotion/:id',
    loader: () =>
      import('src/view/offerPromotion/view/OfferPromotionViewPage'),
    permissionRequired: permissions.offerPromotionRead,
    exact: true,
  },

  {
    path: '/resturant-promiton',
    loader: () =>
      import('src/view/resturantPromiton/list/ResturantPromitonListPage'),
    permissionRequired: permissions.resturantPromitonRead,
    exact: true,
  },
  {
    path: '/resturant-promiton/new',
    loader: () =>
      import('src/view/resturantPromiton/form/ResturantPromitonFormPage'),
    permissionRequired: permissions.resturantPromitonCreate,
    exact: true,
  },
  {
    path: '/resturant-promiton/importer',
    loader: () =>
      import(
        'src/view/resturantPromiton/importer/ResturantPromitonImporterPage'
      ),
    permissionRequired: permissions.resturantPromitonImport,
    exact: true,
  },
  {
    path: '/resturant-promiton/:id/edit',
    loader: () =>
      import('src/view/resturantPromiton/form/ResturantPromitonFormPage'),
    permissionRequired: permissions.resturantPromitonEdit,
    exact: true,
  },
  {
    path: '/resturant-promiton/:id',
    loader: () =>
      import('src/view/resturantPromiton/view/ResturantPromitonViewPage'),
    permissionRequired: permissions.resturantPromitonRead,
    exact: true,
  },

  {
    path: '/call-driver',
    loader: () =>
      import('src/view/callDriver/list/CallDriverListPage'),
    permissionRequired: permissions.callDriverRead,
    exact: true,
  },
  {
    path: '/call-driver/new',
    loader: () =>
      import('src/view/callDriver/form/CallDriverFormPage'),
    permissionRequired: permissions.callDriverCreate,
    exact: true,
  },
  {
    path: '/call-driver/importer',
    loader: () =>
      import(
        'src/view/callDriver/importer/CallDriverImporterPage'
      ),
    permissionRequired: permissions.callDriverImport,
    exact: true,
  },
  {
    path: '/call-driver/:id/edit',
    loader: () =>
      import('src/view/callDriver/form/CallDriverFormPage'),
    permissionRequired: permissions.callDriverEdit,
    exact: true,
  },
  {
    path: '/call-driver/:id',
    loader: () =>
      import('src/view/callDriver/view/CallDriverViewPage'),
    permissionRequired: permissions.callDriverRead,
    exact: true,
  },

  {
    path: '/city',
    loader: () =>
      import('src/view/city/list/CityListPage'),
    permissionRequired: permissions.cityRead,
    exact: true,
  },
  {
    path: '/city/new',
    loader: () =>
      import('src/view/city/form/CityFormPage'),
    permissionRequired: permissions.cityCreate,
    exact: true,
  },
  {
    path: '/city/importer',
    loader: () =>
      import(
        'src/view/city/importer/CityImporterPage'
      ),
    permissionRequired: permissions.cityImport,
    exact: true,
  },
  {
    path: '/city/:id/edit',
    loader: () =>
      import('src/view/city/form/CityFormPage'),
    permissionRequired: permissions.cityEdit,
    exact: true,
  },
  {
    path: '/city/:id',
    loader: () =>
      import('src/view/city/view/CityViewPage'),
    permissionRequired: permissions.cityRead,
    exact: true,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('src/view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () =>
      import('src/view/auth/ForgotPasswordPage'),
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('src/view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () =>
      import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () =>
      import('src/view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('src/view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('src/view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('src/view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () =>
      import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () =>
      import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('src/view/shared/errors/Error404Page'),
  },
].filter(Boolean);

export default {
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
