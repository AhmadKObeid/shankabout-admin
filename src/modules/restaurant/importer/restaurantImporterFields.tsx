import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.restaurant.fields.name'),
    schema: schemas.string(
      i18n('entities.restaurant.fields.name'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'status',
    label: i18n('entities.restaurant.fields.status'),
    schema: schemas.stringArray(
      i18n('entities.restaurant.fields.status'),
      {},
    ),
  },
  {
    name: 'category',
    label: i18n('entities.restaurant.fields.category'),
    schema: schemas.relationToOne(
      i18n('entities.restaurant.fields.category'),
      {},
    ),
  },
  {
    name: 'city',
    label: i18n('entities.restaurant.fields.city'),
    schema: schemas.relationToOne(
      i18n('entities.restaurant.fields.city'),
      {},
    ),
  },
  {
    name: 'address',
    label: i18n('entities.restaurant.fields.address'),
    schema: schemas.string(
      i18n('entities.restaurant.fields.address'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.restaurant.fields.description'),
    schema: schemas.string(
      i18n('entities.restaurant.fields.description'),
      {},
    ),
  },
  {
    name: 'googleMap',
    label: i18n('entities.restaurant.fields.googleMap'),
    schema: schemas.string(
      i18n('entities.restaurant.fields.googleMap'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'fees',
    label: i18n('entities.restaurant.fields.fees'),
    schema: schemas.decimal(
      i18n('entities.restaurant.fields.fees'),
      {},
    ),
  },
  {
    name: 'maxFeesILS',
    label: i18n('entities.restaurant.fields.maxFeesILS'),
    schema: schemas.decimal(
      i18n('entities.restaurant.fields.maxFeesILS'),
      {},
    ),
  },
  {
    name: 'minFeesILS',
    label: i18n('entities.restaurant.fields.minFeesILS'),
    schema: schemas.decimal(
      i18n('entities.restaurant.fields.minFeesILS'),
      {},
    ),
  },
];