import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { BadgeProps } from "./Badge";
import Badges from "./Badges";
import './Card.css';

export interface CardProps {

    /**
     *  The title of the card.
     */
    title:string;

    /**
     *  An optional url than the card should point to when
     *  the title is clicked.
     */
    url?:string;

    /**
     *  Should the card be selectable?
     */
    selectable?:boolean;

    /**
     *  A callback to be called when the user chooses to chenge
     *  the state of the selection.
     */
    onSelectChange?:(selected:boolean) => void;

    /**
     *  Should the card be selected?
     */
    selected?:boolean;

    /**
     *  A url to an image associated with the card.
     */
    image?:string;

    /**
     *  An array of possible badges for the item.
     */
    badges?:Array<BadgeProps>;

    /**
     *  The content of the card.
     */
    children:ReactNode;
};

/**
 *  This is a component that holds a card of a thing. This is mainly a layout element with
 *  some decorations around it. This component should be used when we deal with a list of
 *  items that present complex data structure (like a model or so).
 * 
 *  A card should be provided with a title and a content.
 * 
 *  The card can contain a number of optional features:
 *  - image
 *  - select mechanism
 */
export default function Card(props:CardProps) {

    const selectable = props.selectable || false;

    function onCheckboxChange(event:any) {
        
        const target = event.target as HTMLInputElement;

        const checked = target.checked === true;

        if (props.onSelectChange) props.onSelectChange(checked);

        // @todo do we need a state here?
    };

    const cardCSS = [ 'card' ];
    if (props.image) cardCSS.push('card-withside');

    return (
        <div className={cardCSS.join(' ')}>
            {props.image && (<img className="card-image" src={props.image} alt=''/>)}
            <div className="card-title">
                {selectable && (<input type="checkbox" onChange={onCheckboxChange} checked={props.selected || false}/>)}
                {props.url && (<Link to={props.url}>{props.title}</Link> )}
                {!props.url && (<span>{props.title}</span>)}
            </div>
            <div>
                {props.badges && (<Badges badges={props.badges}/>)}
                {props.children}
            </div>
        </div>
    );
};

