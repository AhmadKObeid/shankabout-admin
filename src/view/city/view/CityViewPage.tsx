import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/city/view/cityViewActions';
import selectors from 'src/modules/city/view/cityViewSelectors';
import CityView from 'src/view/city/view/CityView';
import CityViewToolbar from 'src/view/city/view/CityViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CityPage() {
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
          [i18n('entities.city.menu'), '/city'],
          [i18n('entities.city.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.city.view.title')}
        </PageTitle>

        <CityViewToolbar match={match} />

        <CityView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default CityPage;
