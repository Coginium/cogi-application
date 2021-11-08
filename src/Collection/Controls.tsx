import useCollection from "../Data/useCollection";
import Model from "../Types/Model";
import useSelectedModels from "./useSelectedModels";

export default function Controls() {

    const { selected } = useSelectedModels();
    const { fetchModels, upsertModels } = useCollection();

    function onStatusChange(status:string) {
        
        upsertModels(fetchModels(selected).map((m:Model) => Object.assign({ }, m, { status })));
    };

    return (
        <div>
            <button onClick={() => onStatusChange('shame')}>Shame</button>
            <button onClick={() => onStatusChange('assembled')}>Assembled</button> 
            <button onClick={() => onStatusChange('painting')}>Painting</button>
            <button onClick={() => onStatusChange('finished')}>Finished</button>
        </div>
    );
};