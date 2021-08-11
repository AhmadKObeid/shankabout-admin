import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.offersDeals.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.offersDeals.fields.name'),
  },
  {
    name: 'days',
    label: i18n('entities.offersDeals.fields.days'),
  },
  {
    name: 'cost',
    label: i18n('entities.offersDeals.fields.cost'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.offersDeals.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.offersDeals.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
