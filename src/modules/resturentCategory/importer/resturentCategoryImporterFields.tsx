import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.resturentCategory.fields.name'),
    schema: schemas.string(
      i18n('entities.resturentCategory.fields.name'),
      {
        "required": true
      },
    ),
  },
];