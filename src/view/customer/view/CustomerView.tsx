import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function CustomerView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.customer.fields.fullName')}
          value={record.fullName}
        />

        <TextViewItem
          label={i18n('entities.customer.fields.phoneNumber')}
          value={record.phoneNumber}
        />

        <TextViewItem
          label={i18n('entities.customer.fields.email')}
          value={record.email}
        />

        <TextViewItem
          label={i18n('entities.customer.fields.socialId')}
          value={record.socialId}
        />

        <TextViewItem
          label={i18n('entities.customer.fields.profileImage')}
          value={record.profileImage}
        />

        <TextViewItem
          label={i18n('entities.customer.fields.city')}
          value={record.city}
        />

        <TextViewItem
          label={i18n('entities.customer.fields.currentLocation')}
          value={record.currentLocation}
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

export default CustomerView;
