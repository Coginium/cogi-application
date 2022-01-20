import './Badge.css';
export interface BadgeProps {

    /**
     *  The actual text in the badge.
     */
    text:string;

    /**
     *  The color of the badge.
     */
    color:string;
};
/**
 *  A badge component.
 */
export default function Badge(props:BadgeProps) {

    return (
        <span className="badge" style={{ backgroundColor: props.color }}>{props.text}</span>
    );
};