import { GlobalAction, GlobalProductAction,GlobalBastionAction ,GlobalState } from "./types";
import { Store, createStore, combineReducers, applyMiddleware } from "redux";
import { uiStateReducer, productStateReducer, BasketStateReducer } from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import createSagaMiddleware from 'redux-saga'

import productSaga from './saga'



const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = composeWithDevTools({});

export function createGlobalStore(): Store<GlobalState, GlobalAction|GlobalBastionAction|GlobalProductAction> {
  const rootReducer = combineReducers({
    uiState: uiStateReducer,
    productsCategoryState: productStateReducer,
    BasketState: BasketStateReducer
  });


  const store = createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleware)));

  sagaMiddleware.run(productSaga);
  return store;
}
