import React from 'react';
import { i18n } from 'src/i18n';
import RatingListFilter from 'src/view/rating/list/RatingListFilter';
import RatingListTable from 'src/view/rating/list/RatingListTable';
import RatingListToolbar from 'src/view/rating/list/RatingListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function RatingListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.rating.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.rating.list.title')}
        </PageTitle>

        <RatingListToolbar />
        <RatingListFilter />
        <RatingListTable />
      </ContentWrapper>
    </>
  );
}

export default RatingListPage;
