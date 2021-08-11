import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/callDriver/view/callDriverViewActions';
import selectors from 'src/modules/callDriver/view/callDriverViewSelectors';
import CallDriverView from 'src/view/callDriver/view/CallDriverView';
import CallDriverViewToolbar from 'src/view/callDriver/view/CallDriverViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CallDriverPage() {
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
          [i18n('entities.callDriver.menu'), '/call-driver'],
          [i18n('entities.callDriver.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.callDriver.view.title')}
        </PageTitle>

        <CallDriverViewToolbar match={match} />

        <CallDriverView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default CallDriverPage;
