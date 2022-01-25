import './Styles.css';
import './App.css';
import Collection from './Collection';
import { Provider as ReduxProvider } from 'react-redux'; 
import store from './Store';
import Catalogue from './Catalogue';
import { Route, Routes, HashRouter } from 'react-router-dom';
import Frame from './Frame';
import Model from './Model';
import AddModels from './AddModels';

function App() {
  return (
      <ReduxProvider store={store}>
        <HashRouter>
          <Routes>
            <Route path="*" element={<Frame/>}>
              <Route path="catalogue" element={<Catalogue/>}/>
              <Route path="collection" element={<Collection/>}/>              
              <Route path="model/:model" element={<Model/>}/>
              <Route path="new-model/:type/:id" element={<AddModels/>}/>
            </Route>
          </Routes>
        </HashRouter>
      </ReduxProvider>
  );
}

export default App;
