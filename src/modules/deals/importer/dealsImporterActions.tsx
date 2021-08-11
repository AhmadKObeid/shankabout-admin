import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/deals/importer/dealsImporterSelectors';
import DealsService from 'src/modules/deals/dealsService';
import fields from 'src/modules/deals/importer/dealsImporterFields';
import { i18n } from 'src/i18n';

const dealsImporterActions = importerActions(
  'DEALS_IMPORTER',
  selectors,
  DealsService.import,
  fields,
  i18n('entities.deals.importer.fileName'),
);

export default dealsImporterActions;