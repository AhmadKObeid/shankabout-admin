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
import ordersEnumerators from 'src/modules/orders/ordersEnumerators';
import CustomerAutocompleteFormItem from 'src/view/customer/autocomplete/CustomerAutocompleteFormItem';
import DriverAutocompleteFormItem from 'src/view/driver/autocomplete/DriverAutocompleteFormItem';
import RestaurantAutocompleteFormItem from 'src/view/restaurant/autocomplete/RestaurantAutocompleteFormItem';

const schema = yup.object().shape({
  status: yupFormSchemas.stringArray(
    i18n('entities.orders.fields.status'),
    {
      "required": true,
      "options": ordersEnumerators.status
    },
  ),
  customer: yupFormSchemas.relationToOne(
    i18n('entities.orders.fields.customer'),
    {
      "required": true
    },
  ),
  driver: yupFormSchemas.relationToOne(
    i18n('entities.orders.fields.driver'),
    {},
  ),
  restaurant: yupFormSchemas.relationToOne(
    i18n('entities.orders.fields.restaurant'),
    {},
  ),
  location: yupFormSchemas.string(
    i18n('entities.orders.fields.location'),
    {
      "required": true
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.orders.fields.description'),
    {},
  ),
  totalCartPrice: yupFormSchemas.decimal(
    i18n('entities.orders.fields.totalCartPrice'),
    {},
  ),
  deliveryCost: yupFormSchemas.decimal(
    i18n('entities.orders.fields.deliveryCost'),
    {},
  ),
  appCollection: yupFormSchemas.decimal(
    i18n('entities.orders.fields.appCollection'),
    {},
  ),
});

function OrdersForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      status: record.status || [],
      customer: record.customer,
      driver: record.driver,
      restaurant: record.restaurant,
      location: record.location,
      description: record.description,
      totalCartPrice: record.totalCartPrice,
      deliveryCost: record.deliveryCost,
      appCollection: record.appCollection,
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
              <SelectFormItem
                name="status"
                label={i18n('entities.orders.fields.status')}
                options={ordersEnumerators.status.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.orders.enumerators.status.${value}`,
                    ),
                  }),
                )}
                required={true}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <CustomerAutocompleteFormItem  
                name="customer"
                label={i18n('entities.orders.fields.customer')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DriverAutocompleteFormItem  
                name="driver"
                label={i18n('entities.orders.fields.driver')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <RestaurantAutocompleteFormItem  
                name="restaurant"
                label={i18n('entities.orders.fields.restaurant')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="location"
                label={i18n('entities.orders.fields.location')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <TextAreaFormItem
                name="description"
                label={i18n('entities.orders.fields.description')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="totalCartPrice"
                label={i18n('entities.orders.fields.totalCartPrice')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="deliveryCost"
                label={i18n('entities.orders.fields.deliveryCost')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="appCollection"
                label={i18n('entities.orders.fields.appCollection')}  
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

export default OrdersForm;
