import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.offersDeals.fields.name'),
    schema: schemas.string(
      i18n('entities.offersDeals.fields.name'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'days',
    label: i18n('entities.offersDeals.fields.days'),
    schema: schemas.integer(
      i18n('entities.offersDeals.fields.days'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'cost',
    label: i18n('entities.offersDeals.fields.cost'),
    schema: schemas.decimal(
      i18n('entities.offersDeals.fields.cost'),
      {
        "required": true
      },
    ),
  },
];