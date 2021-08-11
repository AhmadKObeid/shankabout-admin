import DealsService from 'src/modules/deals/dealsService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DEALS_VIEW';

const dealsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: dealsViewActions.FIND_STARTED,
      });

      const record = await DealsService.find(id);

      dispatch({
        type: dealsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dealsViewActions.FIND_ERROR,
      });

      getHistory().push('/deals');
    }
  },
};

export default dealsViewActions;
