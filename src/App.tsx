import { atom, RecoilRoot } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import './App.css';
import Collection from './Collection';
import Model from './Types/Model';

const { persistAtom } = recoilPersist({
  key: 'collection',
  storage: localStorage
});

export const modelsAtom = atom<Array<Model>>({
  key: 'models',
  default: [],
  effects_UNSTABLE: [ persistAtom ]
});

function App() {
  return (
    <RecoilRoot>
      <header>
        Cogishpere
      </header>
      <Collection/>
    </RecoilRoot>
  );
}

export default App;
