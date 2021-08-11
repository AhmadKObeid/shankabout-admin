import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/driver/importer/driverImporterActions';
import fields from 'src/modules/driver/importer/driverImporterFields';
import selectors from 'src/modules/driver/importer/driverImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function DriverImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.driver.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.driver.menu'), '/driver'],
          [i18n('entities.driver.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.driver.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default DriverImportPage;
