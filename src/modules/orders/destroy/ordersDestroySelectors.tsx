import { createSelector } from 'reselect';

const selectRaw = (state) => state.orders.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const ordersDestroySelectors = {
  selectLoading,
};

export default ordersDestroySelectors;
