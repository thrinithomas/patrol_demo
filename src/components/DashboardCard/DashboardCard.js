import React from 'react';
import { Card } from "react-bootstrap";

export default function DashboardCard(props) {
    return (
        <Card style={{ width: '18rem'}}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.remarklist}
                </Card.Text>
            </Card.Body>
        </Card>

    )
}
