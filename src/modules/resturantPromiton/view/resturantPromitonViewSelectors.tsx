import { createSelector } from 'reselect';

const selectRaw = (state) => state.resturantPromiton.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const resturantPromitonViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default resturantPromitonViewSelectors;
