import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ProductViewItem from 'src/view/product/view/ProductViewItem';
import RestaurantViewItem from 'src/view/restaurant/view/RestaurantViewItem';
import OffersDealsViewItem from 'src/view/offersDeals/view/OffersDealsViewItem';

function DealsView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <ProductViewItem
          label={i18n('entities.deals.fields.product')}
          value={record.product}
        />

        <RestaurantViewItem
          label={i18n('entities.deals.fields.resturant')}
          value={record.resturant}
        />

        <OffersDealsViewItem
          label={i18n('entities.deals.fields.offer')}
          value={record.offer}
        />

        <TextViewItem
          label={i18n('entities.deals.fields.endDate')}
          value={record.endDate}
        />

        <TextViewItem
          label={i18n('entities.deals.fields.costAfterDeal')}
          value={record.costAfterDeal}
        />

        <TextViewItem
          label={i18n('entities.deals.fields.costForApp')}
          value={record.costForApp}
        />        
      </div>
    );
  };

  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return renderView();
}

export default DealsView;
