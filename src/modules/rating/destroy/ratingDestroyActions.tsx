import listActions from 'src/modules/rating/list/ratingListActions';
import RatingService from 'src/modules/rating/ratingService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'RATING_DESTROY';

const ratingDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: ratingDestroyActions.DESTROY_STARTED,
      });

      await RatingService.destroyAll([id]);

      dispatch({
        type: ratingDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.rating.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/rating');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: ratingDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: ratingDestroyActions.DESTROY_ALL_STARTED,
      });

      await RatingService.destroyAll(ids);

      dispatch({
        type: ratingDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.rating.destroyAll.success'),
      );

      getHistory().push('/rating');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: ratingDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default ratingDestroyActions;
