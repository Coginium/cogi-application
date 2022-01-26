import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set, Query, query as querySlice } from "../querySlice";

export default function() {

    const dispatch = useDispatch();
    const query = useSelector(querySlice);

    function onChange(event:ChangeEvent<HTMLInputElement>) {

        const target = event.target;

        const query:Query = { };

        if (target.value) query.keyword = target.value;

        dispatch(set(query));
    };

    return (
        <div>
            <input type="text" value={query.keyword} onChange={onChange} placeholder="Search query..."/>
        </div>
    );
};