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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import restaurantEnumerators from 'src/modules/restaurant/restaurantEnumerators';
import ResturentCategoryAutocompleteFormItem from 'src/view/resturentCategory/autocomplete/ResturentCategoryAutocompleteFormItem';
import CityAutocompleteFormItem from 'src/view/city/autocomplete/CityAutocompleteFormItem';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.restaurant.fields.name'),
    {
      "required": true
    },
  ),
  status: yupFormSchemas.stringArray(
    i18n('entities.restaurant.fields.status'),
    {},
  ),
  category: yupFormSchemas.relationToOne(
    i18n('entities.restaurant.fields.category'),
    {},
  ),
  city: yupFormSchemas.relationToOne(
    i18n('entities.restaurant.fields.city'),
    {},
  ),
  address: yupFormSchemas.string(
    i18n('entities.restaurant.fields.address'),
    {
      "required": true
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.restaurant.fields.description'),
    {},
  ),
  googleMap: yupFormSchemas.string(
    i18n('entities.restaurant.fields.googleMap'),
    {
      "required": true
    },
  ),
  fees: yupFormSchemas.decimal(
    i18n('entities.restaurant.fields.fees'),
    {},
  ),
  maxFeesILS: yupFormSchemas.decimal(
    i18n('entities.restaurant.fields.maxFeesILS'),
    {},
  ),
  minFeesILS: yupFormSchemas.decimal(
    i18n('entities.restaurant.fields.minFeesILS'),
    {},
  ),
});

function RestaurantForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      status: record.status || [],
      category: record.category,
      city: record.city,
      address: record.address,
      description: record.description,
      googleMap: record.googleMap,
      fees: record.fees,
      maxFeesILS: record.maxFeesILS,
      minFeesILS: record.minFeesILS,
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
                label={i18n('entities.restaurant.fields.name')}  
                required={true}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="status"
                label={i18n('entities.restaurant.fields.status')}
                options={restaurantEnumerators.status.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.restaurant.enumerators.status.${value}`,
                    ),
                  }),
                )}
                required={false}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ResturentCategoryAutocompleteFormItem  
                name="category"
                label={i18n('entities.restaurant.fields.category')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <CityAutocompleteFormItem  
                name="city"
                label={i18n('entities.restaurant.fields.city')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="address"
                label={i18n('entities.restaurant.fields.address')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <TextAreaFormItem
                name="description"
                label={i18n('entities.restaurant.fields.description')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="googleMap"
                label={i18n('entities.restaurant.fields.googleMap')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="fees"
                label={i18n('entities.restaurant.fields.fees')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="maxFeesILS"
                label={i18n('entities.restaurant.fields.maxFeesILS')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="minFeesILS"
                label={i18n('entities.restaurant.fields.minFeesILS')}  
                required={false}
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

export default RestaurantForm;
