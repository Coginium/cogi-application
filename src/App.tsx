import './App.css';
import Collection from './Collection';
import { Provider as ReduxProvider } from 'react-redux'; 
import store from './Store';
import Catalogue from './Catalogue';

function App() {
  return (
      <ReduxProvider store={store}>
        <header>
          Cogishpere
        </header>
        <Catalogue/>
        <Collection/>
      </ReduxProvider>
  );
}

export default App;
