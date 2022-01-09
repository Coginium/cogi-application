import './App.css';
import Collection from './Collection';
import { Provider as ReduxProvider } from 'react-redux'; 
import store from './Store';

function App() {
  return (
      <ReduxProvider store={store}>
        <header>
          Cogishpere
        </header>
        <Collection/>
      </ReduxProvider>
  );
}

export default App;
