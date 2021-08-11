import { createSelector } from 'reselect';

const selectRaw = (state) => state.callDriver.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const callDriverViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default callDriverViewSelectors;
