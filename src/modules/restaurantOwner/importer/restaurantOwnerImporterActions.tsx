import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/restaurantOwner/importer/restaurantOwnerImporterSelectors';
import RestaurantOwnerService from 'src/modules/restaurantOwner/restaurantOwnerService';
import fields from 'src/modules/restaurantOwner/importer/restaurantOwnerImporterFields';
import { i18n } from 'src/i18n';

const restaurantOwnerImporterActions = importerActions(
  'RESTAURANTOWNER_IMPORTER',
  selectors,
  RestaurantOwnerService.import,
  fields,
  i18n('entities.restaurantOwner.importer.fileName'),
);

export default restaurantOwnerImporterActions;