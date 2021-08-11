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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import driverEnumerators from 'src/modules/driver/driverEnumerators';

const schema = yup.object().shape({
  status: yupFormSchemas.stringArray(
    i18n('entities.driver.fields.status'),
    {
      "required": true,
      "options": driverEnumerators.status
    },
  ),
  fullName: yupFormSchemas.string(
    i18n('entities.driver.fields.fullName'),
    {
      "required": true
    },
  ),
  username: yupFormSchemas.string(
    i18n('entities.driver.fields.username'),
    {
      "required": true
    },
  ),
  password: yupFormSchemas.string(
    i18n('entities.driver.fields.password'),
    {
      "required": true
    },
  ),
  currentLocation: yupFormSchemas.string(
    i18n('entities.driver.fields.currentLocation'),
    {},
  ),
});

function DriverForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      status: record.status || [],
      fullName: record.fullName,
      username: record.username,
      password: record.password,
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
              <SelectFormItem
                name="status"
                label={i18n('entities.driver.fields.status')}
                options={driverEnumerators.status.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.driver.enumerators.status.${value}`,
                    ),
                  }),
                )}
                required={true}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="fullName"
                label={i18n('entities.driver.fields.fullName')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="username"
                label={i18n('entities.driver.fields.username')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="password"
                label={i18n('entities.driver.fields.password')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="currentLocation"
                label={i18n('entities.driver.fields.currentLocation')}  
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

export default DriverForm;
