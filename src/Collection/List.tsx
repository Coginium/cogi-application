import { Model } from 'cogi-collectibles';
import { useEffect, useState } from 'react';
import fetchModels from '../Actions/fetchModels';
import Item from "./Item";

export default function List() {

    const [ displayed, setDisplayed ] = useState<Array<Model>>([]);

    useEffect(() => {

        fetchModels().then((models:Array<Model>) => void setDisplayed(models));
    });

    return (
        <div>
            {displayed.map((m:Model) => <Item key={m.id} model={m}/>)}
        </div>
    );
};