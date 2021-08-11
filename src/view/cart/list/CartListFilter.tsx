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
import actions from 'src/modules/cart/list/cartListActions';
import selectors from 'src/modules/cart/list/cartListSelectors';
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
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
import ProductAutocompleteFormItem from 'src/view/product/autocomplete/ProductAutocompleteFormItem';
import CustomerAutocompleteFormItem from 'src/view/customer/autocomplete/CustomerAutocompleteFormItem';
import OrdersAutocompleteFormItem from 'src/view/orders/autocomplete/OrdersAutocompleteFormItem';

const schema = yup.object().shape({
  product: yupFilterSchemas.relationToOne(
    i18n('entities.cart.fields.product'),
  ),
  quantityRange: yupFilterSchemas.decimalRange(
    i18n('entities.cart.fields.quantityRange'),
  ),
  customer: yupFilterSchemas.relationToOne(
    i18n('entities.cart.fields.customer'),
  ),
  orders: yupFilterSchemas.relationToOne(
    i18n('entities.cart.fields.orders'),
  ),
});

const emptyValues = {
  product: null,
  quantityRange: [],
  customer: null,
  orders: null,
}

const previewRenders = {
  product: {
      label: i18n('entities.cart.fields.product'),
      render: filterRenders.relationToOne(),
    },
  quantityRange: {
    label: i18n('entities.cart.fields.quantityRange'),
    render: filterRenders.decimalRange(),
  },
  customer: {
      label: i18n('entities.cart.fields.customer'),
      render: filterRenders.relationToOne(),
    },
  orders: {
      label: i18n('entities.cart.fields.orders'),
      render: filterRenders.relationToOne(),
    },
}

function CartListFilter(props) {
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
                  <ProductAutocompleteFormItem  
                    name="product"
                    label={i18n('entities.cart.fields.product')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="quantityRange"
                    label={i18n('entities.cart.fields.quantityRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <CustomerAutocompleteFormItem  
                    name="customer"
                    label={i18n('entities.cart.fields.customer')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <OrdersAutocompleteFormItem  
                    name="orders"
                    label={i18n('entities.cart.fields.orders')}        
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

export default CartListFilter;