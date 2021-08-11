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
import actions from 'src/modules/driver/list/driverListActions';
import selectors from 'src/modules/driver/list/driverListSelectors';
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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import driverEnumerators from 'src/modules/driver/driverEnumerators';

const schema = yup.object().shape({
  status: yupFilterSchemas.stringArray(
    i18n('entities.driver.fields.status'),
  ),
  fullName: yupFilterSchemas.string(
    i18n('entities.driver.fields.fullName'),
  ),
  username: yupFilterSchemas.string(
    i18n('entities.driver.fields.username'),
  ),
  password: yupFilterSchemas.string(
    i18n('entities.driver.fields.password'),
  ),
  currentLocation: yupFilterSchemas.string(
    i18n('entities.driver.fields.currentLocation'),
  ),
});

const emptyValues = {
  status: [],
  fullName: null,
  username: null,
  password: null,
  currentLocation: null,
}

const previewRenders = {
  status: {
    label: i18n('entities.driver.fields.status'),
    render: filterRenders.enumeratorMultiple('entities.driver.enumerators.status',),
  },
  fullName: {
    label: i18n('entities.driver.fields.fullName'),
    render: filterRenders.generic(),
  },
  username: {
    label: i18n('entities.driver.fields.username'),
    render: filterRenders.generic(),
  },
  password: {
    label: i18n('entities.driver.fields.password'),
    render: filterRenders.generic(),
  },
  currentLocation: {
    label: i18n('entities.driver.fields.currentLocation'),
    render: filterRenders.generic(),
  },
}

function DriverListFilter(props) {
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
                    label={i18n('entities.driver.fields.status')}
                    options={driverEnumerators.status.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.driver.enumerators.status.${value}`,
                        ),
                      }),
                    )}
                    mode="multiple"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="fullName"
                    label={i18n('entities.driver.fields.fullName')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="username"
                    label={i18n('entities.driver.fields.username')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="password"
                    label={i18n('entities.driver.fields.password')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="currentLocation"
                    label={i18n('entities.driver.fields.currentLocation')}      
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

export default DriverListFilter;