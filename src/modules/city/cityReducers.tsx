import list from 'src/modules/city/list/cityListReducers';
import form from 'src/modules/city/form/cityFormReducers';
import view from 'src/modules/city/view/cityViewReducers';
import destroy from 'src/modules/city/destroy/cityDestroyReducers';
import importerReducer from 'src/modules/city/importer/cityImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
