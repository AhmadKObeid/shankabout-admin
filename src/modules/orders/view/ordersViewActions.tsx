import OrdersService from 'src/modules/orders/ordersService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ORDERS_VIEW';

const ordersViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: ordersViewActions.FIND_STARTED,
      });

      const record = await OrdersService.find(id);

      dispatch({
        type: ordersViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: ordersViewActions.FIND_ERROR,
      });

      getHistory().push('/orders');
    }
  },
};

export default ordersViewActions;
