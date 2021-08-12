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
import actions from 'src/modules/customer/list/customerListActions';
import selectors from 'src/modules/customer/list/customerListSelectors';
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

const schema = yup.object().shape({
  fullName: yupFilterSchemas.string(
    i18n('entities.customer.fields.fullName'),
  ),
  phoneNumber: yupFilterSchemas.string(
    i18n('entities.customer.fields.phoneNumber'),
  ),
  email: yupFilterSchemas.string(
    i18n('entities.customer.fields.email'),
  ),
  socialType: yupFilterSchemas.string(
    i18n('entities.customer.fields.socialType'),
  ),
  socialId: yupFilterSchemas.string(
    i18n('entities.customer.fields.socialId'),
  ),
  profileImage: yupFilterSchemas.string(
    i18n('entities.customer.fields.profileImage'),
  ),
  city: yupFilterSchemas.string(
    i18n('entities.customer.fields.city'),
  ),
  currentLocation: yupFilterSchemas.string(
    i18n('entities.customer.fields.currentLocation'),
  ),
});

const emptyValues = {
  fullName: null,
  phoneNumber: null,
  email: null,
  socialType: null,
  socialId: null,
  profileImage: null,
  city: null,
  currentLocation: null,
}

const previewRenders = {
  fullName: {
    label: i18n('entities.customer.fields.fullName'),
    render: filterRenders.generic(),
  },
  phoneNumber: {
    label: i18n('entities.customer.fields.phoneNumber'),
    render: filterRenders.generic(),
  },
  email: {
    label: i18n('entities.customer.fields.email'),
    render: filterRenders.generic(),
  },
  socialType: {
    label: i18n('entities.customer.fields.socialType'),
    render: filterRenders.generic(),
  },
  socialId: {
    label: i18n('entities.customer.fields.socialId'),
    render: filterRenders.generic(),
  },
  profileImage: {
    label: i18n('entities.customer.fields.profileImage'),
    render: filterRenders.generic(),
  },
  city: {
    label: i18n('entities.customer.fields.city'),
    render: filterRenders.generic(),
  },
  currentLocation: {
    label: i18n('entities.customer.fields.currentLocation'),
    render: filterRenders.generic(),
  },
}

function CustomerListFilter(props) {
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
                    name="fullName"
                    label={i18n('entities.customer.fields.fullName')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="phoneNumber"
                    label={i18n('entities.customer.fields.phoneNumber')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="email"
                    label={i18n('entities.customer.fields.email')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="socialType"
                    label={i18n('entities.customer.fields.socialType')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="socialId"
                    label={i18n('entities.customer.fields.socialId')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="profileImage"
                    label={i18n('entities.customer.fields.profileImage')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="city"
                    label={i18n('entities.customer.fields.city')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="currentLocation"
                    label={i18n('entities.customer.fields.currentLocation')}      
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

export default CustomerListFilter;