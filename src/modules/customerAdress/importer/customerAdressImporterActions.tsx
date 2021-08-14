import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/customerAdress/importer/customerAdressImporterSelectors';
import CustomerAdressService from 'src/modules/customerAdress/customerAdressService';
import fields from 'src/modules/customerAdress/importer/customerAdressImporterFields';
import { i18n } from 'src/i18n';

const customerAdressImporterActions = importerActions(
  'CUSTOMERADRESS_IMPORTER',
  selectors,
  CustomerAdressService.import,
  fields,
  i18n('entities.customerAdress.importer.fileName'),
);

export default customerAdressImporterActions;