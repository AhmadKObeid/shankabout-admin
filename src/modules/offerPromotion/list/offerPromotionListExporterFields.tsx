import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.offerPromotion.fields.id'),
  },
  {
    name: 'title',
    label: i18n('entities.offerPromotion.fields.title'),
  },
  {
    name: 'day',
    label: i18n('entities.offerPromotion.fields.day'),
  },
  {
    name: 'cost',
    label: i18n('entities.offerPromotion.fields.cost'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.offerPromotion.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.offerPromotion.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
