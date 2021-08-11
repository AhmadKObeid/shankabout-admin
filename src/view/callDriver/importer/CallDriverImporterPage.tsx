import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/callDriver/importer/callDriverImporterActions';
import fields from 'src/modules/callDriver/importer/callDriverImporterFields';
import selectors from 'src/modules/callDriver/importer/callDriverImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CallDriverImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.callDriver.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.callDriver.menu'), '/call-driver'],
          [i18n('entities.callDriver.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.callDriver.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default CallDriverImportPage;
