import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'product',
    label: i18n('entities.deals.fields.product'),
    schema: schemas.relationToOne(
      i18n('entities.deals.fields.product'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'resturant',
    label: i18n('entities.deals.fields.resturant'),
    schema: schemas.relationToOne(
      i18n('entities.deals.fields.resturant'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'offer',
    label: i18n('entities.deals.fields.offer'),
    schema: schemas.relationToOne(
      i18n('entities.deals.fields.offer'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'endDate',
    label: i18n('entities.deals.fields.endDate'),
    schema: schemas.date(
      i18n('entities.deals.fields.endDate'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'costAfterDeal',
    label: i18n('entities.deals.fields.costAfterDeal'),
    schema: schemas.decimal(
      i18n('entities.deals.fields.costAfterDeal'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'costForApp',
    label: i18n('entities.deals.fields.costForApp'),
    schema: schemas.decimal(
      i18n('entities.deals.fields.costForApp'),
      {
        "required": true
      },
    ),
  },
];