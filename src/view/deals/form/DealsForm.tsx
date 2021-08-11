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
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import ProductAutocompleteFormItem from 'src/view/product/autocomplete/ProductAutocompleteFormItem';
import RestaurantAutocompleteFormItem from 'src/view/restaurant/autocomplete/RestaurantAutocompleteFormItem';
import OffersDealsAutocompleteFormItem from 'src/view/offersDeals/autocomplete/OffersDealsAutocompleteFormItem';

const schema = yup.object().shape({
  product: yupFormSchemas.relationToOne(
    i18n('entities.deals.fields.product'),
    {
      "required": true
    },
  ),
  resturant: yupFormSchemas.relationToOne(
    i18n('entities.deals.fields.resturant'),
    {
      "required": true
    },
  ),
  offer: yupFormSchemas.relationToOne(
    i18n('entities.deals.fields.offer'),
    {
      "required": true
    },
  ),
  endDate: yupFormSchemas.date(
    i18n('entities.deals.fields.endDate'),
    {
      "required": true
    },
  ),
  costAfterDeal: yupFormSchemas.decimal(
    i18n('entities.deals.fields.costAfterDeal'),
    {
      "required": true
    },
  ),
  costForApp: yupFormSchemas.decimal(
    i18n('entities.deals.fields.costForApp'),
    {
      "required": true
    },
  ),
});

function DealsForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      product: record.product,
      resturant: record.resturant,
      offer: record.offer,
      endDate: record.endDate ? moment(record.endDate, 'YYYY-MM-DD') : null,
      costAfterDeal: record.costAfterDeal,
      costForApp: record.costForApp,
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
              <ProductAutocompleteFormItem  
                name="product"
                label={i18n('entities.deals.fields.product')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <RestaurantAutocompleteFormItem  
                name="resturant"
                label={i18n('entities.deals.fields.resturant')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <OffersDealsAutocompleteFormItem  
                name="offer"
                label={i18n('entities.deals.fields.offer')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="endDate"
                label={i18n('entities.deals.fields.endDate')}
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="costAfterDeal"
                label={i18n('entities.deals.fields.costAfterDeal')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="costForApp"
                label={i18n('entities.deals.fields.costForApp')}  
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

export default DealsForm;
