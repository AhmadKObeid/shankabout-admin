import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.product.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.product.fields.name'),
  },
  {
    name: 'description',
    label: i18n('entities.product.fields.description'),
  },
  {
    name: 'image',
    label: i18n('entities.product.fields.image'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'price',
    label: i18n('entities.product.fields.price'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'restaurant',
    label: i18n('entities.product.fields.restaurant'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'category',
    label: i18n('entities.product.fields.category'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.product.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.product.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
