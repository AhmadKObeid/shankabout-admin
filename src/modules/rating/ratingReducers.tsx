import list from 'src/modules/rating/list/ratingListReducers';
import form from 'src/modules/rating/form/ratingFormReducers';
import view from 'src/modules/rating/view/ratingViewReducers';
import destroy from 'src/modules/rating/destroy/ratingDestroyReducers';
import importerReducer from 'src/modules/rating/importer/ratingImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
