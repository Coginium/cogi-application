import Badge, { BadgeProps } from './Badge';
import './Badges.css';

export interface BadgesProps {

    /**
     *  The list of badges to display.
     */
    badges:Array<BadgeProps>;
};

/**
 *  A component that helps showing a list of badges.
 */
export default function Badges(props:BadgesProps) {

    return (
        <div className="badges">
            {props.badges.map((badgeProps:BadgeProps, idx:number) => {
            
                return (<Badge key={idx} {...badgeProps}/>);
            })}
        </div>
    );
};