import { createSelector } from 'reselect';

const selectRaw = (state) => state.customerAdress.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const customerAdressDestroySelectors = {
  selectLoading,
};

export default customerAdressDestroySelectors;
