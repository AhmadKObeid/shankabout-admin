import React from 'react';
import { i18n } from 'src/i18n';
import OrdersListFilter from 'src/view/orders/list/OrdersListFilter';
import OrdersListTable from 'src/view/orders/list/OrdersListTable';
import OrdersListToolbar from 'src/view/orders/list/OrdersListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function OrdersListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.orders.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.orders.list.title')}
        </PageTitle>

        <OrdersListToolbar />
        <OrdersListFilter />
        <OrdersListTable />
      </ContentWrapper>
    </>
  );
}

export default OrdersListPage;
