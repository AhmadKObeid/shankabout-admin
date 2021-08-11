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
import actions from 'src/modules/deals/list/dealsListActions';
import selectors from 'src/modules/deals/list/dealsListSelectors';
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
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import ProductAutocompleteFormItem from 'src/view/product/autocomplete/ProductAutocompleteFormItem';
import RestaurantAutocompleteFormItem from 'src/view/restaurant/autocomplete/RestaurantAutocompleteFormItem';
import OffersDealsAutocompleteFormItem from 'src/view/offersDeals/autocomplete/OffersDealsAutocompleteFormItem';

const schema = yup.object().shape({
  product: yupFilterSchemas.relationToOne(
    i18n('entities.deals.fields.product'),
  ),
  resturant: yupFilterSchemas.relationToOne(
    i18n('entities.deals.fields.resturant'),
  ),
  offer: yupFilterSchemas.relationToOne(
    i18n('entities.deals.fields.offer'),
  ),
  endDateRange: yupFilterSchemas.dateRange(
    i18n('entities.deals.fields.endDateRange'),
  ),
  costAfterDealRange: yupFilterSchemas.decimalRange(
    i18n('entities.deals.fields.costAfterDealRange'),
  ),
  costForAppRange: yupFilterSchemas.decimalRange(
    i18n('entities.deals.fields.costForAppRange'),
  ),
});

const emptyValues = {
  product: null,
  resturant: null,
  offer: null,
  endDateRange: [],
  costAfterDealRange: [],
  costForAppRange: [],
}

const previewRenders = {
  product: {
      label: i18n('entities.deals.fields.product'),
      render: filterRenders.relationToOne(),
    },
  resturant: {
      label: i18n('entities.deals.fields.resturant'),
      render: filterRenders.relationToOne(),
    },
  offer: {
      label: i18n('entities.deals.fields.offer'),
      render: filterRenders.relationToOne(),
    },
  endDateRange: {
    label: i18n('entities.deals.fields.endDateRange'),
    render: filterRenders.dateRange(),
  },
  costAfterDealRange: {
    label: i18n('entities.deals.fields.costAfterDealRange'),
    render: filterRenders.decimalRange(),
  },
  costForAppRange: {
    label: i18n('entities.deals.fields.costForAppRange'),
    render: filterRenders.decimalRange(),
  },
}

function DealsListFilter(props) {
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
                    label={i18n('entities.deals.fields.product')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <RestaurantAutocompleteFormItem  
                    name="resturant"
                    label={i18n('entities.deals.fields.resturant')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <OffersDealsAutocompleteFormItem  
                    name="offer"
                    label={i18n('entities.deals.fields.offer')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="endDateRange"
                    label={i18n('entities.deals.fields.endDateRange')}    
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="costAfterDealRange"
                    label={i18n('entities.deals.fields.costAfterDealRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="costForAppRange"
                    label={i18n('entities.deals.fields.costForAppRange')}      
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

export default DealsListFilter;