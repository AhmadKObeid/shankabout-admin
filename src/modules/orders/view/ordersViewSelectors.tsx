import { createSelector } from 'reselect';

const selectRaw = (state) => state.orders.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const ordersViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default ordersViewSelectors;
