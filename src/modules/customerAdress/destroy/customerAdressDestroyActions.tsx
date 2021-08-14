import listActions from 'src/modules/customerAdress/list/customerAdressListActions';
import CustomerAdressService from 'src/modules/customerAdress/customerAdressService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'CUSTOMERADRESS_DESTROY';

const customerAdressDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: customerAdressDestroyActions.DESTROY_STARTED,
      });

      await CustomerAdressService.destroyAll([id]);

      dispatch({
        type: customerAdressDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.customerAdress.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/customer-adress');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: customerAdressDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: customerAdressDestroyActions.DESTROY_ALL_STARTED,
      });

      await CustomerAdressService.destroyAll(ids);

      dispatch({
        type: customerAdressDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.customerAdress.destroyAll.success'),
      );

      getHistory().push('/customer-adress');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: customerAdressDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default customerAdressDestroyActions;
