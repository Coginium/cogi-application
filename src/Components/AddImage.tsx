import { FormEvent } from "react";

export default function AddImage() {

    function onSubmit(e:FormEvent) {
        
    }

    return (
        <div>
            <header>
                Add image
            </header>
            <form onSubmit={onSubmit}>
                <input type="file" name="image"/>
                <button>
                    Add
                </button>
            </form>
        </div>
    );
};