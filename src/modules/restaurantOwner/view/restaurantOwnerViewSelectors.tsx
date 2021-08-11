import { createSelector } from 'reselect';

const selectRaw = (state) => state.restaurantOwner.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const restaurantOwnerViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default restaurantOwnerViewSelectors;
