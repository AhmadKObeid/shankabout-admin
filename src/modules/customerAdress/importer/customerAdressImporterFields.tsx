import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'customer',
    label: i18n('entities.customerAdress.fields.customer'),
    schema: schemas.relationToOne(
      i18n('entities.customerAdress.fields.customer'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'name',
    label: i18n('entities.customerAdress.fields.name'),
    schema: schemas.string(
      i18n('entities.customerAdress.fields.name'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'locationObject',
    label: i18n('entities.customerAdress.fields.locationObject'),
    schema: schemas.string(
      i18n('entities.customerAdress.fields.locationObject'),
      {
        "required": true
      },
    ),
  },
];