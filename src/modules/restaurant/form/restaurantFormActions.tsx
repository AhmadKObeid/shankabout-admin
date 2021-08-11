import RestaurantService from 'src/modules/restaurant/restaurantService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'RESTAURANT_FORM';

const restaurantFormActions = {
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
        type: restaurantFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await RestaurantService.find(id);
      }

      dispatch({
        type: restaurantFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: restaurantFormActions.INIT_ERROR,
      });

      getHistory().push('/restaurant');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: restaurantFormActions.CREATE_STARTED,
      });

      await RestaurantService.create(values);

      dispatch({
        type: restaurantFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.restaurant.create.success'),
      );

      getHistory().push('/restaurant');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: restaurantFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: restaurantFormActions.UPDATE_STARTED,
      });

      await RestaurantService.update(id, values);

      dispatch({
        type: restaurantFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.restaurant.update.success'),
      );

      getHistory().push('/restaurant');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: restaurantFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default restaurantFormActions;
