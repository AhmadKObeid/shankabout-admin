import list from 'src/modules/driver/list/driverListReducers';
import form from 'src/modules/driver/form/driverFormReducers';
import view from 'src/modules/driver/view/driverViewReducers';
import destroy from 'src/modules/driver/destroy/driverDestroyReducers';
import importerReducer from 'src/modules/driver/importer/driverImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
