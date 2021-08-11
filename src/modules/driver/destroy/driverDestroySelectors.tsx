import { createSelector } from 'reselect';

const selectRaw = (state) => state.driver.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const driverDestroySelectors = {
  selectLoading,
};

export default driverDestroySelectors;
