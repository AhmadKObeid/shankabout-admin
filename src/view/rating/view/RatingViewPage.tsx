import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/rating/view/ratingViewActions';
import selectors from 'src/modules/rating/view/ratingViewSelectors';
import RatingView from 'src/view/rating/view/RatingView';
import RatingViewToolbar from 'src/view/rating/view/RatingViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function RatingPage() {
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
          [i18n('entities.rating.menu'), '/rating'],
          [i18n('entities.rating.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.rating.view.title')}
        </PageTitle>

        <RatingViewToolbar match={match} />

        <RatingView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default RatingPage;
