import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/resturentCategory/importer/resturentCategoryImporterSelectors';
import ResturentCategoryService from 'src/modules/resturentCategory/resturentCategoryService';
import fields from 'src/modules/resturentCategory/importer/resturentCategoryImporterFields';
import { i18n } from 'src/i18n';

const resturentCategoryImporterActions = importerActions(
  'RESTURENTCATEGORY_IMPORTER',
  selectors,
  ResturentCategoryService.import,
  fields,
  i18n('entities.resturentCategory.importer.fileName'),
);

export default resturentCategoryImporterActions;