import listActions from 'src/modules/restaurant/list/restaurantListActions';
import RestaurantService from 'src/modules/restaurant/restaurantService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'RESTAURANT_DESTROY';

const restaurantDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: restaurantDestroyActions.DESTROY_STARTED,
      });

      await RestaurantService.destroyAll([id]);

      dispatch({
        type: restaurantDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.restaurant.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/restaurant');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: restaurantDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: restaurantDestroyActions.DESTROY_ALL_STARTED,
      });

      await RestaurantService.destroyAll(ids);

      dispatch({
        type: restaurantDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.restaurant.destroyAll.success'),
      );

      getHistory().push('/restaurant');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: restaurantDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default restaurantDestroyActions;
