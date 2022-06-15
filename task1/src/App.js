import './App.css';
import DynamicTable from './components/DynamicTable';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import apiDataReducer from './store/reducers/apiDataReducer';


const rootReducer = combineReducers({
  apiData: apiDataReducer
});

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
