import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { configureStore } from './store';
import PersistedStore from './store'
import Routes from './routes'
const store = PersistedStore.getDefaultStore().store
function App() {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={Routes} />
      </Switch>
    </Router>
  </Provider>
  );
}

export default App;
