import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/offersDeals/importer/offersDealsImporterSelectors';
import OffersDealsService from 'src/modules/offersDeals/offersDealsService';
import fields from 'src/modules/offersDeals/importer/offersDealsImporterFields';
import { i18n } from 'src/i18n';

const offersDealsImporterActions = importerActions(
  'OFFERSDEALS_IMPORTER',
  selectors,
  OffersDealsService.import,
  fields,
  i18n('entities.offersDeals.importer.fileName'),
);

export default offersDealsImporterActions;