import React from 'react';
import { Provider } from 'react-redux';

import store from '../../state/store';

const withStore = Component => {
  const { displayName = 'Component' } = Component;

  const ComponentWithStore = () => (
    <Provider store={store}>
      <Component />
    </Provider>
  );

  ComponentWithStore.displayName = displayName;

  return ComponentWithStore;
};

export default withStore;
