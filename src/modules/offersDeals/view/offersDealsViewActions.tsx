import OffersDealsService from 'src/modules/offersDeals/offersDealsService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'OFFERSDEALS_VIEW';

const offersDealsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: offersDealsViewActions.FIND_STARTED,
      });

      const record = await OffersDealsService.find(id);

      dispatch({
        type: offersDealsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: offersDealsViewActions.FIND_ERROR,
      });

      getHistory().push('/offers-deals');
    }
  },
};

export default offersDealsViewActions;
