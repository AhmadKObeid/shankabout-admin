import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.resturantPromiton.fields.id'),
  },
  {
    name: 'resturant',
    label: i18n('entities.resturantPromiton.fields.resturant'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'offerSelected',
    label: i18n('entities.resturantPromiton.fields.offerSelected'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'endDate',
    label: i18n('entities.resturantPromiton.fields.endDate'),
  },
  {
    name: 'costForApp',
    label: i18n('entities.resturantPromiton.fields.costForApp'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.resturantPromiton.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.resturantPromiton.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
