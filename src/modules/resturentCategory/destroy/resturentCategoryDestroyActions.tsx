import listActions from 'src/modules/resturentCategory/list/resturentCategoryListActions';
import ResturentCategoryService from 'src/modules/resturentCategory/resturentCategoryService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'RESTURENTCATEGORY_DESTROY';

const resturentCategoryDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: resturentCategoryDestroyActions.DESTROY_STARTED,
      });

      await ResturentCategoryService.destroyAll([id]);

      dispatch({
        type: resturentCategoryDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.resturentCategory.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/resturent-category');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: resturentCategoryDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: resturentCategoryDestroyActions.DESTROY_ALL_STARTED,
      });

      await ResturentCategoryService.destroyAll(ids);

      dispatch({
        type: resturentCategoryDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.resturentCategory.destroyAll.success'),
      );

      getHistory().push('/resturent-category');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: resturentCategoryDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default resturentCategoryDestroyActions;
