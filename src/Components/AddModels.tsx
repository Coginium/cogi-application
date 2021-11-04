import { FormEvent } from "react";
import useCollection from '../Data/Collection';

export default function AddModels() {

    const { buildModels } = useCollection();

    // submit handler for our form.
    const onSubmit = (e:FormEvent) => {

        e.preventDefault();

        const data = new FormData(e.target as HTMLFormElement);

        buildModels(Number(data.get('count')?.toString()), { name: data.get('name')?.toString() || ''});
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