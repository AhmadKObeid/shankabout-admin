import CustomerAdressService from 'src/modules/customerAdress/customerAdressService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'CUSTOMERADRESS_VIEW';

const customerAdressViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: customerAdressViewActions.FIND_STARTED,
      });

      const record = await CustomerAdressService.find(id);

      dispatch({
        type: customerAdressViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: customerAdressViewActions.FIND_ERROR,
      });

      getHistory().push('/customer-adress');
    }
  },
};

export default customerAdressViewActions;
