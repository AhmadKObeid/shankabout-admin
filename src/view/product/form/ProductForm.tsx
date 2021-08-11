import { Button, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  FormButtons,
} from 'src/view/shared/styles/FormWrapper';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import RestaurantAutocompleteFormItem from 'src/view/restaurant/autocomplete/RestaurantAutocompleteFormItem';
import ProductCategoryAutocompleteFormItem from 'src/view/productCategory/autocomplete/ProductCategoryAutocompleteFormItem';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.product.fields.name'),
    {
      "required": true
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.product.fields.description'),
    {
      "required": true
    },
  ),
  image: yupFormSchemas.images(
    i18n('entities.product.fields.image'),
    {
      "required": true
    },
  ),
  price: yupFormSchemas.decimal(
    i18n('entities.product.fields.price'),
    {
      "required": true
    },
  ),
  restaurant: yupFormSchemas.relationToOne(
    i18n('entities.product.fields.restaurant'),
    {
      "required": true
    },
  ),
  category: yupFormSchemas.relationToOne(
    i18n('entities.product.fields.category'),
    {
      "required": true
    },
  ),
});

function ProductForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      description: record.description,
      image: record.image || [],
      price: record.price,
      restaurant: record.restaurant,
      category: record.category,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const { saveLoading, modal } = props;

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Grid spacing={2} container>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="name"
                label={i18n('entities.product.fields.name')}  
                required={true}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <TextAreaFormItem
                name="description"
                label={i18n('entities.product.fields.description')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ImagesFormItem
                name="image"
                label={i18n('entities.product.fields.image')}
                required={true}
                storage={Storage.values.productImage}
                max={undefined}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="price"
                label={i18n('entities.product.fields.price')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <RestaurantAutocompleteFormItem  
                name="restaurant"
                label={i18n('entities.product.fields.restaurant')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ProductCategoryAutocompleteFormItem  
                name="category"
                label={i18n('entities.product.fields.category')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
          </Grid>
          <FormButtons
            style={{
              flexDirection: modal
                ? 'row-reverse'
                : undefined,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              disabled={saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
              startIcon={<SaveIcon />}
              size="small"
            >
              {i18n('common.save')}
            </Button>

            <Button
              disabled={saveLoading}
              onClick={onReset}
              type="button"
              startIcon={<UndoIcon />}
              size="small"
            >
              {i18n('common.reset')}
            </Button>

            {props.onCancel ? (
              <Button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                type="button"
                startIcon={<CloseIcon />}
                size="small"
              >
                {i18n('common.cancel')}
              </Button>
            ) : null}
          </FormButtons>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default ProductForm;
