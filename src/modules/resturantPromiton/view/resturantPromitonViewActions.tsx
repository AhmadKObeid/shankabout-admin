import ResturantPromitonService from 'src/modules/resturantPromiton/resturantPromitonService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'RESTURANTPROMITON_VIEW';

const resturantPromitonViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: resturantPromitonViewActions.FIND_STARTED,
      });

      const record = await ResturantPromitonService.find(id);

      dispatch({
        type: resturantPromitonViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: resturantPromitonViewActions.FIND_ERROR,
      });

      getHistory().push('/resturant-promiton');
    }
  },
};

export default resturantPromitonViewActions;
