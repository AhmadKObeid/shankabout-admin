import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'status',
    label: i18n('entities.orders.fields.status'),
    schema: schemas.stringArray(
      i18n('entities.orders.fields.status'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'customer',
    label: i18n('entities.orders.fields.customer'),
    schema: schemas.relationToOne(
      i18n('entities.orders.fields.customer'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'driver',
    label: i18n('entities.orders.fields.driver'),
    schema: schemas.relationToOne(
      i18n('entities.orders.fields.driver'),
      {},
    ),
  },
  {
    name: 'restaurant',
    label: i18n('entities.orders.fields.restaurant'),
    schema: schemas.relationToOne(
      i18n('entities.orders.fields.restaurant'),
      {},
    ),
  },
  {
    name: 'location',
    label: i18n('entities.orders.fields.location'),
    schema: schemas.string(
      i18n('entities.orders.fields.location'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.orders.fields.description'),
    schema: schemas.string(
      i18n('entities.orders.fields.description'),
      {},
    ),
  },
  {
    name: 'totalCartPrice',
    label: i18n('entities.orders.fields.totalCartPrice'),
    schema: schemas.decimal(
      i18n('entities.orders.fields.totalCartPrice'),
      {},
    ),
  },
  {
    name: 'deliveryCost',
    label: i18n('entities.orders.fields.deliveryCost'),
    schema: schemas.decimal(
      i18n('entities.orders.fields.deliveryCost'),
      {},
    ),
  },
  {
    name: 'appCollection',
    label: i18n('entities.orders.fields.appCollection'),
    schema: schemas.decimal(
      i18n('entities.orders.fields.appCollection'),
      {},
    ),
  },
];