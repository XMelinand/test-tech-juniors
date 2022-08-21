import '../styles/globals.css'
import {Provider} from 'react-redux';
import {createStore, combineReducers}  from 'redux';
import inputInfos from '../reducers/inputInfos';
import specs from '../reducers/specs';

const store = createStore(combineReducers({inputInfos, specs}));

function MyApp({ Component, pageProps }) {
  return (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp
