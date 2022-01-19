import { ReactNode } from "react";
import { Link } from "react-router-dom";
import './Card.css';

export interface CardBadgeProps {

    /**
     *  The text of the badge that should be displayed with the card
     */
    text:string;

    /**
     *  The color of the badge that should be used.
     */
    color:string;
};

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
    badges?:Array<CardBadgeProps>;

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

    return (
        <div className="card">
            {props.image && (<img className="card-image" src={props.image} alt=''/>)}
            <div className="card-title">
                {selectable && (<input type="checkbox" onChange={onCheckboxChange} checked={props.selected || false}/>)}
                {props.url && (<Link to={props.url}>{props.title}</Link> )}
                {!props.url && (<span>{props.title}</span>)}
            </div>
            <div>
                {props.badges && (<div>
                    {props.badges.map((badge:CardBadgeProps) => (<span className="card-badge" style={{ backgroundColor: badge.color }}>{badge.text}</span>))}
                </div>)}
                {props.children}
            </div>
        </div>
    );
};

