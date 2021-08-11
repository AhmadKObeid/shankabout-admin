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
import actions from 'src/modules/product/list/productListActions';
import selectors from 'src/modules/product/list/productListSelectors';
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
import RestaurantAutocompleteFormItem from 'src/view/restaurant/autocomplete/RestaurantAutocompleteFormItem';
import ProductCategoryAutocompleteFormItem from 'src/view/productCategory/autocomplete/ProductCategoryAutocompleteFormItem';

const schema = yup.object().shape({
  name: yupFilterSchemas.string(
    i18n('entities.product.fields.name'),
  ),
  description: yupFilterSchemas.string(
    i18n('entities.product.fields.description'),
  ),
  priceRange: yupFilterSchemas.decimalRange(
    i18n('entities.product.fields.priceRange'),
  ),
  restaurant: yupFilterSchemas.relationToOne(
    i18n('entities.product.fields.restaurant'),
  ),
  category: yupFilterSchemas.relationToOne(
    i18n('entities.product.fields.category'),
  ),
});

const emptyValues = {
  name: null,
  description: null,
  priceRange: [],
  restaurant: null,
  category: null,
}

const previewRenders = {
  name: {
    label: i18n('entities.product.fields.name'),
    render: filterRenders.generic(),
  },
  description: {
    label: i18n('entities.product.fields.description'),
    render: filterRenders.generic(),
  },
  priceRange: {
    label: i18n('entities.product.fields.priceRange'),
    render: filterRenders.decimalRange(),
  },
  restaurant: {
      label: i18n('entities.product.fields.restaurant'),
      render: filterRenders.relationToOne(),
    },
  category: {
      label: i18n('entities.product.fields.category'),
      render: filterRenders.relationToOne(),
    },
}

function ProductListFilter(props) {
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
                    label={i18n('entities.product.fields.name')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="description"
                    label={i18n('entities.product.fields.description')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="priceRange"
                    label={i18n('entities.product.fields.priceRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <RestaurantAutocompleteFormItem  
                    name="restaurant"
                    label={i18n('entities.product.fields.restaurant')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <ProductCategoryAutocompleteFormItem  
                    name="category"
                    label={i18n('entities.product.fields.category')}        
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

export default ProductListFilter;