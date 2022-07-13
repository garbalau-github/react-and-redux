// Needed imports

import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

// Creating a store (reducers, default state, add middleware for async requests)
export const store = createStore(reducers, {}, applyMiddleware(thunk));
