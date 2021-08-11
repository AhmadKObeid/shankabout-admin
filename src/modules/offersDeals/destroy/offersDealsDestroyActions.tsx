import listActions from 'src/modules/offersDeals/list/offersDealsListActions';
import OffersDealsService from 'src/modules/offersDeals/offersDealsService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'OFFERSDEALS_DESTROY';

const offersDealsDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: offersDealsDestroyActions.DESTROY_STARTED,
      });

      await OffersDealsService.destroyAll([id]);

      dispatch({
        type: offersDealsDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.offersDeals.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/offers-deals');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: offersDealsDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: offersDealsDestroyActions.DESTROY_ALL_STARTED,
      });

      await OffersDealsService.destroyAll(ids);

      dispatch({
        type: offersDealsDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.offersDeals.destroyAll.success'),
      );

      getHistory().push('/offers-deals');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: offersDealsDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default offersDealsDestroyActions;
