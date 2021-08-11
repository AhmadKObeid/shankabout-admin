import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import RestaurantViewItem from 'src/view/restaurant/view/RestaurantViewItem';
import ResturantPromitonViewItem from 'src/view/resturantPromiton/view/ResturantPromitonViewItem';

function ResturantPromitonView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <RestaurantViewItem
          label={i18n('entities.resturantPromiton.fields.resturant')}
          value={record.resturant}
        />

        <ResturantPromitonViewItem
          label={i18n('entities.resturantPromiton.fields.offerSelected')}
          value={record.offerSelected}
        />

        <TextViewItem
          label={i18n('entities.resturantPromiton.fields.endDate')}
          value={record.endDate}
        />

        <TextViewItem
          label={i18n('entities.resturantPromiton.fields.costForApp')}
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

export default ResturantPromitonView;
