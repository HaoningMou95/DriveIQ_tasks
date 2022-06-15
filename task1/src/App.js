import './App.css';
import DynamicTable from './components/DynamicTable';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import apiDataReducer from './store/reducers/apiDataReducer';

// create root reducer
const rootReducer = combineReducers({
  apiData: apiDataReducer
});

// create redux store, use thunk to handle async function 
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


function App() {  
  return (
    <Provider store={store} >
      <div>
        <DynamicTable />
      </div>
    </Provider>
  );
}

export default App;
