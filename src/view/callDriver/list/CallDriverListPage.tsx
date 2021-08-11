import React from 'react';
import { i18n } from 'src/i18n';
import CallDriverListFilter from 'src/view/callDriver/list/CallDriverListFilter';
import CallDriverListTable from 'src/view/callDriver/list/CallDriverListTable';
import CallDriverListToolbar from 'src/view/callDriver/list/CallDriverListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CallDriverListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.callDriver.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.callDriver.list.title')}
        </PageTitle>

        <CallDriverListToolbar />
        <CallDriverListFilter />
        <CallDriverListTable />
      </ContentWrapper>
    </>
  );
}

export default CallDriverListPage;
