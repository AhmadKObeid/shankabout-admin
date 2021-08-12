import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'fullName',
    label: i18n('entities.customer.fields.fullName'),
    schema: schemas.string(
      i18n('entities.customer.fields.fullName'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'phoneNumber',
    label: i18n('entities.customer.fields.phoneNumber'),
    schema: schemas.string(
      i18n('entities.customer.fields.phoneNumber'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'email',
    label: i18n('entities.customer.fields.email'),
    schema: schemas.string(
      i18n('entities.customer.fields.email'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'socialType',
    label: i18n('entities.customer.fields.socialType'),
    schema: schemas.string(
      i18n('entities.customer.fields.socialType'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'socialId',
    label: i18n('entities.customer.fields.socialId'),
    schema: schemas.string(
      i18n('entities.customer.fields.socialId'),
      {},
    ),
  },
  {
    name: 'profileImage',
    label: i18n('entities.customer.fields.profileImage'),
    schema: schemas.string(
      i18n('entities.customer.fields.profileImage'),
      {},
    ),
  },
  {
    name: 'city',
    label: i18n('entities.customer.fields.city'),
    schema: schemas.string(
      i18n('entities.customer.fields.city'),
      {},
    ),
  },
  {
    name: 'currentLocation',
    label: i18n('entities.customer.fields.currentLocation'),
    schema: schemas.string(
      i18n('entities.customer.fields.currentLocation'),
      {},
    ),
  },
];