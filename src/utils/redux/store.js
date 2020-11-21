import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistReducer as pr } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { User } from './reducers';

const reducers = { User };

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers(reducers);

const persistReducer = pr(persistConfig, rootReducer);

export const configureStore = () =>
  createStore(persistReducer, composeWithDevTools(applyMiddleware(thunk)));
