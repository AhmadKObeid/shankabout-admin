import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/customerAdress/importer/customerAdressImporterActions';
import fields from 'src/modules/customerAdress/importer/customerAdressImporterFields';
import selectors from 'src/modules/customerAdress/importer/customerAdressImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CustomerAdressImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.customerAdress.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.customerAdress.menu'), '/customer-adress'],
          [i18n('entities.customerAdress.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.customerAdress.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default CustomerAdressImportPage;
