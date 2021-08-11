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
import actions from 'src/modules/rating/list/ratingListActions';
import selectors from 'src/modules/rating/list/ratingListSelectors';
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
import InputNumberRangeFormItem from 'src/view/shared/form/items/InputNumberRangeFormItem';
import CustomerAutocompleteFormItem from 'src/view/customer/autocomplete/CustomerAutocompleteFormItem';
import DriverAutocompleteFormItem from 'src/view/driver/autocomplete/DriverAutocompleteFormItem';
import RestaurantAutocompleteFormItem from 'src/view/restaurant/autocomplete/RestaurantAutocompleteFormItem';

const schema = yup.object().shape({
  customer: yupFilterSchemas.relationToOne(
    i18n('entities.rating.fields.customer'),
  ),
  driver: yupFilterSchemas.relationToOne(
    i18n('entities.rating.fields.driver'),
  ),
  resturent: yupFilterSchemas.relationToOne(
    i18n('entities.rating.fields.resturent'),
  ),
  from: yupFilterSchemas.string(
    i18n('entities.rating.fields.from'),
  ),
  to: yupFilterSchemas.string(
    i18n('entities.rating.fields.to'),
  ),
  valueRange: yupFilterSchemas.integerRange(
    i18n('entities.rating.fields.valueRange'),
  ),
});

const emptyValues = {
  customer: null,
  driver: null,
  resturent: null,
  from: null,
  to: null,
  valueRange: [],
}

const previewRenders = {
  customer: {
      label: i18n('entities.rating.fields.customer'),
      render: filterRenders.relationToOne(),
    },
  driver: {
      label: i18n('entities.rating.fields.driver'),
      render: filterRenders.relationToOne(),
    },
  resturent: {
      label: i18n('entities.rating.fields.resturent'),
      render: filterRenders.relationToOne(),
    },
  from: {
    label: i18n('entities.rating.fields.from'),
    render: filterRenders.generic(),
  },
  to: {
    label: i18n('entities.rating.fields.to'),
    render: filterRenders.generic(),
  },
  valueRange: {
    label: i18n('entities.rating.fields.valueRange'),
    render: filterRenders.range(),
  },
}

function RatingListFilter(props) {
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
                  <CustomerAutocompleteFormItem  
                    name="customer"
                    label={i18n('entities.rating.fields.customer')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DriverAutocompleteFormItem  
                    name="driver"
                    label={i18n('entities.rating.fields.driver')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <RestaurantAutocompleteFormItem  
                    name="resturent"
                    label={i18n('entities.rating.fields.resturent')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="from"
                    label={i18n('entities.rating.fields.from')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="to"
                    label={i18n('entities.rating.fields.to')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputNumberRangeFormItem
                    name="valueRange"
                    label={i18n('entities.rating.fields.valueRange')}      
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

export default RatingListFilter;