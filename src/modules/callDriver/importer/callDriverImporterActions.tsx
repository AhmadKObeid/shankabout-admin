import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/callDriver/importer/callDriverImporterSelectors';
import CallDriverService from 'src/modules/callDriver/callDriverService';
import fields from 'src/modules/callDriver/importer/callDriverImporterFields';
import { i18n } from 'src/i18n';

const callDriverImporterActions = importerActions(
  'CALLDRIVER_IMPORTER',
  selectors,
  CallDriverService.import,
  fields,
  i18n('entities.callDriver.importer.fileName'),
);

export default callDriverImporterActions;