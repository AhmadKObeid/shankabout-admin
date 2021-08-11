import listActions from 'src/modules/offerPromotion/list/offerPromotionListActions';
import OfferPromotionService from 'src/modules/offerPromotion/offerPromotionService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'OFFERPROMOTION_DESTROY';

const offerPromotionDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: offerPromotionDestroyActions.DESTROY_STARTED,
      });

      await OfferPromotionService.destroyAll([id]);

      dispatch({
        type: offerPromotionDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.offerPromotion.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/offer-promotion');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: offerPromotionDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: offerPromotionDestroyActions.DESTROY_ALL_STARTED,
      });

      await OfferPromotionService.destroyAll(ids);

      dispatch({
        type: offerPromotionDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.offerPromotion.destroyAll.success'),
      );

      getHistory().push('/offer-promotion');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: offerPromotionDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default offerPromotionDestroyActions;
