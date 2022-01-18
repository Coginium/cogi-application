import { FormEvent, useCallback, useRef } from "react";
import { useParams } from "react-router-dom";
import Field from "./Components/Field";
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

        const image = formData.get('image') as Blob;
        if (image.size > 0) storeImage(image, model.id);

    }, [ model, setModel, formRef ]);

    return (
        <form ref={formRef} className="maincontainer" onSubmit={onStore}>
            {model && (<>
                <Controls model={model}/>
                <Field label="Model name">
                    <HeaderInput name="name" defaultValue={model.name}/>
                </Field> 
                <Field label="Image">
                    <input type="file" name="image" accept="image/png, image/jpeg" />
                </Field>
                <Field label="Notes">
                    <textarea name="notes" defaultValue={model.notes}/>
                </Field>
            </>)}
        </form>
    );
};