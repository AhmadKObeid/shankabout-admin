import RestaurantOwnerService from 'src/modules/restaurantOwner/restaurantOwnerService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'RESTAURANTOWNER_FORM';

const restaurantOwnerFormActions = {
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
        type: restaurantOwnerFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await RestaurantOwnerService.find(id);
      }

      dispatch({
        type: restaurantOwnerFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: restaurantOwnerFormActions.INIT_ERROR,
      });

      getHistory().push('/restaurant-owner');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: restaurantOwnerFormActions.CREATE_STARTED,
      });

      await RestaurantOwnerService.create(values);

      dispatch({
        type: restaurantOwnerFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.restaurantOwner.create.success'),
      );

      getHistory().push('/restaurant-owner');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: restaurantOwnerFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: restaurantOwnerFormActions.UPDATE_STARTED,
      });

      await RestaurantOwnerService.update(id, values);

      dispatch({
        type: restaurantOwnerFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.restaurantOwner.update.success'),
      );

      getHistory().push('/restaurant-owner');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: restaurantOwnerFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default restaurantOwnerFormActions;
