import { createSelector } from 'reselect';

const selectRaw = (state) => state.rating.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const ratingDestroySelectors = {
  selectLoading,
};

export default ratingDestroySelectors;
