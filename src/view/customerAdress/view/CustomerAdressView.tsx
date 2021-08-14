import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import CustomerViewItem from 'src/view/customer/view/CustomerViewItem';

function CustomerAdressView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <CustomerViewItem
          label={i18n('entities.customerAdress.fields.customer')}
          value={record.customer}
        />

        <TextViewItem
          label={i18n('entities.customerAdress.fields.name')}
          value={record.name}
        />

        <TextViewItem
          label={i18n('entities.customerAdress.fields.locationObject')}
          value={record.locationObject}
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

export default CustomerAdressView;
