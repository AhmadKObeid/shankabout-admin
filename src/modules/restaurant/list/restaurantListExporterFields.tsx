import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.restaurant.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.restaurant.fields.name'),
  },
  {
    name: 'status',
    label: i18n('entities.restaurant.fields.status'),
    render: exporterRenders.stringArray(),
  },
  {
    name: 'category',
    label: i18n('entities.restaurant.fields.category'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'city',
    label: i18n('entities.restaurant.fields.city'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'address',
    label: i18n('entities.restaurant.fields.address'),
  },
  {
    name: 'description',
    label: i18n('entities.restaurant.fields.description'),
  },
  {
    name: 'googleMap',
    label: i18n('entities.restaurant.fields.googleMap'),
  },
  {
    name: 'fees',
    label: i18n('entities.restaurant.fields.fees'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'maxFeesILS',
    label: i18n('entities.restaurant.fields.maxFeesILS'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'minFeesILS',
    label: i18n('entities.restaurant.fields.minFeesILS'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.restaurant.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.restaurant.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
