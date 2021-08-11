import { createSelector } from 'reselect';

const selectRaw = (state) => state.callDriver.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const callDriverDestroySelectors = {
  selectLoading,
};

export default callDriverDestroySelectors;
