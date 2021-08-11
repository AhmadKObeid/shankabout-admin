import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'product',
    label: i18n('entities.cart.fields.product'),
    schema: schemas.relationToOne(
      i18n('entities.cart.fields.product'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'quantity',
    label: i18n('entities.cart.fields.quantity'),
    schema: schemas.decimal(
      i18n('entities.cart.fields.quantity'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'customer',
    label: i18n('entities.cart.fields.customer'),
    schema: schemas.relationToOne(
      i18n('entities.cart.fields.customer'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'orders',
    label: i18n('entities.cart.fields.orders'),
    schema: schemas.relationToOne(
      i18n('entities.cart.fields.orders'),
      {},
    ),
  },
];