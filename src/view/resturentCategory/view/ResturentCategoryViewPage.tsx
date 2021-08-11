import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/resturentCategory/view/resturentCategoryViewActions';
import selectors from 'src/modules/resturentCategory/view/resturentCategoryViewSelectors';
import ResturentCategoryView from 'src/view/resturentCategory/view/ResturentCategoryView';
import ResturentCategoryViewToolbar from 'src/view/resturentCategory/view/ResturentCategoryViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ResturentCategoryPage() {
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
          [i18n('entities.resturentCategory.menu'), '/resturent-category'],
          [i18n('entities.resturentCategory.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.resturentCategory.view.title')}
        </PageTitle>

        <ResturentCategoryViewToolbar match={match} />

        <ResturentCategoryView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default ResturentCategoryPage;
