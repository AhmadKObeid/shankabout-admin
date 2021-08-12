import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.city.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.city.fields.name'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.city.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.city.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
