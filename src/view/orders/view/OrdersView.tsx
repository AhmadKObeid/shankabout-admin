import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import CustomViewItem from 'src/view/shared/view/CustomViewItem';
import CustomerViewItem from 'src/view/customer/view/CustomerViewItem';
import DriverViewItem from 'src/view/driver/view/DriverViewItem';
import RestaurantViewItem from 'src/view/restaurant/view/RestaurantViewItem';

function OrdersView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <CustomViewItem
          label={i18n('entities.orders.fields.status')}
          value={record.status}
          render={(values) =>
            (values || []).map((value) => (
              <div key={value}>
                {value
                  ? i18n(
                    `entities.orders.enumerators.status.${value}`,
                    )
                  : null}
              </div>
            ))
          }
        />

        <CustomerViewItem
          label={i18n('entities.orders.fields.customer')}
          value={record.customer}
        />

        <DriverViewItem
          label={i18n('entities.orders.fields.driver')}
          value={record.driver}
        />

        <RestaurantViewItem
          label={i18n('entities.orders.fields.restaurant')}
          value={record.restaurant}
        />

        <TextViewItem
          label={i18n('entities.orders.fields.location')}
          value={record.location}
        />

        <TextViewItem
          label={i18n('entities.orders.fields.description')}
          value={record.description}
        />

        <TextViewItem
          label={i18n('entities.orders.fields.totalCartPrice')}
          value={record.totalCartPrice}
        />

        <TextViewItem
          label={i18n('entities.orders.fields.deliveryCost')}
          value={record.deliveryCost}
        />

        <TextViewItem
          label={i18n('entities.orders.fields.appCollection')}
          value={record.appCollection}
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

export default OrdersView;
