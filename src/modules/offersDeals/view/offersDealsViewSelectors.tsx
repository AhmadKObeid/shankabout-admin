import { createSelector } from 'reselect';

const selectRaw = (state) => state.offersDeals.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const offersDealsViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default offersDealsViewSelectors;
