import React from 'react';
import {Figure, Card, Row, Col} from "react-bootstrap";

export default function MissionCard(props) {


    return (
        <Card xs={props.size} as="button"
              style={props.isSelect === props.title ? props.selectedCardStyle : props.cardStyle}
              onClick={() => props.select(props.title)}>
            <Card.Body>
                <Card.Title>
                    {props.title}
                </Card.Title>
            </Card.Body>
        </Card>
    )

}
