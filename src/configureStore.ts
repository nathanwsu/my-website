import { History } from 'history';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  GenericStoreEnhancer,
  ReducersMapObject,
  Store,
  StoreEnhancerStoreCreator,
} from 'redux';

import { reducer as formReducer } from 'redux-form';

import createSagaMiddleware from 'redux-saga';
import { ApplicationState, rootreducer } from './redux/reducers';
import rootSaga from './redux/sagas/index';

const rootReducerLocation = './redux/reducers';

function buildRootReducer(allReducers: ReducersMapObject) {
  const reducerWithRouter = {
    ...allReducers,
    routing: routerReducer,
    form: formReducer,
  };
  return combineReducers<ApplicationState>(reducerWithRouter as any);
}

export default function configureStore(history: History, initialState?: Application State) {
  const sagaMiddleware = createSagaMiddleware();
  const createStoreWithMiddleware = compose(
    applyMiddleware(sagaMiddleware, routerMiddleware(history))
  )(createStore);
  
  // Combine all reducers and instantiate the app-wide store instance
  const allReducers = buildRootReducer(rootreducer);
  const store = createStoreWithMiddleware(allReducers, initialState) as Store<
    ApplicationState
  >;
  
  sagaMiddleware.run(rootSaga);

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept(rootReducerLocation, () => {
      const nextRootReducer = require<typeof rootreducer>(rootReducerLocation);
      store.replaceReducer(buildRootReducer(rootreducer));
    });
  }
  return store;
}
