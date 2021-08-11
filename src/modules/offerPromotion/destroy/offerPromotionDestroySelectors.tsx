import { createSelector } from 'reselect';

const selectRaw = (state) => state.offerPromotion.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const offerPromotionDestroySelectors = {
  selectLoading,
};

export default offerPromotionDestroySelectors;
