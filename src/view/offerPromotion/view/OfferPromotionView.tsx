import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function OfferPromotionView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.offerPromotion.fields.title')}
          value={record.title}
        />

        <TextViewItem
          label={i18n('entities.offerPromotion.fields.day')}
          value={record.day}
        />

        <TextViewItem
          label={i18n('entities.offerPromotion.fields.cost')}
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

export default OfferPromotionView;
