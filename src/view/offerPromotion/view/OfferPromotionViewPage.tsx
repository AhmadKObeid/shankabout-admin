import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/offerPromotion/view/offerPromotionViewActions';
import selectors from 'src/modules/offerPromotion/view/offerPromotionViewSelectors';
import OfferPromotionView from 'src/view/offerPromotion/view/OfferPromotionView';
import OfferPromotionViewToolbar from 'src/view/offerPromotion/view/OfferPromotionViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function OfferPromotionPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.offerPromotion.menu'), '/offer-promotion'],
          [i18n('entities.offerPromotion.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.offerPromotion.view.title')}
        </PageTitle>

        <OfferPromotionViewToolbar match={match} />

        <OfferPromotionView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default OfferPromotionPage;
