import OrdersService from 'src/modules/orders/ordersService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'ORDERS_FORM';

const ordersFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: ordersFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await OrdersService.find(id);
      }

      dispatch({
        type: ordersFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: ordersFormActions.INIT_ERROR,
      });

      getHistory().push('/orders');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: ordersFormActions.CREATE_STARTED,
      });

      await OrdersService.create(values);

      dispatch({
        type: ordersFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.orders.create.success'),
      );

      getHistory().push('/orders');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: ordersFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ordersFormActions.UPDATE_STARTED,
      });

      await OrdersService.update(id, values);

      dispatch({
        type: ordersFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.orders.update.success'),
      );

      getHistory().push('/orders');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: ordersFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default ordersFormActions;
