import RatingService from 'src/modules/rating/ratingService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'RATING_VIEW';

const ratingViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: ratingViewActions.FIND_STARTED,
      });

      const record = await RatingService.find(id);

      dispatch({
        type: ratingViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: ratingViewActions.FIND_ERROR,
      });

      getHistory().push('/rating');
    }
  },
};

export default ratingViewActions;
