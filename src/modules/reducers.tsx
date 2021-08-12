import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import plan from 'src/modules/plan/planReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import customer from 'src/modules/customer/customerReducers';
import restaurant from 'src/modules/restaurant/restaurantReducers';
import restaurantOwner from 'src/modules/restaurantOwner/restaurantOwnerReducers';
import product from 'src/modules/product/productReducers';
import driver from 'src/modules/driver/driverReducers';
import orders from 'src/modules/orders/ordersReducers';
import rating from 'src/modules/rating/ratingReducers';
import resturentCategory from 'src/modules/resturentCategory/resturentCategoryReducers';
import productCategory from 'src/modules/productCategory/productCategoryReducers';
import cart from 'src/modules/cart/cartReducers';
import offersDeals from 'src/modules/offersDeals/offersDealsReducers';
import deals from 'src/modules/deals/dealsReducers';
import offerPromotion from 'src/modules/offerPromotion/offerPromotionReducers';
import resturantPromiton from 'src/modules/resturantPromiton/resturantPromitonReducers';
import callDriver from 'src/modules/callDriver/callDriverReducers';
import city from 'src/modules/city/cityReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,
    customer,
    restaurant,
    restaurantOwner,
    product,
    driver,
    orders,
    rating,
    resturentCategory,
    productCategory,
    cart,
    offersDeals,
    deals,
    offerPromotion,
    resturantPromiton,
    callDriver,
    city,
  });
