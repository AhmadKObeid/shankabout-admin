import CallDriverService from 'src/modules/callDriver/callDriverService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'CALLDRIVER_VIEW';

const callDriverViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: callDriverViewActions.FIND_STARTED,
      });

      const record = await CallDriverService.find(id);

      dispatch({
        type: callDriverViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: callDriverViewActions.FIND_ERROR,
      });

      getHistory().push('/call-driver');
    }
  },
};

export default callDriverViewActions;
