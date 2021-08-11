import listActions from 'src/modules/orders/list/ordersListActions';
import OrdersService from 'src/modules/orders/ordersService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ORDERS_DESTROY';

const ordersDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: ordersDestroyActions.DESTROY_STARTED,
      });

      await OrdersService.destroyAll([id]);

      dispatch({
        type: ordersDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.orders.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/orders');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: ordersDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: ordersDestroyActions.DESTROY_ALL_STARTED,
      });

      await OrdersService.destroyAll(ids);

      dispatch({
        type: ordersDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.orders.destroyAll.success'),
      );

      getHistory().push('/orders');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: ordersDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default ordersDestroyActions;
