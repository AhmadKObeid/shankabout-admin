import React from 'react';
import { i18n } from 'src/i18n';
import RestaurantListFilter from 'src/view/restaurant/list/RestaurantListFilter';
import RestaurantListTable from 'src/view/restaurant/list/RestaurantListTable';
import RestaurantListToolbar from 'src/view/restaurant/list/RestaurantListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function RestaurantListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.restaurant.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.restaurant.list.title')}
        </PageTitle>

        <RestaurantListToolbar />
        <RestaurantListFilter />
        <RestaurantListTable />
      </ContentWrapper>
    </>
  );
}

export default RestaurantListPage;
