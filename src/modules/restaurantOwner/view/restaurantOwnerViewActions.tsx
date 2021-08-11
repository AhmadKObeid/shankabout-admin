import RestaurantOwnerService from 'src/modules/restaurantOwner/restaurantOwnerService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'RESTAURANTOWNER_VIEW';

const restaurantOwnerViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: restaurantOwnerViewActions.FIND_STARTED,
      });

      const record = await RestaurantOwnerService.find(id);

      dispatch({
        type: restaurantOwnerViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: restaurantOwnerViewActions.FIND_ERROR,
      });

      getHistory().push('/restaurant-owner');
    }
  },
};

export default restaurantOwnerViewActions;
