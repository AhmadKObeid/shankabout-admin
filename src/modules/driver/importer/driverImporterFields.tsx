import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'status',
    label: i18n('entities.driver.fields.status'),
    schema: schemas.stringArray(
      i18n('entities.driver.fields.status'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'fullName',
    label: i18n('entities.driver.fields.fullName'),
    schema: schemas.string(
      i18n('entities.driver.fields.fullName'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'username',
    label: i18n('entities.driver.fields.username'),
    schema: schemas.string(
      i18n('entities.driver.fields.username'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'password',
    label: i18n('entities.driver.fields.password'),
    schema: schemas.string(
      i18n('entities.driver.fields.password'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'currentLocation',
    label: i18n('entities.driver.fields.currentLocation'),
    schema: schemas.string(
      i18n('entities.driver.fields.currentLocation'),
      {},
    ),
  },
];