import { createSelector } from 'reselect';

const selectRaw = (state) => state.driver.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const driverViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default driverViewSelectors;
