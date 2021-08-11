import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'resturant',
    label: i18n('entities.callDriver.fields.resturant'),
    schema: schemas.relationToOne(
      i18n('entities.callDriver.fields.resturant'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'status',
    label: i18n('entities.callDriver.fields.status'),
    schema: schemas.stringArray(
      i18n('entities.callDriver.fields.status'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'driver',
    label: i18n('entities.callDriver.fields.driver'),
    schema: schemas.relationToOne(
      i18n('entities.callDriver.fields.driver'),
      {},
    ),
  },
];