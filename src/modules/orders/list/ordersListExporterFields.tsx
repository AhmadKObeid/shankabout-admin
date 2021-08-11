import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.orders.fields.id'),
  },
  {
    name: 'status',
    label: i18n('entities.orders.fields.status'),
    render: exporterRenders.stringArray(),
  },
  {
    name: 'customer',
    label: i18n('entities.orders.fields.customer'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'driver',
    label: i18n('entities.orders.fields.driver'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'restaurant',
    label: i18n('entities.orders.fields.restaurant'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'location',
    label: i18n('entities.orders.fields.location'),
  },
  {
    name: 'description',
    label: i18n('entities.orders.fields.description'),
  },
  {
    name: 'totalCartPrice',
    label: i18n('entities.orders.fields.totalCartPrice'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'deliveryCost',
    label: i18n('entities.orders.fields.deliveryCost'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'appCollection',
    label: i18n('entities.orders.fields.appCollection'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.orders.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.orders.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
