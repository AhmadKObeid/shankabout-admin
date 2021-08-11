import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.restaurantOwner.fields.id'),
  },
  {
    name: 'resturentId',
    label: i18n('entities.restaurantOwner.fields.resturentId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'username',
    label: i18n('entities.restaurantOwner.fields.username'),
  },
  {
    name: 'password',
    label: i18n('entities.restaurantOwner.fields.password'),
  },
  {
    name: 'map',
    label: i18n('entities.restaurantOwner.fields.map'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.restaurantOwner.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.restaurantOwner.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
