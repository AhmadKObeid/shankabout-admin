import list from 'src/modules/offersDeals/list/offersDealsListReducers';
import form from 'src/modules/offersDeals/form/offersDealsFormReducers';
import view from 'src/modules/offersDeals/view/offersDealsViewReducers';
import destroy from 'src/modules/offersDeals/destroy/offersDealsDestroyReducers';
import importerReducer from 'src/modules/offersDeals/importer/offersDealsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
