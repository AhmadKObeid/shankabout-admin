import list from 'src/modules/resturantPromiton/list/resturantPromitonListReducers';
import form from 'src/modules/resturantPromiton/form/resturantPromitonFormReducers';
import view from 'src/modules/resturantPromiton/view/resturantPromitonViewReducers';
import destroy from 'src/modules/resturantPromiton/destroy/resturantPromitonDestroyReducers';
import importerReducer from 'src/modules/resturantPromiton/importer/resturantPromitonImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
