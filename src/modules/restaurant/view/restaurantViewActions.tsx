import RestaurantService from 'src/modules/restaurant/restaurantService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'RESTAURANT_VIEW';

const restaurantViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: restaurantViewActions.FIND_STARTED,
      });

      const record = await RestaurantService.find(id);

      dispatch({
        type: restaurantViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: restaurantViewActions.FIND_ERROR,
      });

      getHistory().push('/restaurant');
    }
  },
};

export default restaurantViewActions;
