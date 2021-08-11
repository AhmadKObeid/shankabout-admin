import DriverService from 'src/modules/driver/driverService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'DRIVER_FORM';

const driverFormActions = {
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
        type: driverFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await DriverService.find(id);
      }

      dispatch({
        type: driverFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: driverFormActions.INIT_ERROR,
      });

      getHistory().push('/driver');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: driverFormActions.CREATE_STARTED,
      });

      await DriverService.create(values);

      dispatch({
        type: driverFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.driver.create.success'),
      );

      getHistory().push('/driver');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: driverFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: driverFormActions.UPDATE_STARTED,
      });

      await DriverService.update(id, values);

      dispatch({
        type: driverFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.driver.update.success'),
      );

      getHistory().push('/driver');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: driverFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default driverFormActions;
