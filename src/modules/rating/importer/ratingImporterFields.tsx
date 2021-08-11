import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'customer',
    label: i18n('entities.rating.fields.customer'),
    schema: schemas.relationToOne(
      i18n('entities.rating.fields.customer'),
      {},
    ),
  },
  {
    name: 'driver',
    label: i18n('entities.rating.fields.driver'),
    schema: schemas.relationToOne(
      i18n('entities.rating.fields.driver'),
      {},
    ),
  },
  {
    name: 'resturent',
    label: i18n('entities.rating.fields.resturent'),
    schema: schemas.relationToOne(
      i18n('entities.rating.fields.resturent'),
      {},
    ),
  },
  {
    name: 'from',
    label: i18n('entities.rating.fields.from'),
    schema: schemas.string(
      i18n('entities.rating.fields.from'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'to',
    label: i18n('entities.rating.fields.to'),
    schema: schemas.string(
      i18n('entities.rating.fields.to'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'value',
    label: i18n('entities.rating.fields.value'),
    schema: schemas.integer(
      i18n('entities.rating.fields.value'),
      {
        "required": true
      },
    ),
  },
];