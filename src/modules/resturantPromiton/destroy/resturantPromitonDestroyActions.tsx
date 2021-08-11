import listActions from 'src/modules/resturantPromiton/list/resturantPromitonListActions';
import ResturantPromitonService from 'src/modules/resturantPromiton/resturantPromitonService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'RESTURANTPROMITON_DESTROY';

const resturantPromitonDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: resturantPromitonDestroyActions.DESTROY_STARTED,
      });

      await ResturantPromitonService.destroyAll([id]);

      dispatch({
        type: resturantPromitonDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.resturantPromiton.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/resturant-promiton');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: resturantPromitonDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: resturantPromitonDestroyActions.DESTROY_ALL_STARTED,
      });

      await ResturantPromitonService.destroyAll(ids);

      dispatch({
        type: resturantPromitonDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.resturantPromiton.destroyAll.success'),
      );

      getHistory().push('/resturant-promiton');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: resturantPromitonDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default resturantPromitonDestroyActions;
