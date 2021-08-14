import list from 'src/modules/customerAdress/list/customerAdressListReducers';
import form from 'src/modules/customerAdress/form/customerAdressFormReducers';
import view from 'src/modules/customerAdress/view/customerAdressViewReducers';
import destroy from 'src/modules/customerAdress/destroy/customerAdressDestroyReducers';
import importerReducer from 'src/modules/customerAdress/importer/customerAdressImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
