import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import CustomViewItem from 'src/view/shared/view/CustomViewItem';
import ResturentCategoryViewItem from 'src/view/resturentCategory/view/ResturentCategoryViewItem';

function RestaurantView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.restaurant.fields.name')}
          value={record.name}
        />

        <CustomViewItem
          label={i18n('entities.restaurant.fields.status')}
          value={record.status}
          render={(values) =>
            (values || []).map((value) => (
              <div key={value}>
                {value
                  ? i18n(
                    `entities.restaurant.enumerators.status.${value}`,
                    )
                  : null}
              </div>
            ))
          }
        />

        <ResturentCategoryViewItem
          label={i18n('entities.restaurant.fields.category')}
          value={record.category}
        />

        <TextViewItem
          label={i18n('entities.restaurant.fields.city')}
          value={record.city}
        />

        <TextViewItem
          label={i18n('entities.restaurant.fields.address')}
          value={record.address}
        />

        <TextViewItem
          label={i18n('entities.restaurant.fields.description')}
          value={record.description}
        />

        <TextViewItem
          label={i18n('entities.restaurant.fields.googleMap')}
          value={record.googleMap}
        />

        <TextViewItem
          label={i18n('entities.restaurant.fields.fees')}
          value={record.fees}
        />

        <TextViewItem
          label={i18n('entities.restaurant.fields.maxFeesILS')}
          value={record.maxFeesILS}
        />

        <TextViewItem
          label={i18n('entities.restaurant.fields.minFeesILS')}
          value={record.minFeesILS}
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

export default RestaurantView;
