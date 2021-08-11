import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/driver/importer/driverImporterSelectors';
import DriverService from 'src/modules/driver/driverService';
import fields from 'src/modules/driver/importer/driverImporterFields';
import { i18n } from 'src/i18n';

const driverImporterActions = importerActions(
  'DRIVER_IMPORTER',
  selectors,
  DriverService.import,
  fields,
  i18n('entities.driver.importer.fileName'),
);

export default driverImporterActions;