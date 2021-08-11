import { createSelector } from 'reselect';

const selectRaw = (state) => state.resturentCategory.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const resturentCategoryViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default resturentCategoryViewSelectors;
