import React from 'react';
import { i18n } from 'src/i18n';
import DealsListFilter from 'src/view/deals/list/DealsListFilter';
import DealsListTable from 'src/view/deals/list/DealsListTable';
import DealsListToolbar from 'src/view/deals/list/DealsListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function DealsListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.deals.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.deals.list.title')}
        </PageTitle>

        <DealsListToolbar />
        <DealsListFilter />
        <DealsListTable />
      </ContentWrapper>
    </>
  );
}

export default DealsListPage;
