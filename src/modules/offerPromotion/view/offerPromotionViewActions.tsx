import OfferPromotionService from 'src/modules/offerPromotion/offerPromotionService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'OFFERPROMOTION_VIEW';

const offerPromotionViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: offerPromotionViewActions.FIND_STARTED,
      });

      const record = await OfferPromotionService.find(id);

      dispatch({
        type: offerPromotionViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: offerPromotionViewActions.FIND_ERROR,
      });

      getHistory().push('/offer-promotion');
    }
  },
};

export default offerPromotionViewActions;
