import { createSelector } from 'reselect';

const selectRaw = (state) => state.deals.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const dealsDestroySelectors = {
  selectLoading,
};

export default dealsDestroySelectors;
