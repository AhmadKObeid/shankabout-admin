import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/restaurantOwner/importer/restaurantOwnerImporterActions';
import fields from 'src/modules/restaurantOwner/importer/restaurantOwnerImporterFields';
import selectors from 'src/modules/restaurantOwner/importer/restaurantOwnerImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function RestaurantOwnerImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.restaurantOwner.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.restaurantOwner.menu'), '/restaurant-owner'],
          [i18n('entities.restaurantOwner.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.restaurantOwner.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default RestaurantOwnerImportPage;
