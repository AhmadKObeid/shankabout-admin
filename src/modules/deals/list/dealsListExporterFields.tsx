import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.deals.fields.id'),
  },
  {
    name: 'product',
    label: i18n('entities.deals.fields.product'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'resturant',
    label: i18n('entities.deals.fields.resturant'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'offer',
    label: i18n('entities.deals.fields.offer'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'endDate',
    label: i18n('entities.deals.fields.endDate'),
  },
  {
    name: 'costAfterDeal',
    label: i18n('entities.deals.fields.costAfterDeal'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'costForApp',
    label: i18n('entities.deals.fields.costForApp'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.deals.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.deals.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
