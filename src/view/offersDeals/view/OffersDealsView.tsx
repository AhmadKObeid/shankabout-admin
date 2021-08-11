import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function OffersDealsView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.offersDeals.fields.name')}
          value={record.name}
        />

        <TextViewItem
          label={i18n('entities.offersDeals.fields.days')}
          value={record.days}
        />

        <TextViewItem
          label={i18n('entities.offersDeals.fields.cost')}
          value={record.cost}
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

export default OffersDealsView;
