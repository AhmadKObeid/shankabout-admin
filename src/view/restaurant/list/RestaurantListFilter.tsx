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
import actions from 'src/modules/restaurant/list/restaurantListActions';
import selectors from 'src/modules/restaurant/list/restaurantListSelectors';
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
import restaurantEnumerators from 'src/modules/restaurant/restaurantEnumerators';
import ResturentCategoryAutocompleteFormItem from 'src/view/resturentCategory/autocomplete/ResturentCategoryAutocompleteFormItem';

const schema = yup.object().shape({
  name: yupFilterSchemas.string(
    i18n('entities.restaurant.fields.name'),
  ),
  status: yupFilterSchemas.stringArray(
    i18n('entities.restaurant.fields.status'),
  ),
  category: yupFilterSchemas.relationToOne(
    i18n('entities.restaurant.fields.category'),
  ),
  city: yupFilterSchemas.string(
    i18n('entities.restaurant.fields.city'),
  ),
  address: yupFilterSchemas.string(
    i18n('entities.restaurant.fields.address'),
  ),
  description: yupFilterSchemas.string(
    i18n('entities.restaurant.fields.description'),
  ),
  googleMap: yupFilterSchemas.string(
    i18n('entities.restaurant.fields.googleMap'),
  ),
  feesRange: yupFilterSchemas.decimalRange(
    i18n('entities.restaurant.fields.feesRange'),
  ),
  maxFeesILSRange: yupFilterSchemas.decimalRange(
    i18n('entities.restaurant.fields.maxFeesILSRange'),
  ),
  minFeesILSRange: yupFilterSchemas.decimalRange(
    i18n('entities.restaurant.fields.minFeesILSRange'),
  ),
});

const emptyValues = {
  name: null,
  status: [],
  category: null,
  city: null,
  address: null,
  description: null,
  googleMap: null,
  feesRange: [],
  maxFeesILSRange: [],
  minFeesILSRange: [],
}

const previewRenders = {
  name: {
    label: i18n('entities.restaurant.fields.name'),
    render: filterRenders.generic(),
  },
  status: {
    label: i18n('entities.restaurant.fields.status'),
    render: filterRenders.enumeratorMultiple('entities.restaurant.enumerators.status',),
  },
  category: {
      label: i18n('entities.restaurant.fields.category'),
      render: filterRenders.relationToOne(),
    },
  city: {
    label: i18n('entities.restaurant.fields.city'),
    render: filterRenders.generic(),
  },
  address: {
    label: i18n('entities.restaurant.fields.address'),
    render: filterRenders.generic(),
  },
  description: {
    label: i18n('entities.restaurant.fields.description'),
    render: filterRenders.generic(),
  },
  googleMap: {
    label: i18n('entities.restaurant.fields.googleMap'),
    render: filterRenders.generic(),
  },
  feesRange: {
    label: i18n('entities.restaurant.fields.feesRange'),
    render: filterRenders.decimalRange(),
  },
  maxFeesILSRange: {
    label: i18n('entities.restaurant.fields.maxFeesILSRange'),
    render: filterRenders.decimalRange(),
  },
  minFeesILSRange: {
    label: i18n('entities.restaurant.fields.minFeesILSRange'),
    render: filterRenders.decimalRange(),
  },
}

function RestaurantListFilter(props) {
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
                  <InputFormItem
                    name="name"
                    label={i18n('entities.restaurant.fields.name')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
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
                    mode="multiple"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <ResturentCategoryAutocompleteFormItem  
                    name="category"
                    label={i18n('entities.restaurant.fields.category')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="city"
                    label={i18n('entities.restaurant.fields.city')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="address"
                    label={i18n('entities.restaurant.fields.address')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="description"
                    label={i18n('entities.restaurant.fields.description')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="googleMap"
                    label={i18n('entities.restaurant.fields.googleMap')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="feesRange"
                    label={i18n('entities.restaurant.fields.feesRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="maxFeesILSRange"
                    label={i18n('entities.restaurant.fields.maxFeesILSRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="minFeesILSRange"
                    label={i18n('entities.restaurant.fields.minFeesILSRange')}      
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

export default RestaurantListFilter;