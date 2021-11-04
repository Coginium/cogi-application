import useCollection from "../Data/Collection";
import Model from "../Types/Model";
import Item from "./Item";

export default function List() {

    const { fetchModels } = useCollection();

    return (
        <div>
            {fetchModels().map((m:Model) => <Item key={m.id} model={m}/>)}
        </div>
    );
};