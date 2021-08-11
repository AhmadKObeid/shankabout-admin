import { createSelector } from 'reselect';

const selectRaw = (state) => state.restaurantOwner.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const restaurantOwnerDestroySelectors = {
  selectLoading,
};

export default restaurantOwnerDestroySelectors;
