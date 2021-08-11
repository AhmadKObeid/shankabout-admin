import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'title',
    label: i18n('entities.offerPromotion.fields.title'),
    schema: schemas.string(
      i18n('entities.offerPromotion.fields.title'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'day',
    label: i18n('entities.offerPromotion.fields.day'),
    schema: schemas.integer(
      i18n('entities.offerPromotion.fields.day'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'cost',
    label: i18n('entities.offerPromotion.fields.cost'),
    schema: schemas.decimal(
      i18n('entities.offerPromotion.fields.cost'),
      {
        "required": true
      },
    ),
  },
];