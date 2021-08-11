import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.callDriver.fields.id'),
  },
  {
    name: 'resturant',
    label: i18n('entities.callDriver.fields.resturant'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'status',
    label: i18n('entities.callDriver.fields.status'),
    render: exporterRenders.stringArray(),
  },
  {
    name: 'driver',
    label: i18n('entities.callDriver.fields.driver'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.callDriver.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.callDriver.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
