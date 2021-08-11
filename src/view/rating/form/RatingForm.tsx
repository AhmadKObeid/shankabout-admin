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
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import CustomerAutocompleteFormItem from 'src/view/customer/autocomplete/CustomerAutocompleteFormItem';
import DriverAutocompleteFormItem from 'src/view/driver/autocomplete/DriverAutocompleteFormItem';
import RestaurantAutocompleteFormItem from 'src/view/restaurant/autocomplete/RestaurantAutocompleteFormItem';

const schema = yup.object().shape({
  customer: yupFormSchemas.relationToOne(
    i18n('entities.rating.fields.customer'),
    {},
  ),
  driver: yupFormSchemas.relationToOne(
    i18n('entities.rating.fields.driver'),
    {},
  ),
  resturent: yupFormSchemas.relationToOne(
    i18n('entities.rating.fields.resturent'),
    {},
  ),
  from: yupFormSchemas.string(
    i18n('entities.rating.fields.from'),
    {
      "required": true
    },
  ),
  to: yupFormSchemas.string(
    i18n('entities.rating.fields.to'),
    {
      "required": true
    },
  ),
  value: yupFormSchemas.integer(
    i18n('entities.rating.fields.value'),
    {
      "required": true
    },
  ),
});

function RatingForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      customer: record.customer,
      driver: record.driver,
      resturent: record.resturent,
      from: record.from,
      to: record.to,
      value: record.value,
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
              <CustomerAutocompleteFormItem  
                name="customer"
                label={i18n('entities.rating.fields.customer')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DriverAutocompleteFormItem  
                name="driver"
                label={i18n('entities.rating.fields.driver')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <RestaurantAutocompleteFormItem  
                name="resturent"
                label={i18n('entities.rating.fields.resturent')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="from"
                label={i18n('entities.rating.fields.from')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="to"
                label={i18n('entities.rating.fields.to')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="value"
                label={i18n('entities.rating.fields.value')}  
                required={true}
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

export default RatingForm;
