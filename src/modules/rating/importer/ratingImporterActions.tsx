import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/rating/importer/ratingImporterSelectors';
import RatingService from 'src/modules/rating/ratingService';
import fields from 'src/modules/rating/importer/ratingImporterFields';
import { i18n } from 'src/i18n';

const ratingImporterActions = importerActions(
  'RATING_IMPORTER',
  selectors,
  RatingService.import,
  fields,
  i18n('entities.rating.importer.fileName'),
);

export default ratingImporterActions;