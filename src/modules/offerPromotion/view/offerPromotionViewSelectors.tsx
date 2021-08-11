import { createSelector } from 'reselect';

const selectRaw = (state) => state.offerPromotion.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const offerPromotionViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default offerPromotionViewSelectors;
