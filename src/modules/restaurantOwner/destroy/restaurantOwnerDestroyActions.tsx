import listActions from 'src/modules/restaurantOwner/list/restaurantOwnerListActions';
import RestaurantOwnerService from 'src/modules/restaurantOwner/restaurantOwnerService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'RESTAURANTOWNER_DESTROY';

const restaurantOwnerDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: restaurantOwnerDestroyActions.DESTROY_STARTED,
      });

      await RestaurantOwnerService.destroyAll([id]);

      dispatch({
        type: restaurantOwnerDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.restaurantOwner.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/restaurant-owner');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: restaurantOwnerDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: restaurantOwnerDestroyActions.DESTROY_ALL_STARTED,
      });

      await RestaurantOwnerService.destroyAll(ids);

      dispatch({
        type: restaurantOwnerDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.restaurantOwner.destroyAll.success'),
      );

      getHistory().push('/restaurant-owner');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: restaurantOwnerDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default restaurantOwnerDestroyActions;
