import { createSelector } from 'reselect';

const selectRaw = (state) => state.offersDeals.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const offersDealsDestroySelectors = {
  selectLoading,
};

export default offersDealsDestroySelectors;
