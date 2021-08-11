import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.rating.fields.id'),
  },
  {
    name: 'customer',
    label: i18n('entities.rating.fields.customer'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'driver',
    label: i18n('entities.rating.fields.driver'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'resturent',
    label: i18n('entities.rating.fields.resturent'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'from',
    label: i18n('entities.rating.fields.from'),
  },
  {
    name: 'to',
    label: i18n('entities.rating.fields.to'),
  },
  {
    name: 'value',
    label: i18n('entities.rating.fields.value'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.rating.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.rating.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
