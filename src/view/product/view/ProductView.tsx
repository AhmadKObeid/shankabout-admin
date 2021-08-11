import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import RestaurantViewItem from 'src/view/restaurant/view/RestaurantViewItem';
import ProductCategoryViewItem from 'src/view/productCategory/view/ProductCategoryViewItem';

function ProductView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.product.fields.name')}
          value={record.name}
        />

        <TextViewItem
          label={i18n('entities.product.fields.description')}
          value={record.description}
        />

        <ImagesViewItem
          label={i18n('entities.product.fields.image')}
          value={record.image}
        />

        <TextViewItem
          label={i18n('entities.product.fields.price')}
          value={record.price}
        />

        <RestaurantViewItem
          label={i18n('entities.product.fields.restaurant')}
          value={record.restaurant}
        />

        <ProductCategoryViewItem
          label={i18n('entities.product.fields.category')}
          value={record.category}
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

export default ProductView;
