import { buildModels } from "cogi-collectibles";
import { FormEvent } from "react";
import storeModels from "../Actions/storeModels";

export default function AddModels() {

    // submit handler for our form.
    const onSubmit = (e:FormEvent) => {

        e.preventDefault();

        const data = new FormData(e.target as HTMLFormElement);

        storeModels(buildModels(Number(data.get('count')?.toString()), data.get('name')?.toString() || ''));
    };

    return (
        <div>
            <header>
                Add models
            </header>
            <form onSubmit={onSubmit}>
                <input type="number" name="count" defaultValue="1" min="1" max="100" required/>
                <input type="text" name="name" required/>
                <button>
                    Add
                </button>
            </form>
        </div>
    );  
};