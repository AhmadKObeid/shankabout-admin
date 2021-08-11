import React from 'react';
import { i18n } from 'src/i18n';
import OffersDealsListFilter from 'src/view/offersDeals/list/OffersDealsListFilter';
import OffersDealsListTable from 'src/view/offersDeals/list/OffersDealsListTable';
import OffersDealsListToolbar from 'src/view/offersDeals/list/OffersDealsListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function OffersDealsListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.offersDeals.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.offersDeals.list.title')}
        </PageTitle>

        <OffersDealsListToolbar />
        <OffersDealsListFilter />
        <OffersDealsListTable />
      </ContentWrapper>
    </>
  );
}

export default OffersDealsListPage;
