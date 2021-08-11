import ResturentCategoryService from 'src/modules/resturentCategory/resturentCategoryService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'RESTURENTCATEGORY_FORM';

const resturentCategoryFormActions = {
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
        type: resturentCategoryFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ResturentCategoryService.find(id);
      }

      dispatch({
        type: resturentCategoryFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: resturentCategoryFormActions.INIT_ERROR,
      });

      getHistory().push('/resturent-category');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: resturentCategoryFormActions.CREATE_STARTED,
      });

      await ResturentCategoryService.create(values);

      dispatch({
        type: resturentCategoryFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.resturentCategory.create.success'),
      );

      getHistory().push('/resturent-category');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: resturentCategoryFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: resturentCategoryFormActions.UPDATE_STARTED,
      });

      await ResturentCategoryService.update(id, values);

      dispatch({
        type: resturentCategoryFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.resturentCategory.update.success'),
      );

      getHistory().push('/resturent-category');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: resturentCategoryFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default resturentCategoryFormActions;
