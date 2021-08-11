import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import CustomViewItem from 'src/view/shared/view/CustomViewItem';

function DriverView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <CustomViewItem
          label={i18n('entities.driver.fields.status')}
          value={record.status}
          render={(values) =>
            (values || []).map((value) => (
              <div key={value}>
                {value
                  ? i18n(
                    `entities.driver.enumerators.status.${value}`,
                    )
                  : null}
              </div>
            ))
          }
        />

        <TextViewItem
          label={i18n('entities.driver.fields.fullName')}
          value={record.fullName}
        />

        <TextViewItem
          label={i18n('entities.driver.fields.username')}
          value={record.username}
        />

        <TextViewItem
          label={i18n('entities.driver.fields.password')}
          value={record.password}
        />

        <TextViewItem
          label={i18n('entities.driver.fields.currentLocation')}
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

export default DriverView;
