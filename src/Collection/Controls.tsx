import { useRecoilValue } from "recoil";
import { selectedModelsAtom } from "../Collection";
import useCollection from "../Data/Collection";

export default function Controls() {

    const checked = useRecoilValue<Array<string>>(selectedModelsAtom);
    const { fetchModels } = useCollection();

    function onStatusChange(status:string) {

        const selected = fetchModels(checked);

        // @todo make the actual change in state

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