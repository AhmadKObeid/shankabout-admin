import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'resturant',
    label: i18n('entities.resturantPromiton.fields.resturant'),
    schema: schemas.relationToOne(
      i18n('entities.resturantPromiton.fields.resturant'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'offerSelected',
    label: i18n('entities.resturantPromiton.fields.offerSelected'),
    schema: schemas.relationToOne(
      i18n('entities.resturantPromiton.fields.offerSelected'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'endDate',
    label: i18n('entities.resturantPromiton.fields.endDate'),
    schema: schemas.date(
      i18n('entities.resturantPromiton.fields.endDate'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'costForApp',
    label: i18n('entities.resturantPromiton.fields.costForApp'),
    schema: schemas.decimal(
      i18n('entities.resturantPromiton.fields.costForApp'),
      {
        "required": true
      },
    ),
  },
];