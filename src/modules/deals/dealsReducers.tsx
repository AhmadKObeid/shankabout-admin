import list from 'src/modules/deals/list/dealsListReducers';
import form from 'src/modules/deals/form/dealsFormReducers';
import view from 'src/modules/deals/view/dealsViewReducers';
import destroy from 'src/modules/deals/destroy/dealsDestroyReducers';
import importerReducer from 'src/modules/deals/importer/dealsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
