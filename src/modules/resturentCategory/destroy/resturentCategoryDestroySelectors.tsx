import { createSelector } from 'reselect';

const selectRaw = (state) => state.resturentCategory.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const resturentCategoryDestroySelectors = {
  selectLoading,
};

export default resturentCategoryDestroySelectors;
