import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import RestaurantViewItem from 'src/view/restaurant/view/RestaurantViewItem';

function RestaurantOwnerView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <RestaurantViewItem
          label={i18n('entities.restaurantOwner.fields.resturentId')}
          value={record.resturentId}
        />

        <TextViewItem
          label={i18n('entities.restaurantOwner.fields.username')}
          value={record.username}
        />

        <TextViewItem
          label={i18n('entities.restaurantOwner.fields.password')}
          value={record.password}
        />

        <TextViewItem
          label={i18n('entities.restaurantOwner.fields.map')}
          value={record.map}
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

export default RestaurantOwnerView;
