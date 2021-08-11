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

const schema = yup.object().shape({
  fullName: yupFormSchemas.string(
    i18n('entities.customer.fields.fullName'),
    {
      "required": true
    },
  ),
  phoneNumber: yupFormSchemas.string(
    i18n('entities.customer.fields.phoneNumber'),
    {
      "required": true
    },
  ),
  email: yupFormSchemas.string(
    i18n('entities.customer.fields.email'),
    {
      "required": true
    },
  ),
  socialId: yupFormSchemas.string(
    i18n('entities.customer.fields.socialId'),
    {},
  ),
  profileImage: yupFormSchemas.string(
    i18n('entities.customer.fields.profileImage'),
    {},
  ),
  city: yupFormSchemas.string(
    i18n('entities.customer.fields.city'),
    {},
  ),
  currentLocation: yupFormSchemas.string(
    i18n('entities.customer.fields.currentLocation'),
    {},
  ),
});

function CustomerForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      fullName: record.fullName,
      phoneNumber: record.phoneNumber,
      email: record.email,
      socialId: record.socialId,
      profileImage: record.profileImage,
      city: record.city,
      currentLocation: record.currentLocation,
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
                name="fullName"
                label={i18n('entities.customer.fields.fullName')}  
                required={true}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="phoneNumber"
                label={i18n('entities.customer.fields.phoneNumber')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="email"
                label={i18n('entities.customer.fields.email')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="socialId"
                label={i18n('entities.customer.fields.socialId')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="profileImage"
                label={i18n('entities.customer.fields.profileImage')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="city"
                label={i18n('entities.customer.fields.city')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="currentLocation"
                label={i18n('entities.customer.fields.currentLocation')}  
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

export default CustomerForm;
