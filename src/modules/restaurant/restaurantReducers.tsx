import list from 'src/modules/restaurant/list/restaurantListReducers';
import form from 'src/modules/restaurant/form/restaurantFormReducers';
import view from 'src/modules/restaurant/view/restaurantViewReducers';
import destroy from 'src/modules/restaurant/destroy/restaurantDestroyReducers';
import importerReducer from 'src/modules/restaurant/importer/restaurantImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
