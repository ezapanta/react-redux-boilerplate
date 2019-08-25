import { createStore } from 'redux';
import handler from './reducer';

let store = createStore(handler);
// store.subscribe(() => console.log(store.getState()));
export default store;