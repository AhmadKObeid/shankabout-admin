import React from 'react';
import { i18n } from 'src/i18n';
import RestaurantOwnerListFilter from 'src/view/restaurantOwner/list/RestaurantOwnerListFilter';
import RestaurantOwnerListTable from 'src/view/restaurantOwner/list/RestaurantOwnerListTable';
import RestaurantOwnerListToolbar from 'src/view/restaurantOwner/list/RestaurantOwnerListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function RestaurantOwnerListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.restaurantOwner.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.restaurantOwner.list.title')}
        </PageTitle>

        <RestaurantOwnerListToolbar />
        <RestaurantOwnerListFilter />
        <RestaurantOwnerListTable />
      </ContentWrapper>
    </>
  );
}

export default RestaurantOwnerListPage;
