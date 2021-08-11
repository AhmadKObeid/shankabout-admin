import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/offerPromotion/importer/offerPromotionImporterSelectors';
import OfferPromotionService from 'src/modules/offerPromotion/offerPromotionService';
import fields from 'src/modules/offerPromotion/importer/offerPromotionImporterFields';
import { i18n } from 'src/i18n';

const offerPromotionImporterActions = importerActions(
  'OFFERPROMOTION_IMPORTER',
  selectors,
  OfferPromotionService.import,
  fields,
  i18n('entities.offerPromotion.importer.fileName'),
);

export default offerPromotionImporterActions;