import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.customer.fields.id'),
  },
  {
    name: 'fullName',
    label: i18n('entities.customer.fields.fullName'),
  },
  {
    name: 'phoneNumber',
    label: i18n('entities.customer.fields.phoneNumber'),
  },
  {
    name: 'email',
    label: i18n('entities.customer.fields.email'),
  },
  {
    name: 'socialType',
    label: i18n('entities.customer.fields.socialType'),
  },
  {
    name: 'socialId',
    label: i18n('entities.customer.fields.socialId'),
  },
  {
    name: 'profileImage',
    label: i18n('entities.customer.fields.profileImage'),
  },
  {
    name: 'city',
    label: i18n('entities.customer.fields.city'),
  },
  {
    name: 'currentLocation',
    label: i18n('entities.customer.fields.currentLocation'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.customer.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.customer.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
