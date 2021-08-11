import list from 'src/modules/restaurantOwner/list/restaurantOwnerListReducers';
import form from 'src/modules/restaurantOwner/form/restaurantOwnerFormReducers';
import view from 'src/modules/restaurantOwner/view/restaurantOwnerViewReducers';
import destroy from 'src/modules/restaurantOwner/destroy/restaurantOwnerDestroyReducers';
import importerReducer from 'src/modules/restaurantOwner/importer/restaurantOwnerImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
