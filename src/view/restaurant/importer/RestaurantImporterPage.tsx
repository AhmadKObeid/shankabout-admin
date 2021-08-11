import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/restaurant/importer/restaurantImporterActions';
import fields from 'src/modules/restaurant/importer/restaurantImporterFields';
import selectors from 'src/modules/restaurant/importer/restaurantImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function RestaurantImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.restaurant.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.restaurant.menu'), '/restaurant'],
          [i18n('entities.restaurant.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.restaurant.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default RestaurantImportPage;
