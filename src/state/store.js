// Needed imports

import { createStore } from 'redux';
import reducers from './reducers';

// Creating a store (reducers, default state)
export const store = createStore(reducers, {});
