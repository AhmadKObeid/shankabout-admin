import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.product.fields.name'),
    schema: schemas.string(
      i18n('entities.product.fields.name'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.product.fields.description'),
    schema: schemas.string(
      i18n('entities.product.fields.description'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'image',
    label: i18n('entities.product.fields.image'),
    schema: schemas.images(
      i18n('entities.product.fields.image'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'price',
    label: i18n('entities.product.fields.price'),
    schema: schemas.decimal(
      i18n('entities.product.fields.price'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'restaurant',
    label: i18n('entities.product.fields.restaurant'),
    schema: schemas.relationToOne(
      i18n('entities.product.fields.restaurant'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'category',
    label: i18n('entities.product.fields.category'),
    schema: schemas.relationToOne(
      i18n('entities.product.fields.category'),
      {
        "required": true
      },
    ),
  },
];