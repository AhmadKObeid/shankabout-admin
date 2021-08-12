import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/city/importer/cityImporterSelectors';
import CityService from 'src/modules/city/cityService';
import fields from 'src/modules/city/importer/cityImporterFields';
import { i18n } from 'src/i18n';

const cityImporterActions = importerActions(
  'CITY_IMPORTER',
  selectors,
  CityService.import,
  fields,
  i18n('entities.city.importer.fileName'),
);

export default cityImporterActions;