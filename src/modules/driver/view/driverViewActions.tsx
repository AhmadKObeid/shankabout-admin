import DriverService from 'src/modules/driver/driverService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DRIVER_VIEW';

const driverViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: driverViewActions.FIND_STARTED,
      });

      const record = await DriverService.find(id);

      dispatch({
        type: driverViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: driverViewActions.FIND_ERROR,
      });

      getHistory().push('/driver');
    }
  },
};

export default driverViewActions;
