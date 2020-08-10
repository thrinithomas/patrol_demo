import React from "react";
import {Card} from "react-bootstrap";

export default function TaskboardCard(props) {

    const cardOnclick = () => {
        console.log(`${props.title} Card click`)
    }


    return (
        <Card as="a" onClick={cardOnclick} style={{ cursor: "pointer", width: '18rem'}}>
            <Card.Body>
                <Card.Title>
                    {props.title}
                </Card.Title>
            </Card.Body>
        </Card>
    )
}
