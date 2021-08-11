import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ProductViewItem from 'src/view/product/view/ProductViewItem';
import CustomerViewItem from 'src/view/customer/view/CustomerViewItem';
import OrdersViewItem from 'src/view/orders/view/OrdersViewItem';

function CartView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <ProductViewItem
          label={i18n('entities.cart.fields.product')}
          value={record.product}
        />

        <TextViewItem
          label={i18n('entities.cart.fields.quantity')}
          value={record.quantity}
        />

        <CustomerViewItem
          label={i18n('entities.cart.fields.customer')}
          value={record.customer}
        />

        <OrdersViewItem
          label={i18n('entities.cart.fields.orders')}
          value={record.orders}
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

export default CartView;
