import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.driver.fields.id'),
  },
  {
    name: 'status',
    label: i18n('entities.driver.fields.status'),
    render: exporterRenders.stringArray(),
  },
  {
    name: 'fullName',
    label: i18n('entities.driver.fields.fullName'),
  },
  {
    name: 'username',
    label: i18n('entities.driver.fields.username'),
  },
  {
    name: 'password',
    label: i18n('entities.driver.fields.password'),
  },
  {
    name: 'currentLocation',
    label: i18n('entities.driver.fields.currentLocation'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.driver.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.driver.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
