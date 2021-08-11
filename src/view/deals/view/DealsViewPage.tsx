import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/deals/view/dealsViewActions';
import selectors from 'src/modules/deals/view/dealsViewSelectors';
import DealsView from 'src/view/deals/view/DealsView';
import DealsViewToolbar from 'src/view/deals/view/DealsViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function DealsPage() {
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
          [i18n('entities.deals.menu'), '/deals'],
          [i18n('entities.deals.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.deals.view.title')}
        </PageTitle>

        <DealsViewToolbar match={match} />

        <DealsView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default DealsPage;
