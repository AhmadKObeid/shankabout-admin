import { createSelector } from 'reselect';

const selectRaw = (state) => state.deals.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const dealsViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default dealsViewSelectors;
