import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/city/importer/cityImporterActions';
import fields from 'src/modules/city/importer/cityImporterFields';
import selectors from 'src/modules/city/importer/cityImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CityImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.city.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.city.menu'), '/city'],
          [i18n('entities.city.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.city.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default CityImportPage;
