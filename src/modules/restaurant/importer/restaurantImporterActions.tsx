import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/restaurant/importer/restaurantImporterSelectors';
import RestaurantService from 'src/modules/restaurant/restaurantService';
import fields from 'src/modules/restaurant/importer/restaurantImporterFields';
import { i18n } from 'src/i18n';

const restaurantImporterActions = importerActions(
  'RESTAURANT_IMPORTER',
  selectors,
  RestaurantService.import,
  fields,
  i18n('entities.restaurant.importer.fileName'),
);

export default restaurantImporterActions;