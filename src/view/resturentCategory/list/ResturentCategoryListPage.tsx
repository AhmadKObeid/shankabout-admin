import React from 'react';
import { i18n } from 'src/i18n';
import ResturentCategoryListFilter from 'src/view/resturentCategory/list/ResturentCategoryListFilter';
import ResturentCategoryListTable from 'src/view/resturentCategory/list/ResturentCategoryListTable';
import ResturentCategoryListToolbar from 'src/view/resturentCategory/list/ResturentCategoryListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ResturentCategoryListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.resturentCategory.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.resturentCategory.list.title')}
        </PageTitle>

        <ResturentCategoryListToolbar />
        <ResturentCategoryListFilter />
        <ResturentCategoryListTable />
      </ContentWrapper>
    </>
  );
}

export default ResturentCategoryListPage;
