import React from 'react';
import { i18n } from 'src/i18n';
import OfferPromotionListFilter from 'src/view/offerPromotion/list/OfferPromotionListFilter';
import OfferPromotionListTable from 'src/view/offerPromotion/list/OfferPromotionListTable';
import OfferPromotionListToolbar from 'src/view/offerPromotion/list/OfferPromotionListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function OfferPromotionListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.offerPromotion.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.offerPromotion.list.title')}
        </PageTitle>

        <OfferPromotionListToolbar />
        <OfferPromotionListFilter />
        <OfferPromotionListTable />
      </ContentWrapper>
    </>
  );
}

export default OfferPromotionListPage;
