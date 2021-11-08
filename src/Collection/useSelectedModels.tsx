import _ from "lodash";
import { atom, useRecoilState } from "recoil";
import Model from "../Types/Model";

export const selectedModelsAtom = atom<Array<string>>({
    key: 'collection-selected-models',
    default: []
});

export default function useSelectedModels() {

    const [ list, update ] = useRecoilState(selectedModelsAtom);

    function insertSelected(input:Array<string|Model>) {

        const parsed = input.map((m:Model|string) => typeof(m) === 'string' ? m : m.id);

        update([...list, ...parsed]);
    }

    function removeSelected(input:Array<string|Model>) {

        const cleared = _.difference(list, input.map((i:string|Model) => typeof(i) === 'string' ? i : i.id));
        update(cleared);
    }

    function clearSelections() {

        update([]);
    }

    function containsSelected(m:Model|string) :boolean {

        if (typeof(m) === 'string') return !!list.find((v:string) => v === m);

        else return containsSelected(m.id);
    }

    return {
        selected: list,
        insertSelected,
        removeSelected,
        clearSelections,
        containsSelected
    };
};