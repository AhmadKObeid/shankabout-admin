import CityService from 'src/modules/city/cityService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'CITY_VIEW';

const cityViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: cityViewActions.FIND_STARTED,
      });

      const record = await CityService.find(id);

      dispatch({
        type: cityViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: cityViewActions.FIND_ERROR,
      });

      getHistory().push('/city');
    }
  },
};

export default cityViewActions;
