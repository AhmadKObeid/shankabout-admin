import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import CustomViewItem from 'src/view/shared/view/CustomViewItem';
import RestaurantViewItem from 'src/view/restaurant/view/RestaurantViewItem';
import DriverViewItem from 'src/view/driver/view/DriverViewItem';

function CallDriverView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <RestaurantViewItem
          label={i18n('entities.callDriver.fields.resturant')}
          value={record.resturant}
        />

        <CustomViewItem
          label={i18n('entities.callDriver.fields.status')}
          value={record.status}
          render={(values) =>
            (values || []).map((value) => (
              <div key={value}>
                {value
                  ? i18n(
                    `entities.callDriver.enumerators.status.${value}`,
                    )
                  : null}
              </div>
            ))
          }
        />

        <DriverViewItem
          label={i18n('entities.callDriver.fields.driver')}
          value={record.driver}
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

export default CallDriverView;
