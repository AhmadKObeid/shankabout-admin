import OfferPromotionService from 'src/modules/offerPromotion/offerPromotionService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'OFFERPROMOTION_FORM';

const offerPromotionFormActions = {
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
        type: offerPromotionFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await OfferPromotionService.find(id);
      }

      dispatch({
        type: offerPromotionFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: offerPromotionFormActions.INIT_ERROR,
      });

      getHistory().push('/offer-promotion');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: offerPromotionFormActions.CREATE_STARTED,
      });

      await OfferPromotionService.create(values);

      dispatch({
        type: offerPromotionFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.offerPromotion.create.success'),
      );

      getHistory().push('/offer-promotion');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: offerPromotionFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: offerPromotionFormActions.UPDATE_STARTED,
      });

      await OfferPromotionService.update(id, values);

      dispatch({
        type: offerPromotionFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.offerPromotion.update.success'),
      );

      getHistory().push('/offer-promotion');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: offerPromotionFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default offerPromotionFormActions;
