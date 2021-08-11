import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/resturantPromiton/importer/resturantPromitonImporterSelectors';
import ResturantPromitonService from 'src/modules/resturantPromiton/resturantPromitonService';
import fields from 'src/modules/resturantPromiton/importer/resturantPromitonImporterFields';
import { i18n } from 'src/i18n';

const resturantPromitonImporterActions = importerActions(
  'RESTURANTPROMITON_IMPORTER',
  selectors,
  ResturantPromitonService.import,
  fields,
  i18n('entities.resturantPromiton.importer.fileName'),
);

export default resturantPromitonImporterActions;