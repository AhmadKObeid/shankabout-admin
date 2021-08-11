import list from 'src/modules/orders/list/ordersListReducers';
import form from 'src/modules/orders/form/ordersFormReducers';
import view from 'src/modules/orders/view/ordersViewReducers';
import destroy from 'src/modules/orders/destroy/ordersDestroyReducers';
import importerReducer from 'src/modules/orders/importer/ordersImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
