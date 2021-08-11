import list from 'src/modules/offerPromotion/list/offerPromotionListReducers';
import form from 'src/modules/offerPromotion/form/offerPromotionFormReducers';
import view from 'src/modules/offerPromotion/view/offerPromotionViewReducers';
import destroy from 'src/modules/offerPromotion/destroy/offerPromotionDestroyReducers';
import importerReducer from 'src/modules/offerPromotion/importer/offerPromotionImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
