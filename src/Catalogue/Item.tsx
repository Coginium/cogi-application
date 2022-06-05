import { Box } from "cogi-collectibles";
import { BadgeProps, Badges, Color, Card } from "cogi-uikit";
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate();

    const box = props.box;

    let badges : BadgeProps[] = [
        { label: box.availability, color: Color.dark },
        { label: `${box.models.length} models`, color: Color.dark }
    ];

    badges = badges.concat(...props.box.tags.map((tag:string) : BadgeProps => (
        { label: tag, color: Color.red }
    )));

    return (
        <Card
            title={box.name}
            actionTitle="To collection"
            onAction={() => { navigate(`/new-model/box/${props.box.id}`) }}
        >
            <Badges badges={badges}/>
        </Card>
    );
};