import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/orders/importer/ordersImporterActions';
import fields from 'src/modules/orders/importer/ordersImporterFields';
import selectors from 'src/modules/orders/importer/ordersImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function OrdersImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.orders.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.orders.menu'), '/orders'],
          [i18n('entities.orders.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.orders.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default OrdersImportPage;
