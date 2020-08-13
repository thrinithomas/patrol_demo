import React from 'react';
import {Card} from "react-bootstrap";

export default function DashboardCard(props) {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.remarklist[0]}

                </Card.Text>
                <Card.Text>

                    <strong>{props.remarklist[1]}</strong>

                </Card.Text>
            </Card.Body>
        </Card>

    )
}
