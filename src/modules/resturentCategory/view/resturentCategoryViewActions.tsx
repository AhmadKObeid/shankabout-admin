import ResturentCategoryService from 'src/modules/resturentCategory/resturentCategoryService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'RESTURENTCATEGORY_VIEW';

const resturentCategoryViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: resturentCategoryViewActions.FIND_STARTED,
      });

      const record = await ResturentCategoryService.find(id);

      dispatch({
        type: resturentCategoryViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: resturentCategoryViewActions.FIND_ERROR,
      });

      getHistory().push('/resturent-category');
    }
  },
};

export default resturentCategoryViewActions;
