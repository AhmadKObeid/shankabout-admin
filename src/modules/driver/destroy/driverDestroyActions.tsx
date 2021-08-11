import listActions from 'src/modules/driver/list/driverListActions';
import DriverService from 'src/modules/driver/driverService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'DRIVER_DESTROY';

const driverDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: driverDestroyActions.DESTROY_STARTED,
      });

      await DriverService.destroyAll([id]);

      dispatch({
        type: driverDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.driver.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/driver');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: driverDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: driverDestroyActions.DESTROY_ALL_STARTED,
      });

      await DriverService.destroyAll(ids);

      dispatch({
        type: driverDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.driver.destroyAll.success'),
      );

      getHistory().push('/driver');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: driverDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default driverDestroyActions;
