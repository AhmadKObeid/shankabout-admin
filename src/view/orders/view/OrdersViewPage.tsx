import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/orders/view/ordersViewActions';
import selectors from 'src/modules/orders/view/ordersViewSelectors';
import OrdersView from 'src/view/orders/view/OrdersView';
import OrdersViewToolbar from 'src/view/orders/view/OrdersViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function OrdersPage() {
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
          [i18n('entities.orders.menu'), '/orders'],
          [i18n('entities.orders.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.orders.view.title')}
        </PageTitle>

        <OrdersViewToolbar match={match} />

        <OrdersView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default OrdersPage;
