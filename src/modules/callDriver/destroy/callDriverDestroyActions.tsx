import listActions from 'src/modules/callDriver/list/callDriverListActions';
import CallDriverService from 'src/modules/callDriver/callDriverService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'CALLDRIVER_DESTROY';

const callDriverDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: callDriverDestroyActions.DESTROY_STARTED,
      });

      await CallDriverService.destroyAll([id]);

      dispatch({
        type: callDriverDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.callDriver.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/call-driver');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: callDriverDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: callDriverDestroyActions.DESTROY_ALL_STARTED,
      });

      await CallDriverService.destroyAll(ids);

      dispatch({
        type: callDriverDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.callDriver.destroyAll.success'),
      );

      getHistory().push('/call-driver');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: callDriverDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default callDriverDestroyActions;
