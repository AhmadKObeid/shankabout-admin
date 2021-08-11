import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/orders/importer/ordersImporterSelectors';
import OrdersService from 'src/modules/orders/ordersService';
import fields from 'src/modules/orders/importer/ordersImporterFields';
import { i18n } from 'src/i18n';

const ordersImporterActions = importerActions(
  'ORDERS_IMPORTER',
  selectors,
  OrdersService.import,
  fields,
  i18n('entities.orders.importer.fileName'),
);

export default ordersImporterActions;