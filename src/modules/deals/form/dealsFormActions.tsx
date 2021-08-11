import DealsService from 'src/modules/deals/dealsService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'DEALS_FORM';

const dealsFormActions = {
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
        type: dealsFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await DealsService.find(id);
      }

      dispatch({
        type: dealsFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dealsFormActions.INIT_ERROR,
      });

      getHistory().push('/deals');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: dealsFormActions.CREATE_STARTED,
      });

      await DealsService.create(values);

      dispatch({
        type: dealsFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.deals.create.success'),
      );

      getHistory().push('/deals');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dealsFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: dealsFormActions.UPDATE_STARTED,
      });

      await DealsService.update(id, values);

      dispatch({
        type: dealsFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.deals.update.success'),
      );

      getHistory().push('/deals');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dealsFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default dealsFormActions;
