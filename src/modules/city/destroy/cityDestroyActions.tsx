import listActions from 'src/modules/city/list/cityListActions';
import CityService from 'src/modules/city/cityService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'CITY_DESTROY';

const cityDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: cityDestroyActions.DESTROY_STARTED,
      });

      await CityService.destroyAll([id]);

      dispatch({
        type: cityDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.city.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/city');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: cityDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: cityDestroyActions.DESTROY_ALL_STARTED,
      });

      await CityService.destroyAll(ids);

      dispatch({
        type: cityDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.city.destroyAll.success'),
      );

      getHistory().push('/city');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: cityDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default cityDestroyActions;
