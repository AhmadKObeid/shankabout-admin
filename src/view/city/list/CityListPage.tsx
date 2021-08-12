import React from 'react';
import { i18n } from 'src/i18n';
import CityListFilter from 'src/view/city/list/CityListFilter';
import CityListTable from 'src/view/city/list/CityListTable';
import CityListToolbar from 'src/view/city/list/CityListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CityListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.city.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.city.list.title')}
        </PageTitle>

        <CityListToolbar />
        <CityListFilter />
        <CityListTable />
      </ContentWrapper>
    </>
  );
}

export default CityListPage;
