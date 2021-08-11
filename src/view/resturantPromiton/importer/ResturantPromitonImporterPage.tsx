import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/resturantPromiton/importer/resturantPromitonImporterActions';
import fields from 'src/modules/resturantPromiton/importer/resturantPromitonImporterFields';
import selectors from 'src/modules/resturantPromiton/importer/resturantPromitonImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ResturantPromitonImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.resturantPromiton.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.resturantPromiton.menu'), '/resturant-promiton'],
          [i18n('entities.resturantPromiton.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.resturantPromiton.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default ResturantPromitonImportPage;
