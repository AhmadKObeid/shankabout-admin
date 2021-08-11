import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.cart.fields.id'),
  },
  {
    name: 'product',
    label: i18n('entities.cart.fields.product'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'quantity',
    label: i18n('entities.cart.fields.quantity'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'customer',
    label: i18n('entities.cart.fields.customer'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'orders',
    label: i18n('entities.cart.fields.orders'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.cart.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.cart.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
