import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/rating/importer/ratingImporterActions';
import fields from 'src/modules/rating/importer/ratingImporterFields';
import selectors from 'src/modules/rating/importer/ratingImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function RatingImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.rating.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.rating.menu'), '/rating'],
          [i18n('entities.rating.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.rating.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default RatingImportPage;
