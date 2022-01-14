import { Model } from 'cogi-collectibles';
import useCollection from '../Hooks/useCollection';
import Item from "./Item";

export default function List() {

    const { collection } = useCollection();

    return (
        <div className="cards cards-grid">
            {collection.map((m:Model) => <Item key={m.id} model={m}/>)}
        </div>
    );
};