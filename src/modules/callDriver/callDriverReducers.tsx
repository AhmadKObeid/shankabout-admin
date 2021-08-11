import list from 'src/modules/callDriver/list/callDriverListReducers';
import form from 'src/modules/callDriver/form/callDriverFormReducers';
import view from 'src/modules/callDriver/view/callDriverViewReducers';
import destroy from 'src/modules/callDriver/destroy/callDriverDestroyReducers';
import importerReducer from 'src/modules/callDriver/importer/callDriverImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
