import { createSelector } from 'reselect';

const selectRaw = (state) => state.rating.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const ratingViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default ratingViewSelectors;
