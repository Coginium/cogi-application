import { FormEvent, useCallback, useRef } from "react";
import { useParams } from "react-router-dom";
import HeaderInput from "./Components/HeaderInput";
import useModel from "./Hooks/useModel";
import Controls from "./Model/Controls";
import storeImage from "./Storage/storeImage";

export default function Model() {

    const params = useParams();

    const { model, setModel } = useModel(params.model as string);

    const formRef = useRef<HTMLFormElement|null>(null);

    const onStore = useCallback((event:FormEvent) => {

        event.preventDefault();

        if (!formRef.current || !model) return;

        const formData = new FormData(formRef.current);

        const newModel = Object.assign({ }, model, { 
            name:   formData.get('name'),
            notes:  formData.get('notes')
        });

        setModel(newModel);

        const image = formData.get('image');
        if (image) storeImage(formData.get('image') as Blob, model.id);

    }, [ model, setModel, formRef ]);

    return (
        <form ref={formRef} className="maincontainer" onSubmit={onStore}>
            {model && (<>
                <Controls model={model}/>
                <HeaderInput name="name" defaultValue={model.name}/>
                <input type="file" name="image" accept="image/png, image/jpeg" />
                <textarea name="notes" defaultValue={model.notes}/>
            </>)}
        </form>
    );
};