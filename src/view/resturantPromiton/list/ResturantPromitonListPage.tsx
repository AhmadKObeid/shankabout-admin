import React from 'react';
import { i18n } from 'src/i18n';
import ResturantPromitonListFilter from 'src/view/resturantPromiton/list/ResturantPromitonListFilter';
import ResturantPromitonListTable from 'src/view/resturantPromiton/list/ResturantPromitonListTable';
import ResturantPromitonListToolbar from 'src/view/resturantPromiton/list/ResturantPromitonListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ResturantPromitonListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.resturantPromiton.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.resturantPromiton.list.title')}
        </PageTitle>

        <ResturantPromitonListToolbar />
        <ResturantPromitonListFilter />
        <ResturantPromitonListTable />
      </ContentWrapper>
    </>
  );
}

export default ResturantPromitonListPage;
