import { createSelector } from 'reselect';

const selectRaw = (state) => state.restaurant.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const restaurantDestroySelectors = {
  selectLoading,
};

export default restaurantDestroySelectors;
