import RatingService from 'src/modules/rating/ratingService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'RATING_FORM';

const ratingFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: ratingFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await RatingService.find(id);
      }

      dispatch({
        type: ratingFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: ratingFormActions.INIT_ERROR,
      });

      getHistory().push('/rating');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: ratingFormActions.CREATE_STARTED,
      });

      await RatingService.create(values);

      dispatch({
        type: ratingFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.rating.create.success'),
      );

      getHistory().push('/rating');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: ratingFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ratingFormActions.UPDATE_STARTED,
      });

      await RatingService.update(id, values);

      dispatch({
        type: ratingFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.rating.update.success'),
      );

      getHistory().push('/rating');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: ratingFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default ratingFormActions;
