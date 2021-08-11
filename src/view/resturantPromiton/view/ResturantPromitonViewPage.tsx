import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/resturantPromiton/view/resturantPromitonViewActions';
import selectors from 'src/modules/resturantPromiton/view/resturantPromitonViewSelectors';
import ResturantPromitonView from 'src/view/resturantPromiton/view/ResturantPromitonView';
import ResturantPromitonViewToolbar from 'src/view/resturantPromiton/view/ResturantPromitonViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ResturantPromitonPage() {
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
          [i18n('entities.resturantPromiton.menu'), '/resturant-promiton'],
          [i18n('entities.resturantPromiton.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.resturantPromiton.view.title')}
        </PageTitle>

        <ResturantPromitonViewToolbar match={match} />

        <ResturantPromitonView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default ResturantPromitonPage;
