import list from 'src/modules/resturentCategory/list/resturentCategoryListReducers';
import form from 'src/modules/resturentCategory/form/resturentCategoryFormReducers';
import view from 'src/modules/resturentCategory/view/resturentCategoryViewReducers';
import destroy from 'src/modules/resturentCategory/destroy/resturentCategoryDestroyReducers';
import importerReducer from 'src/modules/resturentCategory/importer/resturentCategoryImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
