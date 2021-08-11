import {
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/orders/list/ordersListActions';
import selectors from 'src/modules/orders/list/ordersListSelectors';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import FilterWrapper, {
  FilterButtons,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import FilterAccordion from 'src/view/shared/filter/FilterAccordion';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import ordersEnumerators from 'src/modules/orders/ordersEnumerators';
import CustomerAutocompleteFormItem from 'src/view/customer/autocomplete/CustomerAutocompleteFormItem';
import DriverAutocompleteFormItem from 'src/view/driver/autocomplete/DriverAutocompleteFormItem';
import RestaurantAutocompleteFormItem from 'src/view/restaurant/autocomplete/RestaurantAutocompleteFormItem';

const schema = yup.object().shape({
  status: yupFilterSchemas.stringArray(
    i18n('entities.orders.fields.status'),
  ),
  customer: yupFilterSchemas.relationToOne(
    i18n('entities.orders.fields.customer'),
  ),
  driver: yupFilterSchemas.relationToOne(
    i18n('entities.orders.fields.driver'),
  ),
  restaurant: yupFilterSchemas.relationToOne(
    i18n('entities.orders.fields.restaurant'),
  ),
  location: yupFilterSchemas.string(
    i18n('entities.orders.fields.location'),
  ),
  description: yupFilterSchemas.string(
    i18n('entities.orders.fields.description'),
  ),
  totalCartPriceRange: yupFilterSchemas.decimalRange(
    i18n('entities.orders.fields.totalCartPriceRange'),
  ),
  deliveryCostRange: yupFilterSchemas.decimalRange(
    i18n('entities.orders.fields.deliveryCostRange'),
  ),
  appCollectionRange: yupFilterSchemas.decimalRange(
    i18n('entities.orders.fields.appCollectionRange'),
  ),
});

const emptyValues = {
  status: [],
  customer: null,
  driver: null,
  restaurant: null,
  location: null,
  description: null,
  totalCartPriceRange: [],
  deliveryCostRange: [],
  appCollectionRange: [],
}

const previewRenders = {
  status: {
    label: i18n('entities.orders.fields.status'),
    render: filterRenders.enumeratorMultiple('entities.orders.enumerators.status',),
  },
  customer: {
      label: i18n('entities.orders.fields.customer'),
      render: filterRenders.relationToOne(),
    },
  driver: {
      label: i18n('entities.orders.fields.driver'),
      render: filterRenders.relationToOne(),
    },
  restaurant: {
      label: i18n('entities.orders.fields.restaurant'),
      render: filterRenders.relationToOne(),
    },
  location: {
    label: i18n('entities.orders.fields.location'),
    render: filterRenders.generic(),
  },
  description: {
    label: i18n('entities.orders.fields.description'),
    render: filterRenders.generic(),
  },
  totalCartPriceRange: {
    label: i18n('entities.orders.fields.totalCartPriceRange'),
    render: filterRenders.decimalRange(),
  },
  deliveryCostRange: {
    label: i18n('entities.orders.fields.deliveryCostRange'),
    render: filterRenders.decimalRange(),
  },
  appCollectionRange: {
    label: i18n('entities.orders.fields.appCollectionRange'),
    render: filterRenders.decimalRange(),
  },
}

function OrdersListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  return (
    <FilterWrapper>
      <FilterAccordion
        expanded={expanded}
        onChange={(event, isExpanded) =>
          setExpanded(isExpanded)
        }
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FilterPreview
            values={rawFilter}
            renders={previewRenders}
            expanded={expanded}
            onRemove={onRemove}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item lg={6} xs={12}>
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
                    mode="multiple"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <CustomerAutocompleteFormItem  
                    name="customer"
                    label={i18n('entities.orders.fields.customer')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DriverAutocompleteFormItem  
                    name="driver"
                    label={i18n('entities.orders.fields.driver')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <RestaurantAutocompleteFormItem  
                    name="restaurant"
                    label={i18n('entities.orders.fields.restaurant')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="location"
                    label={i18n('entities.orders.fields.location')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="description"
                    label={i18n('entities.orders.fields.description')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="totalCartPriceRange"
                    label={i18n('entities.orders.fields.totalCartPriceRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="deliveryCostRange"
                    label={i18n('entities.orders.fields.deliveryCostRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="appCollectionRange"
                    label={i18n('entities.orders.fields.appCollectionRange')}      
                  />
                </Grid>
              </Grid>

              <FilterButtons>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={props.loading}
                  startIcon={<SearchIcon />}
                  size="small"
                >
                  {i18n('common.search')}
                </Button>

                <Button
                  type="button"
                  onClick={onReset}
                  disabled={props.loading}
                  startIcon={<UndoIcon />}
                  size="small"
                >
                  {i18n('common.reset')}
                </Button>
              </FilterButtons>
            </form>
          </FormProvider>
        </AccordionDetails>
      </FilterAccordion>
    </FilterWrapper>
  );
}

export default OrdersListFilter;