import React from 'react';
import { i18n } from 'src/i18n';
import DriverListFilter from 'src/view/driver/list/DriverListFilter';
import DriverListTable from 'src/view/driver/list/DriverListTable';
import DriverListToolbar from 'src/view/driver/list/DriverListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function DriverListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.driver.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.driver.list.title')}
        </PageTitle>

        <DriverListToolbar />
        <DriverListFilter />
        <DriverListTable />
      </ContentWrapper>
    </>
  );
}

export default DriverListPage;
