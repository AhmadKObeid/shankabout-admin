import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import CustomerViewItem from 'src/view/customer/view/CustomerViewItem';
import DriverViewItem from 'src/view/driver/view/DriverViewItem';
import RestaurantViewItem from 'src/view/restaurant/view/RestaurantViewItem';

function RatingView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <CustomerViewItem
          label={i18n('entities.rating.fields.customer')}
          value={record.customer}
        />

        <DriverViewItem
          label={i18n('entities.rating.fields.driver')}
          value={record.driver}
        />

        <RestaurantViewItem
          label={i18n('entities.rating.fields.resturent')}
          value={record.resturent}
        />

        <TextViewItem
          label={i18n('entities.rating.fields.from')}
          value={record.from}
        />

        <TextViewItem
          label={i18n('entities.rating.fields.to')}
          value={record.to}
        />

        <TextViewItem
          label={i18n('entities.rating.fields.value')}
          value={record.value}
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

export default RatingView;
