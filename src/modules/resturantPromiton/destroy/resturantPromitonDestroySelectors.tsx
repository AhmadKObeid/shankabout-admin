import { createSelector } from 'reselect';

const selectRaw = (state) => state.resturantPromiton.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const resturantPromitonDestroySelectors = {
  selectLoading,
};

export default resturantPromitonDestroySelectors;
