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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import callDriverEnumerators from 'src/modules/callDriver/callDriverEnumerators';
import RestaurantAutocompleteFormItem from 'src/view/restaurant/autocomplete/RestaurantAutocompleteFormItem';
import DriverAutocompleteFormItem from 'src/view/driver/autocomplete/DriverAutocompleteFormItem';

const schema = yup.object().shape({
  resturant: yupFormSchemas.relationToOne(
    i18n('entities.callDriver.fields.resturant'),
    {
      "required": true
    },
  ),
  status: yupFormSchemas.stringArray(
    i18n('entities.callDriver.fields.status'),
    {
      "required": true,
      "options": callDriverEnumerators.status
    },
  ),
  driver: yupFormSchemas.relationToOne(
    i18n('entities.callDriver.fields.driver'),
    {},
  ),
});

function CallDriverForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      resturant: record.resturant,
      status: record.status || [],
      driver: record.driver,
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
              <RestaurantAutocompleteFormItem  
                name="resturant"
                label={i18n('entities.callDriver.fields.resturant')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="status"
                label={i18n('entities.callDriver.fields.status')}
                options={callDriverEnumerators.status.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.callDriver.enumerators.status.${value}`,
                    ),
                  }),
                )}
                required={true}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DriverAutocompleteFormItem  
                name="driver"
                label={i18n('entities.callDriver.fields.driver')}
                required={false}
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

export default CallDriverForm;
