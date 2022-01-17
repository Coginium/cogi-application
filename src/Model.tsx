import { useParams } from "react-router-dom";
import useModel from "./Hooks/useModel";
import Controls from "./Model/Controls";

export default function Model() {

    const params = useParams();

    const { model } = useModel(params.model as string);

    return (
        <div className="maincontainer">
            {model && (<>
                Model: {model.name}
                <Controls model={model}/>
            </>)}
        </div>
    );
};