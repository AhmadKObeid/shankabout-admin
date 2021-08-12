import { createSelector } from 'reselect';

const selectRaw = (state) => state.city.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const cityDestroySelectors = {
  selectLoading,
};

export default cityDestroySelectors;
