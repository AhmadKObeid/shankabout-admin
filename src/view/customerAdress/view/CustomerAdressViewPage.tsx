import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/customerAdress/view/customerAdressViewActions';
import selectors from 'src/modules/customerAdress/view/customerAdressViewSelectors';
import CustomerAdressView from 'src/view/customerAdress/view/CustomerAdressView';
import CustomerAdressViewToolbar from 'src/view/customerAdress/view/CustomerAdressViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CustomerAdressPage() {
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
          [i18n('entities.customerAdress.menu'), '/customer-adress'],
          [i18n('entities.customerAdress.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.customerAdress.view.title')}
        </PageTitle>

        <CustomerAdressViewToolbar match={match} />

        <CustomerAdressView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default CustomerAdressPage;
