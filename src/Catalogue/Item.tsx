import { Box } from "cogi-collectibles";
import { Link } from "react-router-dom";
import { BadgeProps } from "../Components/Badge";
import Card from "../Components/Card";

export interface ItemProps {

    /**
     *  The object describing a box.
     */
    box:Box;
};

/**
 *  The component showing one item in the catalogue list.
 */
export default function Item(props:ItemProps) {

    const box = props.box;

    let badges = [
        { text: box.availability, color: 'var(--badge-black)' },
        { text: `${box.models.length} models`, color: 'var(--badge-black)' }
    ];

    badges = badges.concat(...props.box.tags.map((tag:string) : BadgeProps => {

        return { text: tag, color: 'var(--badge-red)' };
    }));

    return (
        <Card
            title={box.name}
            badges={badges}
        >
            <Link to={`/new-model/box/${props.box.id}`}><button>To collection</button></Link>
        </Card>
    );
};