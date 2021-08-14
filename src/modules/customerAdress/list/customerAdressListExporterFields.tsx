import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.customerAdress.fields.id'),
  },
  {
    name: 'customer',
    label: i18n('entities.customerAdress.fields.customer'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'name',
    label: i18n('entities.customerAdress.fields.name'),
  },
  {
    name: 'locationObject',
    label: i18n('entities.customerAdress.fields.locationObject'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.customerAdress.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.customerAdress.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
