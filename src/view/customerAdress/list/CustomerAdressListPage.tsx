import React from 'react';
import { i18n } from 'src/i18n';
import CustomerAdressListFilter from 'src/view/customerAdress/list/CustomerAdressListFilter';
import CustomerAdressListTable from 'src/view/customerAdress/list/CustomerAdressListTable';
import CustomerAdressListToolbar from 'src/view/customerAdress/list/CustomerAdressListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CustomerAdressListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.customerAdress.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.customerAdress.list.title')}
        </PageTitle>

        <CustomerAdressListToolbar />
        <CustomerAdressListFilter />
        <CustomerAdressListTable />
      </ContentWrapper>
    </>
  );
}

export default CustomerAdressListPage;
