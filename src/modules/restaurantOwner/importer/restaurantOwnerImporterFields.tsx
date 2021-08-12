import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'resturentId',
    label: i18n('entities.restaurantOwner.fields.resturentId'),
    schema: schemas.relationToOne(
      i18n('entities.restaurantOwner.fields.resturentId'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'username',
    label: i18n('entities.restaurantOwner.fields.username'),
    schema: schemas.string(
      i18n('entities.restaurantOwner.fields.username'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'password',
    label: i18n('entities.restaurantOwner.fields.password'),
    schema: schemas.string(
      i18n('entities.restaurantOwner.fields.password'),
      {
        "required": true
      },
    ),
  },
];