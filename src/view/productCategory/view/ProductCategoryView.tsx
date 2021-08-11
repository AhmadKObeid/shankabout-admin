import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import RestaurantViewItem from 'src/view/restaurant/view/RestaurantViewItem';

function ProductCategoryView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.productCategory.fields.name')}
          value={record.name}
        />

        <RestaurantViewItem
          label={i18n('entities.productCategory.fields.resturent')}
          value={record.resturent}
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

export default ProductCategoryView;
