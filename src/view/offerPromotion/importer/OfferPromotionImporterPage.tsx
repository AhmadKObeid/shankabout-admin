import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/offerPromotion/importer/offerPromotionImporterActions';
import fields from 'src/modules/offerPromotion/importer/offerPromotionImporterFields';
import selectors from 'src/modules/offerPromotion/importer/offerPromotionImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function OfferPromotionImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.offerPromotion.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.offerPromotion.menu'), '/offer-promotion'],
          [i18n('entities.offerPromotion.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.offerPromotion.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default OfferPromotionImportPage;
