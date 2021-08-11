import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/offersDeals/view/offersDealsViewActions';
import selectors from 'src/modules/offersDeals/view/offersDealsViewSelectors';
import OffersDealsView from 'src/view/offersDeals/view/OffersDealsView';
import OffersDealsViewToolbar from 'src/view/offersDeals/view/OffersDealsViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function OffersDealsPage() {
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
          [i18n('entities.offersDeals.menu'), '/offers-deals'],
          [i18n('entities.offersDeals.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.offersDeals.view.title')}
        </PageTitle>

        <OffersDealsViewToolbar match={match} />

        <OffersDealsView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default OffersDealsPage;
